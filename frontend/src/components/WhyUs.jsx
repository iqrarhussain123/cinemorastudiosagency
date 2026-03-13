'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import RevealWords from '@/components/RevealWords';
import useViewport from '@/components/useViewport';

const cards = [
    { num: 'I', title: 'Experience', desc: 'Turning ideas into refined design solutions across multiple industries.', metric: '8', metricLabel: 'Industries Served' },
    { num: 'II', title: 'Transparency', desc: 'Keeping every step visible, ensuring clarity and trust throughout the process.', metric: '4', metricLabel: 'Step Review' },
    { num: 'III', title: 'Proven Results', desc: 'Design that drives engagement, growth, and measurable success.', metric: '3x', metricLabel: 'ROI Growth' },
    { num: 'IV', title: 'Efficiency', desc: 'Delivering exceptional work on time while preserving creativity and quality.', metric: '25+', metricLabel: 'Team Experts' },
];

function ProgressBar({ value }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.8 });
    return (
        <div ref={ref} className="progress-bar-track">
            <div className="progress-bar-fill" style={{ transform: inView ? `scaleX(${value / 100})` : 'scaleX(0)', transition: 'transform 1.4s cubic-bezier(0.16,1,0.3,1)' }} />
        </div>
    );
}

export default function WhyUs() {
    const { isMobile, isTablet } = useViewport();

    return (
        <section className="section-light">
            <div className="h-rule-light" />
            <div className="px" style={{ paddingTop: isMobile ? 56 : 72, paddingBottom: isMobile ? 56 : 72 }}>

                {/* Header */}
                <div style={{ marginBottom: 16 }}>
                    <span style={{
                        fontFamily: 'var(--font-grotesk)', fontSize: 10, fontWeight: 500,
                        letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.38)',
                    }}>
                        ■ 003&nbsp;&nbsp;&nbsp;WHY US
                    </span>
                </div>

                {/* Large statement */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, minmax(0, 1fr))',
                    gap: 0,
                    marginBottom: 56,
                }}>
                    <RevealWords
                        as="p"
                        text="We blend creativity with innovation to create measurable outcomes. Our team combines deep industry experience with a commitment to excellence."
                        amount={0.4}
                        startDelay={0.06}
                        step={0.024}
                        style={{
                            gridColumn: isMobile ? '1' : '1 / span 2',
                            fontFamily: 'var(--font-grotesk)', fontWeight: 600,
                            fontSize: 'clamp(18px,2vw,26px)', lineHeight: '1.35em',
                            letterSpacing: '-0.02em', color: 'var(--text-dark)',
                            maxWidth: isMobile ? '100%' : 820,
                        }}
                    />
                </div>

                {/* 4 cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, minmax(0, 1fr))' : 'repeat(4,1fr)',
                    gap: '1px',
                    background: 'rgba(0,0,0,0.10)',
                    marginBottom: isMobile ? 48 : 64,
                }}>
                    {cards.map((c, i) => (
                        <motion.div
                            key={c.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                background: 'var(--bg-offwhite)', padding: '24px 24px 28px',
                                display: 'flex', flexDirection: 'column', gap: 16,
                            }}
                        >
                            {/* num + title */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <span style={{ fontFamily: 'var(--font-grotesk)', fontSize: 9, letterSpacing: '0.16em', color: 'rgba(0,0,0,0.28)', textTransform: 'uppercase' }}>{c.num}</span>
                                <span className="label-tag" style={{ color: 'rgba(0,0,0,0.38)' }}>{c.title}</span>
                            </div>
                            <p className="body-text" style={{ color: 'rgba(0,0,0,0.58)', fontSize: 13, flex: 1 }}>{c.desc}</p>
                            {/* Metric */}
                            <div style={{ borderTop: '1px solid rgba(0,0,0,0.09)', paddingTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                <span style={{ fontFamily: 'var(--font-grotesk)', fontWeight: 800, fontSize: 'clamp(28px,3vw,48px)', letterSpacing: '-0.04em', color: 'var(--text-dark)', lineHeight: '1em' }}>
                                    {c.metric}
                                </span>
                                <span className="label-tag" style={{ color: 'rgba(0,0,0,0.36)', textAlign: 'right', maxWidth: 80, lineHeight: '1.4em' }}>{c.metricLabel}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ─── "TURNING IDEAS INTO RESULTS" strip ─── */}
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.11)', paddingTop: isMobile ? 32 : 48 }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, minmax(0, 1fr))',
                        gap: 0,
                        alignItems: 'end',
                    }}>
                        <div style={{ gridColumn: isMobile ? '1' : '1 / span 2', overflow: 'hidden', paddingRight: isMobile ? 0 : 32 }}>
                            <motion.h2
                                className="section-heading-sm"
                                style={{ color: 'var(--text-dark)', textTransform: 'uppercase' }}
                                initial={isMobile ? { opacity: 0, y: 16 } : { y: '100%' }}
                                whileInView={isMobile ? { opacity: 1, y: 0 } : { y: '0%' }}
                                viewport={{ once: true, amount: isMobile ? 0.1 : 0.6 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            >
                                Turning Ideas<br />Into Results
                            </motion.h2>
                        </div>

                        {/* Percentage bars */}
                        <div style={{ gridColumn: isMobile ? '1' : '3 / span 2', display: 'flex', flexDirection: 'column', gap: 28 }}>
                            {[
                                { label: 'Client Satisfaction', pct: 95 },
                                { label: 'Returning Clients', pct: 80 },
                            ].map((bar, i) => (
                                <motion.div
                                    key={bar.label}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                                        <span className="label-tag" style={{ color: 'var(--text-gray)' }}>{bar.label}</span>
                                        <span style={{ fontFamily: 'var(--font-grotesk)', fontWeight: 800, fontSize: 24, letterSpacing: '-0.04em', color: 'var(--text-dark)' }}>{bar.pct}%</span>
                                    </div>
                                    <ProgressBar value={bar.pct} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-rule-light" />
        </section>
    );
}
