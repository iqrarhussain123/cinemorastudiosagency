'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import RevealWords from '@/components/RevealWords';
import RollingText from '@/components/RollingText';
import useViewport from '@/components/useViewport';

const HERO_IMAGES = [
    '/images/hero/bg-3.png',
    '/images/hero/bg-1.png',
    '/images/hero/bg-2.png',
    '/images/hero/bg-4.jpg',
    '/images/hero/bg-5.png',
];

/* ─── Brand logos for the carousel ─────────────────────────────────
   Each has an SVG icon + label, approximating the Linie brand logos.
*/
const LOGOS = [
    {
        label: 'Shift',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
        ),
    },
    {
        label: 'EasyTax',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
        ),
    },
    {
        label: '3Portals',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
        ),
    },
    {
        label: 'Goodwell',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v4l3 3" />
            </svg>
        ),
    },
    {
        label: 'Magnolia',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                <path d="M12 6v6l4 2" />
            </svg>
        ),
    },
    {
        label: 'Interlock',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
            </svg>
        ),
    },
];

/* ─── Animation variants ─────────────────────────────────────────── */
const wordReveal = {
    hidden: { clipPath: 'inset(0 0 100% 0)', y: 80, opacity: 0 },
    visible: (i) => ({
        clipPath: 'inset(0% 0% 0% 0%)',
        y: 0,
        opacity: 1,
        transition: { delay: 0.15 + i * 0.1, duration: 1.1, ease: [0.19, 1, 0.22, 1] },
    }),
};

const fadeUp = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
        opacity: 1, y: 0,
        transition: { delay: 0.55 + i * 0.10, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    }),
};

export default function Hero() {
    const bgRef = useRef(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { isMobile, isTablet } = useViewport();

    // Auto-advance the hero slider every 4.5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 4500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const onScroll = () => {
            if (bgRef.current) {
                bgRef.current.style.transform =
                    `translateY(${window.scrollY * 0.30}px) scale(1.06)`;
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <section
            id="hero"
            style={{
                position: 'relative',
                width: '100%',
                height: '100svh',
                minHeight: isMobile ? 760 : 640,
                overflow: 'hidden',
                background: '#0e0e0e',
            }}
        >
            {/* ══════════ BACKGROUND PHOTO SLIDER ══════════ */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
                {/* Wrap the images in a parallax div to maintain the scroll effect */}
                <div
                    ref={bgRef}
                    style={{
                        position: 'absolute',
                        top: '-10%',
                        left: 0,
                        right: 0,
                        width: '100%',
                        height: '120%',
                        transformOrigin: 'center top',
                        willChange: 'transform',
                    }}
                >
                    <AnimatePresence initial={false}>
                        <motion.img
                            key={currentImageIndex}
                            src={HERO_IMAGES[currentImageIndex]}
                            alt={`Hero Background Slide ${currentImageIndex + 1}`}
                            initial={{ opacity: 0, scale: 1.03 }}
                            animate={{ opacity: 1, scale: 1.12 }}
                            exit={{ opacity: 0, scale: 1.12 }}
                            /* Keep the shutter timing, then let the image slowly push forward. */
                            transition={{
                                opacity: { delay: 0.6, duration: 0 },
                                scale: { delay: 0.6, duration: 5.2, ease: [0.16, 1, 0.3, 1] },
                            }}
                            style={{
                                position: 'absolute', inset: 0,
                                width: '100%', height: '100%',
                                objectFit: 'cover', objectPosition: 'center center',
                                transformOrigin: 'center center',
                                filter: 'brightness(0.92)',
                            }}
                        />
                        {/* Downward black bar shutter wipe */}
                        <motion.div
                            key={`shutter-${currentImageIndex}`}
                            initial={{ top: '-100%' }}
                            animate={{ top: ['-100%', '0%', '100%'] }}
                            exit={{ display: 'none' }}
                            transition={{ duration: 1.2, times: [0, 0.5, 1], ease: [0.65, 0, 0.35, 1] }}
                            style={{
                                position: 'absolute', left: 0, right: 0, height: '100%',
                                backgroundColor: '#0d0d0d', zIndex: 10,
                            }}
                        />
                    </AnimatePresence>
                </div>

                {/* Linie-style angular mask overlay */}
                <div style={{
                    position: 'absolute', inset: 0, zIndex: 1,
                    backgroundColor: '#b23411',
                    mixBlendMode: 'multiply',
                    WebkitMask: 'url(/images/hero/hero-mask.svg) 50% / cover no-repeat',
                    WebkitMaskSourceType: 'alpha',
                    mask: 'url(/images/hero/hero-mask.svg) 50% / cover no-repeat alpha',
                    opacity: 0.88,
                }} />

                {/* Bottom gradient */}
                <div style={{
                    position: 'absolute', inset: 0, zIndex: 3,
                    background:
                        'linear-gradient(to top,' +
                        ' rgba(14,14,14,0.64)  0%,' +
                        ' rgba(14,14,14,0.32) 18%,' +
                        ' rgba(14,14,14,0.10) 42%,' +
                        ' rgba(14,14,14,0.02) 64%,' +
                        ' rgba(14,14,14,0.00) 100%)',
                }} />
            </div>

            {/* ══════════ CONTENT — bottom-pinned ══════════ */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 3,
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                alignItems: 'center',
                paddingBottom: 60, // Lift entire block off the bottom to match Linie reference
            }}>
                {/* ── Grid-aligned inner wrapper: Must perfectly match the GridLines padding to overlap ── */}
                <div style={{
                    width: '100%',
                    maxWidth: 'var(--max-content-w, 1800px)',
                    /* NO padding here — GridLines overlay uses its own 32px via its container,
                       so we let the Hero grid columns snap to the same left edge naturally.
                       Any inner padding would shift text rightward relative to grid lines. */
                    padding: isMobile ? '0 16px' : '0',
                    paddingBottom: 8, // rise block ~8px to match Linie vertical position
                    display: 'flex',
                    flexDirection: 'column',
                    gap: isMobile ? 16 : 8,
                }}>

                    {/* ─ 4-COL CSS GRID LAYOUT ─ */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, minmax(0, 1fr))', // minmax(0,1fr) prevents content from stretching cols
                        gap: 0,
                        width: '100%',
                    }}>
                        {/* Avatar & Heading (Spans Col 1 & 2 — matches Linie exactly) */}
                        <div style={{
                            gridColumn: isMobile ? '1' : '1 / span 2',
                            minWidth: 0,
                            display: 'flex', flexDirection: 'column', gap: 20,
                            paddingBottom: 48,
                            paddingRight: 0,
                        }}>
                            {/* Avatar + rating */}
                            <motion.div
                                custom={0} variants={fadeUp} initial="hidden" animate="visible"
                                style={{ display: 'flex', alignItems: 'center', gap: 14 }}
                            >
                                {/* 3 stacked avatars */}
                                <div style={{ display: 'flex', position: 'relative', width: 64, height: 32, flexShrink: 0 }}>
                                    {[
                                        { left: 0, img: '/img-team1.png' },
                                        { left: 16, img: '/img-team2.png' },
                                        { left: 32, img: '/linie-service-design.jpg' },
                                    ].map((av, i) => (
                                        <div key={i} style={{
                                            position: 'absolute', left: av.left,
                                            width: 32, height: 32, borderRadius: '50%',
                                            border: '2px solid #0d0d0d',
                                            zIndex: 3 - i, overflow: 'hidden'
                                        }}>
                                            <Image src={av.img} width={32} height={32} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) brightness(0.8)' }} alt="reviewer" />
                                        </div>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                        <div style={{ display: 'flex', gap: 3 }}>
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />
                                            ))}
                                        </div>
                                        <span style={{
                                            fontFamily: 'var(--font-grotesk)', fontSize: 11, fontWeight: 700,
                                            color: '#fff', letterSpacing: '0.02em', lineHeight: 1,
                                        }}>4.9/5</span>
                                    </div>
                                    <span style={{
                                        fontFamily: 'var(--font-grotesk)', fontSize: 9, fontWeight: 600,
                                        letterSpacing: '0.08em', textTransform: 'uppercase',
                                        color: 'rgba(255,255,255,0.5)', lineHeight: 1,
                                    }}>
                                        Based on 180 verified reviews
                                    </span>
                                </div>
                            </motion.div>

                            {/* Heading: BEYOND DESIGN — Mattone font, 108px, exact Linie metrics */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 4 }}>
                                {['BEYOND', 'DESIGN'].map((word, i) => (
                                    <div key={word} style={{ overflow: 'hidden', lineHeight: '88px' }}>
                                        <motion.span
                                            custom={i} variants={wordReveal} initial="hidden" animate="visible"
                                            style={{
                                                display: 'block',
                                                fontFamily: 'var(--font-display)',
                                                fontWeight: 900,
                                                fontSize: isMobile ? 'clamp(48px, 17vw, 78px)' : isTablet ? 'clamp(64px, 11vw, 120px)' : '108px',
                                                lineHeight: isMobile ? '0.82em' : '88px',
                                                letterSpacing: isMobile ? '-0.03em' : '-4.32px',
                                                textTransform: 'uppercase',
                                                color: '#ffffff',
                                                whiteSpace: 'nowrap',
                                                willChange: 'transform',
                                            }}
                                        >
                                            {word}
                                        </motion.span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tagline (Col 4 — flush to grid lines, font-size = 1.4vw = 20px at 1440px = exact Linie measured value) */}
                        <motion.div
                            custom={2} variants={fadeUp} initial="hidden" animate="visible"
                            style={{
                                gridColumn: isMobile ? '1' : '4',
                                minWidth: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'stretch',
                                gap: isMobile ? 16 : 18,
                                boxSizing: 'border-box',
                                paddingTop: isMobile ? 0 : isTablet ? 40 : 56,
                                paddingBottom: isMobile ? 24 : 44,
                                paddingRight: 0,
                                paddingLeft: 0,   // Left edge touches the 3rd dashed line exactly
                            }}
                        >
                            <RevealWords
                                as="p"
                                text="Turning concepts into experiences that connect, inspire, and endure."
                                trigger="mount"
                                startDelay={0.72}
                                step={0.028}
                                wordGap={isMobile ? '0.22em' : '0.24em'}
                                rowGap="0.08em"
                                style={{
                                    fontFamily: 'var(--font-sans)',
                                    fontWeight: 400,
                                    letterSpacing: '-0.05px',
                                    margin: 0,
                                    fontSize: isMobile ? '16px' : 'clamp(16px, 1.28vw, 22px)',
                                    lineHeight: 1.28,
                                    color: 'rgba(255,255,255,0.9)',
                                    maxWidth: '100%',
                                }}
                            />

                            <div style={{
                                borderTop: '1px solid rgba(255,255,255,0.16)',
                                paddingTop: isMobile ? 14 : 18,
                                overflow: 'hidden',
                                position: 'relative',
                            }}>
                                <div style={{
                                    position: 'absolute', top: 0, bottom: 0, right: 0, width: 32,
                                    background: 'linear-gradient(to left, #0e0e0e 10%, transparent 100%)', zIndex: 2,
                                }} />

                                <div style={{
                                    display: 'flex', alignItems: 'center',
                                    opacity: 0.62,
                                    width: '100%',
                                }}>
                                    <motion.div
                                        animate={{ x: ['0%', '-50%'] }}
                                        transition={{
                                            duration: 25,
                                            ease: 'linear',
                                            repeat: Infinity,
                                        }}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: 32,
                                            paddingRight: 32,
                                            width: 'max-content',
                                        }}
                                    >
                                        {[...LOGOS, ...LOGOS].map((logo, i) => (
                                            <div
                                                key={i}
                                                style={{
                                                    display: 'flex', alignItems: 'center', gap: 7,
                                                    color: '#fff', whiteSpace: 'nowrap',
                                                }}
                                            >
                                                <span style={{ display: 'flex', width: 14, height: 14 }}>
                                                    {logo.icon}
                                                </span>
                                                <span style={{
                                                    fontFamily: 'var(--font-sans)',
                                                    fontSize: 12, fontWeight: 500, letterSpacing: '-0.01em',
                                                }}>
                                                    {logo.label}
                                                </span>
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>



                        {/* CTA (Col 1 — full column width with left border line, as in Linie) */}
                        <motion.div
                            custom={3} variants={fadeUp} initial="hidden" animate="visible"
                            style={{
                                gridColumn: isMobile ? '1' : '1',
                                display: 'flex',
                            }}
                        >
                            <a
                                href="#contact"
                                className="roll-trigger"
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 58px',
                                    width: '100%',
                                    textDecoration: 'none',
                                    minHeight: isMobile ? 58 : 64,
                                    background: 'rgba(8,8,8,0.34)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    boxSizing: 'border-box',
                                    overflow: 'hidden',
                                }}
                            >
                                <span style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '0 20px',
                                    borderLeft: '1.5px solid rgba(255,255,255,0.9)',
                                }}>
                                    <span className="sr-only">Start a Project</span>
                                    <RollingText
                                        text="Start a Project"
                                        style={{
                                            fontFamily: 'var(--font-grotesk)',
                                            fontSize: 12,
                                            fontWeight: 500,
                                            letterSpacing: '0.16em',
                                            textTransform: 'uppercase',
                                            color: '#ffffff',
                                        }}
                                    />
                                </span>
                                <span
                                    style={{
                                        borderLeft: '1px solid rgba(255,255,255,0.08)',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'rgba(255,255,255,0.5)',
                                        fontSize: 16,
                                        fontWeight: 300,
                                    }}
                                >
                                    &gt;
                                </span>
                            </a>
                        </motion.div>

                    </div>

                </div>
            </div >
        </section >
    );
}
