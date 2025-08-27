import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-06-20" });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { priceId, product } = req.body as { priceId?: string; product?: string };
  if (!priceId) return res.status(400).json({ error: "Missing priceId" });

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/store`,
      metadata: { product: product || "Legal Package" },
    });

    return res.status(200).json({ url: session.url });
  } catch (e: any) {
    console.error("checkout error", e?.message || e);
    return res.status(500).json({ error: "Stripe error" });
  }
}
