import Link from 'next/link';
import SiteFrame from '@/components/SiteFrame';

export const metadata = {
  title: 'Checkout Paused | Cinemora Studios',
  description: 'Your checkout was paused. Return when you are ready or request a custom quote.',
};

export default function CheckoutCancelPage() {
  return (
    <SiteFrame>
      <div className="premium-page section-dark">
        <div className="h-rule" style={{ opacity: 0.1 }} />
        <section className="premium-shell">
          <div className="premium-stage premium-simple-stage">
            <span className="premium-kicker">Checkout paused</span>
            <h1 className="premium-title is-compact">
              <span>Not Quite</span>
              <span>Ready Yet</span>
            </h1>
            <p className="premium-dek">
              No problem. You can jump back into checkout any time, request a custom quote, or use the support page if you want clarity before moving forward.
            </p>
            <div className="premium-inline-links">
              <Link href="/checkout" className="studio-submit is-inline">
                Return to checkout
              </Link>
              <Link href="/enquiry" className="premium-link">
                Request a custom quote
              </Link>
            </div>
          </div>
        </section>
        <div className="h-rule" style={{ opacity: 0.1 }} />
      </div>
    </SiteFrame>
  );
}
