'use client';

import RollingText from '@/components/RollingText';

const navigationLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Case Studies', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Journal', href: '#journal' },
    { label: 'Contact', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
];

const legalLinks = [
    { label: 'Privacy Policy', href: '#contact' },
    { label: 'Terms of Service', href: '#contact' },
];

const connectLinks = [
    { label: 'Facebook', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Dribbble', href: '#' },
    { label: 'Behance', href: '#' },
];

function FooterLink({ link }) {
    return (
        <a
            href={link.href}
            className="group roll-trigger"
            style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                fontFamily: 'var(--font-sans)', fontSize: '13px',
                transition: 'color 0.3s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-light)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
        >
            <span className="sr-only">{link.label}</span>
            <RollingText text={link.label} style={{ fontFamily: 'var(--font-sans)', fontSize: '13px' }} />
            <span
                style={{
                    opacity: 0, transform: 'translateX(-8px)',
                    transition: 'opacity 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    fontSize: 10, color: '#b23411'
                }}
                className="group-hover:opacity-100 group-hover:translate-x-1"
            >
                ↗
            </span>
        </a>
    );
}

export default function Footer() {
    return (
        <footer className="section-dark site-footer">
            <div className="h-rule" style={{ opacity: 0.1 }} />

            <div className="px footer-shell">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-brand-top">
                            <span>Beyond Design</span>
                            <a href="#hero" className="footer-logo">■■ CINEMORA</a>
                        </div>
                        <p>
                            Designing modern brands, sales systems, and high-trust digital experiences with purpose and precision.
                        </p>
                    </div>

                    <div className="footer-contact">
                        <a href="tel:+18564561234">+1 (856) 456 1234</a>
                        <a href="mailto:hello@cinemora.com">hello@cinemora.com</a>
                    </div>

                    <div className="footer-links-group" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <h3 style={{ fontFamily: 'var(--font-grotesk)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-light)', textTransform: 'uppercase' }}>Navigation</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
                            {navigationLinks.map((link) => (
                                <FooterLink key={link.label} link={link} />
                            ))}
                        </div>
                    </div>

                    <div className="footer-links-group" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <h3 style={{ fontFamily: 'var(--font-grotesk)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-light)', textTransform: 'uppercase' }}>Legal</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
                            {legalLinks.map((link) => (
                                <FooterLink key={link.label} link={link} />
                            ))}
                        </div>
                    </div>

                    <div className="footer-links-group" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <h3 style={{ fontFamily: 'var(--font-grotesk)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-light)', textTransform: 'uppercase' }}>Connect</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
                            {connectLinks.map((link) => (
                                <FooterLink key={link.label} link={link} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© Cinemora Studios 2026. All rights reserved.</p>
                    <p>Built with precision. Delivered with impact.</p>
                </div>
            </div>
        </footer>
    );
}
