'use client';

import { motion } from 'framer-motion';

const caseStudies = [
    { id: '01', client: 'Elite Coach Brand', result: '$1.2M from organic', tag: 'Personal Brand', year: '2024' },
    { id: '02', client: 'PropScale Realty', result: '340% lead increase', tag: 'Real Estate', year: '2024' },
    { id: '03', client: 'Business Coach', result: '$3.8M course revenue', tag: 'Paid Ads + VSL', year: '2024' },
    { id: '04', client: 'Luxury RE Agent', result: '2,800% IG growth', tag: 'Content Engine', year: '2025' },
    { id: '05', client: 'Mindset Coach', result: '14 clients × $5.5K', tag: 'Brand + Funnel', year: '2025' },
];

export default function CaseStudies() {
    return (
        <section id="work" className="section-dark">
            <div className="h-rule-dark" />

            <div className="px py">
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
                    <div>
                        <p className="counter-label" style={{ marginBottom: 16, color: 'rgba(255,255,255,0.32)' }}>03 — Case Studies</p>
                        <div style={{ overflow: 'hidden' }}>
                            <motion.h2
                                className="heading-lg"
                                initial={{ y: '110%' }}
                                whileInView={{ y: '0%' }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                style={{ color: 'var(--white)' }}
                            >
                                Our Work
                            </motion.h2>
                        </div>
                    </div>
                    <a href="#" className="link-arrow" style={{ color: 'rgba(255,255,255,0.48)', paddingBottom: 8 }}>
                        All Projects →
                    </a>
                </div>

                {/* Ruled list */}
                <div>
                    <div className="h-rule-dark" />
                    {caseStudies.map((c, i) => (
                        <motion.div
                            key={c.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: i * 0.06, ease: 'easeOut' }}
                        >
                            <div
                                className="group"
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '40px 1fr auto auto',
                                    alignItems: 'center',
                                    gap: 24,
                                    padding: '24px 0',
                                    cursor: 'pointer',
                                    transition: 'opacity .2s',
                                    borderBottom: '1px solid rgba(255,255,255,0.10)',
                                }}
                                onMouseEnter={e => e.currentTarget.style.opacity = '0.64'}
                                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                            >
                                {/* Number */}
                                <span className="counter-label" style={{ color: 'rgba(255,255,255,0.28)' }}>{c.id}</span>

                                {/* Client name */}
                                <h3
                                    style={{
                                        fontFamily: 'var(--font-space-grotesk)', fontWeight: 700,
                                        fontSize: 'clamp(20px,2.5vw,36px)', letterSpacing: '-0.03em',
                                        textTransform: 'uppercase', color: 'var(--white)', lineHeight: '1em'
                                    }}
                                >
                                    {c.client}
                                </h3>

                                {/* Tag */}
                                <span className="label-sm" style={{ color: 'rgba(255,255,255,0.32)', display: 'none', whiteSpace: 'nowrap' }}
                                    ref={el => { if (el) { const show = () => el.style.display = 'block'; const hide = () => el.style.display = 'none'; el.parentElement?.addEventListener('mouseenter', show); el.parentElement?.addEventListener('mouseleave', hide); } }}>
                                    {c.tag}
                                </span>

                                <div style={{ display: 'flex', alignItems: 'center', gap: 24, textAlign: 'right' }}>
                                    {/* Result */}
                                    <p style={{
                                        fontFamily: 'var(--font-space-grotesk)', fontWeight: 500, fontSize: 14,
                                        color: 'var(--accent)', letterSpacing: '-0.01em', whiteSpace: 'nowrap'
                                    }}>
                                        {c.result}
                                    </p>
                                    {/* Year */}
                                    <span className="label-sm" style={{ color: 'rgba(255,255,255,0.24)', minWidth: 32 }}>{c.year}</span>
                                    {/* Arrow */}
                                    <span style={{ color: 'rgba(255,255,255,0.24)', fontSize: 18, lineHeight: 1 }}>→</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    <div className="h-rule-dark" />
                </div>
            </div>

            <div className="h-rule-dark" />
        </section>
    );
}
