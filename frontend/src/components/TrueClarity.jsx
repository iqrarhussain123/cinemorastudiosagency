'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useViewport from '@/components/useViewport';

export default function TrueClarity() {
    const sectionRef = useRef(null);
    const { isMobile, isTablet } = useViewport();
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
    const textScale = useTransform(scrollYProgress, [0, 0.5], [0.88, 1.04]);
    const leftImgY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);
    const rightImgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

    return (
        <section
            ref={sectionRef}
            className="section-dark"
            style={{
                overflow: 'hidden',
                zIndex: 3,
            }}
        >
            <div className="h-rule" style={{ opacity: 0.1 }} />

            {/* 3-panel layout: photo | text | photo */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr 1fr 1fr' : '1fr 1.2fr 1fr',
                minHeight: isMobile ? '44vh' : isTablet ? '62vh' : '80vh',
                gap: 0,
                overflow: 'hidden',
            }}>
                {/* LEFT photo */}
                <div style={{ overflow: 'hidden', position: 'relative', background: '#1a0a06' }}>
                    <motion.img
                        src="/linie-clarity-left.jpg"
                        alt="Clarity left"
                        style={{
                            width: '100%', height: '120%',
                            objectFit: 'cover', objectPosition: 'center',
                            y: leftImgY,
                            willChange: 'transform',
                        }}
                    />
                    {/* Red tint overlay */}
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(90deg, rgba(196,72,26,0.18) 0%, transparent 60%)',
                    }} />
                </div>

                {/* CENTER text */}
                <div style={{
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    padding: isMobile ? '24px 14px' : '80px 40px', position: 'relative',
                }}>
                    <motion.h2
                        style={{
                            fontFamily: 'var(--font-grotesk)',
                            fontWeight: 900,
                            fontSize: isMobile ? 'clamp(22px, 7vw, 34px)' : 'clamp(60px,7vw,120px)',
                            lineHeight: '0.86em',
                            letterSpacing: '-0.05em',
                            textTransform: 'uppercase',
                            color: 'var(--text-light)',
                            textAlign: 'center',
                            scale: textScale,
                        }}
                    >
                        TRUE<br />CLARITY
                    </motion.h2>

                    <motion.p
                        className="body-text"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        style={{ color: 'rgba(240,237,232,0.44)', fontSize: isMobile ? 11 : 13, textAlign: 'center', maxWidth: 240, marginTop: isMobile ? 14 : 28 }}
                    >
                        Where every decision is driven by purpose, precision, and measurable impact.
                    </motion.p>
                </div>

                {/* RIGHT photo */}
                <div style={{ overflow: 'hidden', position: 'relative', background: '#0d0d0d' }}>
                    <motion.img
                        src="/linie-clarity-right.jpg"
                        alt="Clarity right"
                        style={{
                            width: '100%', height: '120%',
                            objectFit: 'cover', objectPosition: 'center',
                            y: rightImgY,
                            willChange: 'transform',
                            filter: 'grayscale(60%)',
                        }}
                    />
                </div>
            </div>

            <div className="h-rule" style={{ opacity: 0.1 }} />
        </section>
    );
}
