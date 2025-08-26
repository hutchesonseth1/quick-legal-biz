import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

// 🚨 Disable Next.js default body parsing (we need the raw buffer)
export const config = {
  api: { bodyParser: false },
};

// Helper: read raw request body into a Buffer
async function buffer(readable: any) {
  const chunks: Buffer[] = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2024-06-20",
  });

  const sig = req.headers["stripe-signature"] as string;
  const buf = await buffer(req);

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // ✅ Log the event type
  console.log("✅ Stripe event received:", event.type);

  // Respond with 200 so Stripe knows it succeeded
  res.json({ received: true });
}
