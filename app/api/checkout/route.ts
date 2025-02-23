import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
});

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: body.items.map(
        (item: { name: string; price: number; quantity: number }) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
            },
            unit_amount: item.price,
          },
          quantity: item.quantity,
        })
      ),
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/cancel`,
    });

    // Return Session ID
    return NextResponse.json({ id: session.id });
  } catch (err: unknown) {
    console.error("Stripe Error:", err);
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { error: "An unknown error occurred" },
        { status: 500 }
      );
    }
  }
}
