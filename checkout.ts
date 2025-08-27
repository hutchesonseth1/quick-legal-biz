import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  try {
    const { priceId, product } = (await req.json()) as {
      priceId?: string;
      product?: string;
    };
    if (!priceId) {
      return Response.json({ error: "Missing priceId" }, { status: 400 });
    }

    const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,
      metadata: product ? { product } : undefined,
      success_url: `${site}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${site}/store`,
    });

    return Response.json({ url: session.url });
  } catch (err: any) {
    console.error("checkout error", err);
    return Response.json({ error: err.message ?? "Server error" }, { status: 500 });
  }
}
