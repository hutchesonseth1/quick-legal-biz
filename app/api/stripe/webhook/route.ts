import Stripe from "stripe";
import { headers } from "next/headers";

export const runtime = "nodejs";        // ensure Node runtime
export const dynamic = "force-dynamic";  // allow raw body

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const body = await req.text(); // raw body
  const sig = headers().get("stripe-signature");
  if (!sig) return new Response("Missing stripe-signature", { status: 400 });

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log("✅ checkout.session.completed", session.id);
        break;
      }
      default:
        console.log(`ℹ️ Unhandled event: ${event.type}`);
    }

    return new Response(null, { status: 200 });
  } catch (err: any) {
    console.error("❌ Webhook verify failed:", err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }
}
