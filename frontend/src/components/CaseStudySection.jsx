'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useViewport from '@/components/useViewport';

export default function CaseStudySection() {
    const imgRef = useRef(null);
    const { isMobile, isTablet } = useViewport();
    const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] });
    const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

    return (
        <section id="work" className="section-dark">
            <div className="h-rule" style={{ opacity: 0.1 }} />
            <div className="px" style={{ paddingTop: isMobile ? 56 : 72, paddingBottom: isMobile ? 56 : 72 }}>

                {/* Top CTA strip */}
                <div style={{
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    paddingBottom: isMobile ? 28 : 40, marginBottom: isMobile ? 48 : 64,
                    display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
                    gap: isMobile ? 20 : 32, alignItems: 'center',
                }}>
                    {/* Animated Metrics Charts */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <span className="label-tag" style={{ color: 'rgba(255,255,255,0.40)' }}>Faster Delivery</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                            {/* Circular Chart */}
                            <motion.div
                                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
                                style={{ position: 'relative', width: 64, height: 64 }}
                            >
                                <svg width="64" height="64" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                                    <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.08)" strokeWidth="6" fill="none" />
                                    <motion.circle
                                        cx="50" cy="50" r="40" stroke="#b23411" strokeWidth="6" fill="none"
                                        strokeDasharray="251" strokeDashoffset="251" strokeLinecap="round"
                                        variants={{
                                            hidden: { strokeDashoffset: 251 },
                                            visible: { strokeDashoffset: 251 * (1 - 0.40), transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }
                                        }}
                                    />
                                </svg>
                                <span style={{
                                    position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontFamily: 'var(--font-grotesk)', fontWeight: 800, fontSize: 16, color: 'var(--text-light)', marginTop: 2
                                }}>40%</span>
                            </motion.div>
                            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'rgba(255,255,255,0.5)', maxWidth: 120 }}>Improvement over standard</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <span className="label-tag" style={{ color: 'rgba(255,255,255,0.40)' }}>Fewer Revisions</span>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            <span style={{ fontFamily: 'var(--font-grotesk)', fontWeight: 900, fontSize: 'clamp(28px,3vw,42px)', letterSpacing: '-0.04em', color: 'var(--text-light)', lineHeight: '1em' }}>-25%</span>
                            {/* Horizontal Bar Chart */}
                            <motion.div
                                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
                                style={{ width: '100%', maxWidth: 180, height: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 2, overflow: 'hidden' }}
                            >
                                <motion.div
                                    style={{ height: '100%', background: '#b23411', transformOrigin: 'left' }}
                                    variants={{
                                        hidden: { scaleX: 0 },
                                        visible: { scaleX: 0.75, transition: { duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }
                                    }}
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* CTA btn + quote */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
                        <a href="#contact" className="cta-btn" style={{ width: 'fit-content' }}>
                            Start a Project
                            <span className="arrow">↗</span>
                        </a>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{ width: 36, height: 36, borderRadius: '50%', overflow: 'hidden', background: '#333', flexShrink: 0 }}>
                                <img src="/linie-clarity-right.jpg" alt="quote" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'rgba(255,255,255,0.42)', fontStyle: 'italic', lineHeight: '1.5em', maxWidth: 240 }}>
                                "Excellence in every detail drives everything we do."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section label */}
                <div style={{ marginBottom: 16 }}>
                    <span style={{
                        fontFamily: 'var(--font-grotesk)', fontSize: 10, fontWeight: 500,
                        letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)',
                    }}>
                        ■ 005&nbsp;&nbsp;&nbsp;SUCCESS STORY
                    </span>
                </div>

                {/* Big heading */}
                <div style={{ overflow: 'hidden', marginBottom: 40 }}>
                    <motion.h2
                        className="section-heading"
                        style={{ color: 'var(--text-light)' }}
                        initial={isMobile ? { opacity: 0, y: 18 } : { y: '100%' }}
                        whileInView={isMobile ? { opacity: 1, y: 0 } : { y: '0%' }}
                        viewport={{ once: true, amount: isMobile ? 0.1 : 0.4 }}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Case Study
                    </motion.h2>
                </div>

                {/* Two-col: photo + project card */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: '1px',
                    background: 'rgba(255,255,255,0.06)',
                }}>
                    {/* Photo */}
                    <div ref={imgRef} style={{ overflow: 'hidden', background: '#1a1a1a', minHeight: isMobile ? 280 : 400 }}>
                        <motion.img
                            src="/linie-service-design.jpg"
                            alt="Case study"
                            style={{
                                width: '100%', height: '130%', objectFit: 'cover',
                                y: imgY, filter: 'grayscale(40%)',
                            }}
                        />
                    </div>

                    {/* Project info card */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            background: '#161616', padding: isMobile ? '24px 18px' : '32px',
                            display: 'flex', flexDirection: 'column', gap: 24,
                        }}
                    >
                        {/* Logo + date */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 20 }}>
                            <span style={{ fontFamily: 'var(--font-grotesk)', fontWeight: 800, fontSize: 18, letterSpacing: '-0.02em', color: 'var(--text-light)' }}>AlphaWave</span>
                            <span className="label-tag">August 2025</span>
                        </div>

                        {/* Details grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                            gap: '1px',
                            background: 'rgba(255,255,255,0.06)',
                        }}>
                            {[
                                { l: 'Industry:', v: 'Real Estate Agency' },
                                { l: 'Tools:', v: 'Figma, Framer' },
                                { l: 'Challenge:', v: 'Outdated design, <1% conversions.' },
                                { l: 'Solution:', v: 'Simplified flow & optimized conversions.' },
                            ].map(item => (
                                <div key={item.l} style={{ background: '#161616', padding: '18px 16px' }}>
                                    <p className="label-tag" style={{ marginBottom: 6 }}>{item.l}</p>
                                    <p className="body-text" style={{ fontSize: 13 }}>{item.v}</p>
                                </div>
                            ))}
                        </div>

                        {/* Result */}
                        <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                            <span className="label-tag" style={{ marginBottom: 8, display: 'block' }}>Result</span>
                            <p style={{ fontFamily: 'var(--font-grotesk)', fontWeight: 700, fontSize: 'clamp(20px,2vw,28px)', letterSpacing: '-0.03em', color: 'var(--text-light)', lineHeight: '1.1em' }}>
                                312% increase in qualified leads in 90 days.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="h-rule" style={{ opacity: 0.1 }} />
        </section>
    );
}
