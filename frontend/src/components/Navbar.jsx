'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import RollingText from '@/components/RollingText';
import useViewport from '@/components/useViewport';

const navLinks = [
    { label: 'Case Studies', badge: '15', href: '/case-studies' },
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/#about' },
];

const menuItems = [
    { num: '01', label: 'Home', href: '/#hero' },
    { num: '02', label: 'About', href: '/#about' },
    { num: '03', label: 'Case Studies', href: '/case-studies' },
    { num: '04', label: 'Services', href: '/#services' },
    { num: '05', label: 'Journal', href: '/#journal' },
    { num: '06', label: 'Team', href: '/#team' },
    { num: '07', label: 'Contact', href: '/enquiry' },
    { num: '08', label: 'Support', href: '/support' },
];

const drawerVariants = {
    closed: { x: '100%', transition: { type: 'tween', duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
    open: { x: '0%', transition: { type: 'tween', duration: 0.55, ease: [0.76, 0, 0.24, 1] } },
};

const itemVariants = {
    closed: { y: 20, opacity: 0 },
    open: (i) => ({ y: 0, opacity: 1, transition: { delay: 0.12 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] } }),
};

function LogoMark() {
    return (
        <span aria-hidden="true" style={{ display: 'inline-flex', gap: 2 }}>
            <span style={{ width: 8, height: 4, background: 'currentColor', opacity: 0.92 }} />
            <span style={{ width: 8, height: 4, background: 'currentColor', opacity: 0.55 }} />
        </span>
    );
}

function RollingLabel({ text, style }) {
    return (
        <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
            <span className="sr-only">{text}</span>
            <RollingText text={text} style={style} />
        </span>
    );
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { isMobile } = useViewport();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    return (
        <>
            <header
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 500,
                    height: 64,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: isMobile ? '0 14px' : '0 32px',
                    background: scrolled ? 'rgba(9,9,9,0.34)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(12px)' : 'none',
                    WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
                    transition: 'background 0.4s ease, border 0.4s ease, backdrop-filter 0.4s ease',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        maxWidth: 'var(--max-content-w)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <a
                        href="/#hero"
                        style={{
                            fontFamily: 'var(--font-grotesk)',
                            fontWeight: 700,
                            fontSize: isMobile ? 13 : 15,
                            letterSpacing: '-0.02em',
                            textTransform: 'uppercase',
                            color: 'var(--text-light)',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: isMobile ? 6 : 8,
                        }}
                    >
                        <LogoMark />
                        CINEMORA
                    </a>

                    <nav style={{ display: isMobile ? 'none' : 'flex', alignItems: 'center', gap: 28 }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="roll-trigger"
                                style={{
                                    fontFamily: 'var(--font-grotesk)',
                                    fontSize: 15,
                                    fontWeight: 500,
                                    letterSpacing: '-0.02em',
                                    color: 'rgba(240,237,232,0.82)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 6,
                                    transition: 'color 0.2s ease',
                                }}
                            >
                                <RollingLabel text={link.label} />
                                {link.badge ? (
                                    <span
                                        style={{
                                            fontFamily: 'var(--font-grotesk)',
                                            fontSize: 9,
                                            fontWeight: 600,
                                            background: 'rgba(255,255,255,0.08)',
                                            padding: '1px 4px',
                                            borderRadius: 3,
                                            letterSpacing: '0.02em',
                                            color: 'rgba(240,237,232,0.74)',
                                        }}
                                    >
                                        {link.badge}
                                    </span>
                                ) : null}
                            </a>
                        ))}
                    </nav>

                    <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 10 }}>
                        <a
                            href="/enquiry"
                            className="roll-trigger"
                            style={{
                                display: isMobile ? 'none' : 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontFamily: 'var(--font-grotesk)',
                                fontSize: 12,
                                fontWeight: 500,
                                letterSpacing: '-0.01em',
                                color: 'rgba(240,237,232,0.92)',
                                minWidth: 82,
                                minHeight: 38,
                                padding: '0 14px',
                                background: 'rgba(255,255,255,0.035)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)',
                            }}
                        >
                            <RollingLabel text="Contact" />
                        </a>

                        <button
                            type="button"
                            onClick={() => setMenuOpen(true)}
                            className="roll-trigger"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontFamily: 'var(--font-grotesk)',
                                fontSize: 12,
                                fontWeight: 600,
                                letterSpacing: '-0.01em',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.10)',
                                color: 'var(--text-light)',
                                minHeight: 38,
                                padding: isMobile ? '0 12px' : '0 14px',
                                transition: 'background 0.2s ease',
                            }}
                        >
                            <RollingLabel text="+ Menu" />
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {menuOpen ? (
                    <>
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                position: 'fixed',
                                inset: 0,
                                background: 'rgba(0,0,0,0.6)',
                                zIndex: 600,
                            }}
                        />

                        <motion.aside
                            key="drawer"
                            variants={drawerVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            style={{
                                position: 'fixed',
                                top: 0,
                                right: 0,
                                bottom: 0,
                                width: isMobile ? '100%' : 360,
                                background: '#0d0d0d',
                                zIndex: 700,
                                borderLeft: '1px solid rgba(255,255,255,0.06)',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: isMobile ? '22px 18px 28px' : '28px 36px 40px',
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48 }}>
                                <span style={{ fontFamily: 'var(--font-grotesk)', fontWeight: 700, fontSize: 15, letterSpacing: '-0.02em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <LogoMark />
                                    CINEMORA
                                </span>
                                <button
                                    type="button"
                                    onClick={() => setMenuOpen(false)}
                                    style={{
                                        fontFamily: 'var(--font-grotesk)',
                                        fontSize: 11,
                                        fontWeight: 600,
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                        background: 'transparent',
                                        border: '1px solid rgba(255,255,255,0.14)',
                                        color: 'rgba(255,255,255,0.6)',
                                        padding: '5px 10px',
                                    }}
                                >
                                    Close
                                </button>
                            </div>

                            <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                {menuItems.map((item, index) => (
                                    <motion.a
                                        key={item.num}
                                        custom={index}
                                        variants={itemVariants}
                                        initial="closed"
                                        animate="open"
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 16,
                                            padding: '14px 0',
                                            borderBottom: '1px solid rgba(255,255,255,0.06)',
                                            textDecoration: 'none',
                                            color: 'rgba(255,255,255,0.72)',
                                            transition: 'color 0.2s, padding-left 0.2s',
                                        }}
                                        onMouseEnter={(event) => {
                                            event.currentTarget.style.color = '#fff';
                                            event.currentTarget.style.paddingLeft = '6px';
                                        }}
                                        onMouseLeave={(event) => {
                                            event.currentTarget.style.color = 'rgba(255,255,255,0.72)';
                                            event.currentTarget.style.paddingLeft = '0';
                                        }}
                                    >
                                        <span style={{ fontFamily: 'var(--font-grotesk)', fontSize: 11, letterSpacing: '0.12em', opacity: 0.3, minWidth: 24 }}>
                                            {item.num}
                                        </span>
                                        <span style={{ fontFamily: 'var(--font-grotesk)', fontWeight: 700, fontSize: 20, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
                                            {item.label}
                                        </span>
                                    </motion.a>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.55, duration: 0.4 }}
                                style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 8 }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span style={{ fontSize: 12, letterSpacing: '0.01em', color: 'rgba(255,255,255,0.40)', fontFamily: 'var(--font-sans)' }}>
                                        hello@cinemora.com
                                    </span>
                                    <span
                                        style={{
                                            fontFamily: 'var(--font-grotesk)',
                                            fontSize: 9,
                                            fontWeight: 700,
                                            letterSpacing: '0.12em',
                                            textTransform: 'uppercase',
                                            background: 'var(--accent)',
                                            color: '#fff',
                                            padding: '4px 8px',
                                        }}
                                    >
                                        Limited openings
                                    </span>
                                </div>
                                <span style={{ fontSize: 12, letterSpacing: '0.01em', color: 'rgba(255,255,255,0.40)', fontFamily: 'var(--font-sans)' }}>
                                    +1 (856) 456 1234
                                </span>
                            </motion.div>
                        </motion.aside>
                    </>
                ) : null}
            </AnimatePresence>
        </>
    );
}
