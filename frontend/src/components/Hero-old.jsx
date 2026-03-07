'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useViewport from '@/components/useViewport';

const HERO_IMAGES = [
    '/images/hero/bg-1.png',
    '/images/hero/bg-2.png',
    '/images/hero/bg-3.png',
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
    hidden: { clipPath: 'inset(0 0 100% 0)', y: 48 },
    visible: (i) => ({
        clipPath: 'inset(0 0 0% 0)',
        y: 0,
        transition: { delay: 0.2 + i * 0.15, duration: 0.95, ease: [0.16, 1, 0.3, 1] },
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
                        position: 'absolute', inset: 0,
                        width: '100%', height: '115%',
                        transformOrigin: 'center top',
                        willChange: 'transform',
                    }}
                >
                    <AnimatePresence initial={false}>
                        <motion.img
                            key={currentImageIndex}
                            src={HERO_IMAGES[currentImageIndex]}
                            alt={`Hero Background Slide ${currentImageIndex + 1}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 1 }}
                            /* Wait precisely until the shutter fully covers the screen at t=0.6s to swap the image instantly */
                            transition={{ delay: 0.6, duration: 0 }}
                            style={{
                                position: 'absolute', inset: 0,
                                width: '100%', height: '100%',
                                objectFit: 'cover', objectPosition: 'center center',
                                filter: 'grayscale(1) contrast(1.04) brightness(0.74)',
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

                {/* Exact Linie geometric shard — #b23411 with SVG mask */}
                <div style={{
                    position: 'absolute', inset: 0, zIndex: 1,
                    backgroundColor: '#b23411',
                    mixBlendMode: 'multiply',
                    WebkitMask: 'url(/images/hero/hero-mask.svg) 50% / cover no-repeat',
                    WebkitMaskSourceType: 'alpha',
                    mask: 'url(/images/hero/hero-mask.svg) 50% / cover no-repeat alpha',
                    opacity: 0.54,
                }} />

                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: isMobile ? '220vw' : '180vw',
                    height: isMobile ? '78vw' : '40vw',
                    minHeight: isMobile ? 320 : 440,
                    background: 'rgba(178, 52, 17, 0.48)',
                    transform: 'translate(-50%, -50%) rotate(27deg)',
                    transformOrigin: 'center',
                    mixBlendMode: 'multiply',
                    zIndex: 2,
                    pointerEvents: 'none',
                }} />

                {/* Bottom gradient */}
                <div style={{
                    position: 'absolute', inset: 0, zIndex: 3,
                    background:
                        'linear-gradient(to top,' +
                        ' rgba(14,14,14,0.96)  0%,' +
                        ' rgba(14,14,14,0.74) 22%,' +
                        ' rgba(14,14,14,0.26) 48%,' +
                        ' rgba(14,14,14,0.04) 70%,' +
                        ' rgba(14,14,14,0.00) 100%)',
                }} />
            </div>

            {/* ══════════ CONTENT — bottom-pinned ══════════ */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 3,
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                alignItems: 'center',
            }}>
                {/* ── Grid-aligned inner wrapper: 32px gutters + 1800px max ── */}
                <div style={{
                    width: '100%',
                    maxWidth: 'var(--max-content-w, 1800px)',
                    padding: isMobile ? '0 16px' : '0 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: isMobile ? 16 : 8,
                }}>

                    {/* ─ 4-COL PROPORTIONAL FLEX: LEFT 75% = heading area | RIGHT 25% = tagline + logos ─ */}
                    <div style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: isMobile ? 'flex-start' : 'flex-end',
                        gap: isMobile ? 20 : 0,
                        width: '100%',
                    }}>
                        {/* Left 75% (3 cols): avatar+rating, heading */} 
                        <div style={{
                            width: isMobile ? '100%' : '75%',
                            minWidth: 0,
                            display: 'flex', flexDirection: 'column', gap: 0,
                        }}>
                            {/* Avatar + rating */}
                            <motion.div
                                custom={0} variants={fadeUp} initial="hidden" animate="visible"
                                style={{ display: 'flex', alignItems: 'center', gap: 10, paddingBottom: 10 }}
                            >
                                {/* 3 stacked avatars */}
                                <div style={{ display: 'flex', position: 'relative', width: 68, height: 30, flexShrink: 0 }}>
                                    {[
                                        { left: 0, bg: '#3a2010' },
                                        { left: 20, bg: '#2a3010' },
                                        { left: 40, bg: '#102030' },
                                    ].map((av, i) => (
                                        <div key={i} style={{
                                            position: 'absolute', left: av.left,
                                            width: 30, height: 30, borderRadius: '50%',
                                            border: '2px solid rgba(255,255,255,0.15)',
                                            background: av.bg, zIndex: 3 - i,
                                        }} />
                                    ))}
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} style={{ color: '#f59e0b', fontSize: 9, lineHeight: 1 }}>★</span>
                                        ))}
                                        <span style={{
                                            fontFamily: 'var(--font-space-grotesk)', fontSize: 9, fontWeight: 600,
                                            color: 'rgba(255,255,255,0.75)', letterSpacing: '0.02em', lineHeight: 1,
                                        }}>4.9/5</span>
                                    </div>
                                    <span style={{
                                        fontFamily: 'var(--font-space-grotesk)', fontSize: isMobile ? 8 : 9, fontWeight: 500,
                                        letterSpacing: isMobile ? '0.08em' : '0.10em', textTransform: 'uppercase',
                                        color: 'rgba(255,255,255,0.42)', lineHeight: 1,
                                    }}>
                                        Based on 180 verified reviews
                                    </span>
                                </div>
                            </motion.div>

                            {/* Heading: BEYOND DESIGN — exact Linie specs */}
                            <div>
                                {['BEYOND', 'DESIGN'].map((word, i) => (
                                    <div key={word} style={{ overflow: 'hidden', lineHeight: '0.815em' }}>
                                        <motion.span
                                            custom={i} variants={wordReveal} initial="hidden" animate="visible"
                                            style={{
                                                display: 'block',
                                                fontFamily: 'var(--font-mattone), var(--font-space-grotesk), sans-serif',
                                                fontWeight: 900,
                                                fontSize: isMobile ? 'clamp(48px, 17vw, 78px)' : isTablet ? 'clamp(64px, 9vw, 150px)' : 'clamp(58px, 11.5vw, 210px)',
                                                lineHeight: '0.815em',
                                                letterSpacing: '-0.04em',
                                                textTransform: 'uppercase',
                                                color: '#ffffff',
                                                willChange: 'transform',
                                                whiteSpace: isMobile ? 'normal' : 'nowrap',
                                            }}
                                        >
                                            {word}
                                        </motion.span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right 25% (1 col): tagline + brand logos carousel */}
                        <motion.div
                            custom={2} variants={fadeUp} initial="hidden" animate="visible"
                            style={{
                                width: isMobile ? '100%' : '25%',
                                minWidth: 0,
                                display: 'flex', flexDirection: 'column',
                                justifyContent: 'flex-end', alignItems: 'flex-start',
                                gap: isMobile ? 18 : 20,
                                paddingBottom: 2,
                                paddingLeft: isMobile ? 0 : 20,
                                paddingRight: isMobile ? 0 : 20,
                                boxSizing: 'border-box',
                            }}
                        >
                            {/* Tagline */}
                            <p style={{
                                fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                                fontSize: isMobile ? '16px' : 'clamp(14px, 1.15vw, 20px)',
                                fontWeight: 400,
                                lineHeight: '1.2em',
                                letterSpacing: '-0.005em',
                                color: 'rgba(255,255,255,0.60)',
                                margin: 0,
                                maxWidth: isMobile ? '100%' : 352,
                            }}>
                                Turning concepts into experiences that connect, inspire, and endure.
                            </p>

                            {/* Brand logos carousel — with true CSS transparent masks */}
                            <div style={{
                                width: '100%',
                                position: 'relative',
                                overflow: 'hidden',
                                WebkitMaskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
                                maskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)',
                            }}>
                                <motion.div
                                    animate={{ x: ['0%', '-50%'] }}
                                    transition={{ ease: 'linear', duration: 22, repeat: Infinity }}
                                    className="logos-marquee-track"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        gap: isMobile ? 20 : 32,
                                        width: 'max-content',
                                        animation: 'logoScroll 22s linear infinite',
                                        opacity: 0.74,
                                    }}
                                >
                                    {[...LOGOS, ...LOGOS].map((logo, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                display: 'flex', alignItems: 'center', gap: 8,
                                                color: 'rgba(255,255,255,0.72)',
                                                whiteSpace: 'nowrap', flexShrink: 0,
                                                width: isMobile ? 84 : 100, height: 40,
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <span style={{ color: 'rgba(255,255,255,0.55)', flexShrink: 0 }}>
                                                {logo.icon}
                                            </span>
                                            <span style={{
                                                fontFamily: 'var(--font-space-grotesk)',
                                                fontSize: 12,
                                                fontWeight: 500,
                                                letterSpacing: '-0.01em',
                                                color: 'rgba(255,255,255,0.62)',
                                            }}>
                                                {logo.label}
                                            </span>
                                        </div>
                                    ))}
                                </motion.div>

                                <style>{`
                @keyframes logoScroll {
                  from { transform: translateX(0); }
                  to   { transform: translateX(-50%); }
                }
              `}</style>
                            </div>
                        </motion.div>
                    </div>

                    {/* ─ CTA + thin separator ─ */}
                    {/* 4-col exact flex constraint: 25% width aligns the chevron at the end of the 1st column */}
                    <motion.div
                        custom={3} variants={fadeUp} initial="hidden" animate="visible"
                        style={{
                            display: 'flex',
                            borderTop: '1px solid rgba(255,255,255,0.08)',
                            width: '100%',
                        }}
                    >
                        <div style={{
                            width: isMobile ? '100%' : '25%',
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            padding: isMobile ? '10px 0 22px' : '14px 0 28px',
                            paddingRight: isMobile ? '0' : '12px',
                        }}>
                            <a
                                href="#contact"
                                style={{
                                    display: 'flex', alignItems: 'center', gap: 10,
                                    textDecoration: 'none',
                                    fontFamily: 'var(--font-space-grotesk)',
                                    fontSize: 11, fontWeight: 500,
                                    letterSpacing: '0.10em', textTransform: 'uppercase',
                                    color: 'rgba(255,255,255,0.72)',
                                    borderLeft: '2px solid #b23411',
                                    paddingLeft: 12,
                                    transition: 'color 0.26s, padding-left 0.26s',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.paddingLeft = '20px'; }}
                                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.72)'; e.currentTarget.style.paddingLeft = '12px'; }}
                            >
                                Start a Project
                            </a>
                            <div
                                style={{
                                    width: 28, height: 28, borderRadius: '50%',
                                    border: '1px solid rgba(255,255,255,0.22)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'rgba(255,255,255,0.65)', fontSize: 15, cursor: 'pointer',
                                    transition: 'background 0.26s, border-color 0.26s, color 0.26s',
                                    flexShrink: 0,
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = 'rgba(178,52,17,0.22)';
                                    e.currentTarget.style.borderColor = '#b23411';
                                    e.currentTarget.style.color = '#fff';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)';
                                    e.currentTarget.style.color = 'rgba(255,255,255,0.65)';
                                }}
                            >
                                ›
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div >
        </section >
    );
}
