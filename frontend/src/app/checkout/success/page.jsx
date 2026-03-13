import Link from 'next/link';
import SiteFrame from '@/components/SiteFrame';

export const metadata = {
  title: 'Checkout Success | Cinemora Studios',
  description: 'Your checkout is complete. Continue into the premium client onboarding flow.',
};

export default function CheckoutSuccessPage() {
  return (
    <SiteFrame>
      <div className="premium-page section-dark">
        <div className="h-rule" style={{ opacity: 0.1 }} />
        <section className="premium-shell">
          <div className="premium-stage premium-simple-stage">
            <span className="premium-kicker">Payment received</span>
            <h1 className="premium-title is-compact">
              <span>Checkout</span>
              <span>Complete</span>
            </h1>
            <p className="premium-dek">
              Your payment is confirmed. The next step is to complete onboarding so we can align strategy, assets, goals, and launch priorities.
            </p>
            <div className="premium-inline-links">
              <Link href="/onboarding" className="studio-submit is-inline">
                Start onboarding
              </Link>
              <Link href="/support" className="premium-link is-muted">
                Need help first?
              </Link>
            </div>
          </div>
        </section>
        <div className="h-rule" style={{ opacity: 0.1 }} />
      </div>
    </SiteFrame>
  );
}
