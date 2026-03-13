'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useViewport from '@/components/useViewport';

const caseStudyDetails = [
    { label: 'Industry:', value: 'Real Estate Agency' },
    { label: 'Tools:', value: 'Figma, Framer' },
    { label: 'Challenge:', value: 'Outdated design, <1% conversions.' },
    { label: 'Solution:', value: 'Simplified flow & optimized conversions.' },
];

export default function CaseStudySection() {
    const imgRef = useRef(null);
    const { isMobile, isTablet } = useViewport();
    const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] });
    const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);

    return (
        <section id="work" className="section-dark case-study-section">
            <div className="h-rule" style={{ opacity: 0.1 }} />

            <div className="px" style={{ paddingTop: isMobile ? 48 : 72, paddingBottom: isMobile ? 48 : 72 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? 24 : 36 }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 20,
                        }}
                    >
                        <span
                            style={{
                                fontFamily: 'var(--font-grotesk)',
                                fontSize: 10,
                                fontWeight: 500,
                                letterSpacing: '0.16em',
                                textTransform: 'uppercase',
                                color: 'rgba(255,255,255,0.28)',
                            }}
                        >
                            ■ 005&nbsp;&nbsp;&nbsp;SUCCESS STORY
                        </span>

                        {!isMobile ? (
                            <div
                                aria-hidden="true"
                                style={{
                                    position: 'relative',
                                    width: 32,
                                    height: 32,
                                    borderRadius: '50%',
                                    border: '1px solid rgba(255,255,255,0.26)',
                                    opacity: 0.8,
                                }}
                            >
                                <span
                                    style={{
                                        position: 'absolute',
                                        top: -4,
                                        left: -4,
                                        width: 10,
                                        height: 10,
                                        borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.92)',
                                    }}
                                />
                            </div>
                        ) : null}
                    </div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, minmax(0, 1fr))',
                            gap: 0,
                            minHeight: isMobile ? 'auto' : isTablet ? 640 : 860,
                            background: 'rgba(255,255,255,0.04)',
                        }}
                    >
                        <div
                            ref={imgRef}
                            style={{
                                gridColumn: isMobile ? '1' : '1 / span 2',
                                overflow: 'hidden',
                                background: '#120f0d',
                                minHeight: isMobile ? 380 : '100%',
                            }}
                        >
                            <motion.img
                                src="/linie-service-design.jpg"
                                alt="Case study"
                                style={{
                                    width: '100%',
                                    height: '118%',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    y: imgY,
                                    filter: 'grayscale(12%) brightness(0.88)',
                                }}
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                gridColumn: isMobile ? '1' : '3 / span 2',
                                background: '#171717',
                                padding: isMobile ? '24px 18px' : isTablet ? '28px 24px' : '34px 32px 30px',
                                display: 'grid',
                                gridTemplateRows: 'auto auto 1fr auto',
                                gap: isMobile ? 22 : 26,
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    gap: 16,
                                    paddingBottom: isMobile ? 18 : 24,
                                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: 'var(--font-grotesk)',
                                        fontWeight: 800,
                                        fontSize: isMobile ? 24 : 18,
                                        letterSpacing: '-0.03em',
                                        color: 'var(--text-light)',
                                    }}
                                >
                                    AlphaWave
                                </span>
                                <span className="label-tag">August 2025</span>
                            </div>

                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, minmax(0, 1fr))',
                                    gap: 0,
                                    borderTop: '1px solid rgba(255,255,255,0.06)',
                                    borderLeft: isMobile ? 'none' : '1px solid rgba(255,255,255,0.06)',
                                }}
                            >
                                {caseStudyDetails.map((item, index) => (
                                    <div
                                        key={item.label}
                                        style={{
                                            background: '#171717',
                                            padding: isMobile ? '20px 0' : '22px 18px 20px',
                                            borderBottom: '1px solid rgba(255,255,255,0.06)',
                                            borderRight: !isMobile && index % 2 === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                                        }}
                                    >
                                        <p className="label-tag" style={{ marginBottom: 8 }}>{item.label}</p>
                                        <p className="body-text" style={{ fontSize: isMobile ? 15 : 13, color: 'rgba(255,255,255,0.88)' }}>
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div />

                            <div
                                style={{
                                    marginTop: 'auto',
                                    paddingTop: isMobile ? 20 : 28,
                                    borderTop: '1px solid rgba(255,255,255,0.06)',
                                }}
                            >
                                <span className="label-tag" style={{ marginBottom: 10, display: 'block' }}>Result</span>
                                <p
                                    style={{
                                        fontFamily: 'var(--font-grotesk)',
                                        fontWeight: 700,
                                        fontSize: isMobile ? 'clamp(24px, 7vw, 34px)' : 'clamp(28px,2.3vw,42px)',
                                        letterSpacing: '-0.05em',
                                        color: 'var(--text-light)',
                                        lineHeight: '0.98em',
                                        maxWidth: isMobile ? '100%' : 520,
                                    }}
                                >
                                    312% increase in qualified leads in 90 days.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="h-rule" style={{ opacity: 0.1 }} />
        </section>
    );
}
