import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { defaultCheckoutSelection, getPlanBySelection } from '@/lib/checkoutCatalog';

export async function POST(request) {
  try {
    const body = await request.json();
    const billing = body.billing || defaultCheckoutSelection.billing;
    const selectedPlan = getPlanBySelection(billing, body.planId);

    const secretKey = process.env.STRIPE_SECRET_KEY?.trim();
    if (!secretKey) {
      return NextResponse.json(
        {
          error: 'Stripe is not configured yet. Add STRIPE_SECRET_KEY and the matching STRIPE_PRICE_* values in frontend/.env.local.',
        },
        { status: 503 },
      );
    }

    const priceId = process.env[selectedPlan.stripePriceEnv]?.trim();
    if (!priceId) {
      return NextResponse.json(
        {
          error: `Missing ${selectedPlan.stripePriceEnv}. Add the Stripe Price ID for ${selectedPlan.name} before using checkout.`,
        },
        { status: 503 },
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'http://localhost:3000';
    const stripe = new Stripe(secretKey);

    const session = await stripe.checkout.sessions.create({
      mode: selectedPlan.mode,
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: body.email || undefined,
      billing_address_collection: 'required',
      phone_number_collection: { enabled: true },
      allow_promotion_codes: true,
      customer_creation: selectedPlan.mode === 'payment' ? 'always' : undefined,
      success_url: `${siteUrl}/checkout/success?plan=${selectedPlan.id}&billing=${billing}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout/cancel?plan=${selectedPlan.id}&billing=${billing}`,
      metadata: {
        planId: selectedPlan.id,
        billing,
        company: body.company || '',
        source: 'website_checkout',
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Unable to create a checkout session.',
      },
      { status: 500 },
    );
  }
}
