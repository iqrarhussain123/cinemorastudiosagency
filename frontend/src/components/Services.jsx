'use client';

import { motion } from 'framer-motion';
import { DM_Sans } from 'next/font/google';
import Image from 'next/image';
import useViewport from '@/components/useViewport';

const dmSans = DM_Sans({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700'],
});

const SERVICES = [
    {
        number: '01.',
        title: 'Design',
        tags: 'Wireframes, Prototypes, Interfaces, Testing,',
        description: 'Design clear and engaging interfaces that improve usability, boost engagement, and drive results.',
        image: '/images/services/design.png',
        alt: 'Design service preview',
        rotation: 0,
    },
    {
        number: '02.',
        title: 'Branding',
        tags: 'Identity, Logo, Messaging, Guidelines',
        description: 'Create distinctive brands with consistent identities that build trust and recognition.st engagement, and drive results.',
        image: '/images/services/branding.png',
        alt: 'Two men are sitting at a table.',
        rotation: -3,
    },
    {
        number: '03.',
        title: 'Marketing',
        tags: 'Campaigns, Assets, Social, Growth',
        description: 'Deliver creative, data-driven marketing that grows visibility and conversions.',
        image: '/images/services/marketing.png',
        alt: 'Three men in an office.',
        rotation: -4,
    },
    {
        number: '04.',
        title: 'Code',
        tags: 'Websites, Code, Integrations, Performance',
        description: 'Build fast, scalable websites and digital products that support business growth.',
        image: '/images/services/code.png',
        alt: 'A man and a woman are walking through the office.',
        rotation: -5,
    },
];

function ArrowRightIcon({ color = 'currentColor' }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            style={{ display: 'block', color }}
            fill="none"
        >
            <path
                d="M9.75 7.5L14.25 12L9.75 16.5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="square"
                strokeLinejoin="miter"
            />
        </svg>
    );
}

function SectionLabel({ isMobile }) {
    const labelStyle = {
        fontFamily: 'var(--font-grotesk)',
        fontSize: isMobile ? 13 : 14,
        fontWeight: 500,
        letterSpacing: '0.15em',
        lineHeight: 1,
        textTransform: 'uppercase',
    };

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                width: 'min-content',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    width: 'min-content',
                }}
            >
                <span
                    aria-hidden="true"
                    style={{
                        width: 12,
                        height: 12,
                        background: 'rgba(14, 14, 14, 0.16)',
                        flex: 'none',
                    }}
                />
                <span style={{ ...labelStyle, color: 'rgba(14, 14, 14, 0.64)' }}>002</span>
            </div>
            <span style={{ ...labelStyle, color: '#0e0e0e' }}>Services</span>
        </div>
    );
}

function ServicesButton() {
    return (
        <motion.a
            href="#contact"
            initial="rest"
            animate="rest"
            whileHover="hover"
            whileFocus="hover"
            whileTap={{ scale: 0.995 }}
            style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                width: '100%',
                height: 64,
                padding: '4px 4px 4px 20px',
                overflow: 'hidden',
                background: 'rgba(14, 14, 14, 0.04)',
                textDecoration: 'none',
                color: 'rgb(14, 14, 14)',
            }}
        >
            <motion.span
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    inset: '0 auto 0 0',
                    width: 3,
                    background: 'rgb(178, 52, 17)',
                    boxShadow: '1px 1px 20px 0px rgba(178, 52, 17, 0.32)',
                    zIndex: 1,
                }}
            />

            <div
                style={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    flex: '1 0 0px',
                    minWidth: 0,
                    paddingTop: 8,
                }}
            >
                <motion.span
                    className={dmSans.className}
                    variants={{
                        rest: { color: 'rgb(14, 14, 14)' },
                        hover: { color: 'rgba(14, 14, 14, 0.88)' },
                    }}
                    transition={{ type: 'spring', stiffness: 260, damping: 28, mass: 0.7 }}
                    style={{
                        fontSize: 14,
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        lineHeight: 1.1429,
                        textTransform: 'uppercase',
                        whiteSpace: 'nowrap',
                    }}
                >
                    Start a Project
                </motion.span>
            </div>

            <motion.span
                aria-hidden="true"
                variants={{
                    rest: {
                        width: 'calc(100% - 8px)',
                        backgroundColor: 'rgba(255, 255, 255, 0)',
                    },
                    hover: {
                        width: 56,
                        backgroundColor: 'rgba(255, 255, 255, 0.48)',
                    },
                }}
                transition={{ type: 'spring', stiffness: 280, damping: 28, mass: 0.75 }}
                style={{
                    position: 'absolute',
                    top: 'calc(50% - 28px)',
                    right: 4,
                    height: 56,
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                    padding: 4,
                    overflow: 'clip',
                    zIndex: 1,
                }}
            >
                <ArrowRightIcon color="rgb(14, 14, 14)" />
            </motion.span>
        </motion.a>
    );
}

function ServiceCard({ index, service, isMobile, isTablet }) {
    const titleSize = isMobile ? 24 : isTablet ? 28 : 32;
    const tagSize = isMobile ? 11 : 12;
    const descriptionSize = isMobile ? 18 : isTablet ? 19 : 20;
    const padding = isMobile ? 16 : isTablet ? 24 : 32;
    const titleBlockDirection = isTablet && !isMobile ? 'column' : 'row';

    const animatedProps = index === 0
        ? {}
        : {
            initial: {
                opacity: 1,
                y: -200,
                rotate: service.rotation,
            },
            whileInView: {
                opacity: 1,
                y: 0,
                rotate: 0,
            },
            viewport: {
                once: true,
                amount: isMobile ? 0.2 : 0.45,
            },
            transition: {
                type: 'spring',
                stiffness: isMobile ? 500 : 180,
                damping: 60,
                mass: 1.4,
                bounce: 0,
            },
        };

    return (
        <motion.article
            {...animatedProps}
            style={{
                position: 'relative',
                zIndex: SERVICES.length - index,
                width: '100%',
                minHeight: isMobile ? 'auto' : 313,
                padding,
                background: '#ebebeb',
                transformOrigin: 'top center',
                willChange: index === 0 ? 'auto' : 'transform',
            }}
        >
            <div
                style={{
                    display: isMobile ? 'flex' : 'grid',
                    flexDirection: 'column',
                    gap: isMobile ? 24 : 0,
                    gridTemplateColumns: isMobile ? undefined : 'repeat(4, minmax(50px, 1fr))',
                    gridTemplateRows: isMobile ? undefined : 'repeat(1, minmax(0, 1fr))',
                    width: '100%',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: titleBlockDirection,
                        alignItems: isMobile || isTablet ? 'flex-start' : 'center',
                        gap: isMobile || isTablet ? 8 : 16,
                        width: isMobile ? '100%' : undefined,
                        alignSelf: 'start',
                    }}
                >
                    <div
                        style={{
                            flex: isTablet && !isMobile ? 'none' : '1 0 0px',
                            width: isTablet && !isMobile ? '100%' : 'auto',
                            maxWidth: 48,
                        }}
                    >
                        <p
                            style={{
                                margin: 0,
                                fontFamily: 'var(--font-grotesk)',
                                fontSize: titleSize,
                                fontWeight: 500,
                                letterSpacing: '-0.02em',
                                lineHeight: 1.1875,
                                color: 'rgba(14, 14, 14, 0.32)',
                            }}
                        >
                            {service.number}
                        </p>
                    </div>
                    <div
                        style={{
                            flex: isTablet && !isMobile ? 'none' : '1 0 0px',
                            width: isTablet && !isMobile ? '100%' : 'auto',
                        }}
                    >
                        <h3
                            style={{
                                margin: 0,
                                fontFamily: 'var(--font-grotesk)',
                                fontSize: titleSize,
                                fontWeight: 500,
                                letterSpacing: '-0.02em',
                                lineHeight: 1.1875,
                                color: 'rgb(14, 14, 14)',
                            }}
                        >
                            {service.title}
                        </h3>
                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 0,
                        gridColumn: isMobile ? undefined : 'span 2',
                        width: '100%',
                        alignSelf: 'start',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            gap: isMobile ? 24 : 0,
                            width: '100%',
                        }}
                    >
                        {isMobile ? (
                            <>
                                <div
                                    style={{
                                        width: '100%',
                                    }}
                                >
                                    <p
                                        className={dmSans.className}
                                        style={{
                                            margin: 0,
                                            maxWidth: '100%',
                                            fontSize: descriptionSize,
                                            fontWeight: 400,
                                            letterSpacing: '-0.0025em',
                                            lineHeight: 1.2,
                                            color: 'rgb(14, 14, 14)',
                                        }}
                                    >
                                        {service.description}
                                    </p>
                                </div>
                                <div
                                    style={{
                                        width: '100%',
                                        maxWidth: '50%',
                                    }}
                                >
                                    <p
                                        style={{
                                            margin: 0,
                                            fontFamily: 'var(--font-grotesk)',
                                            fontSize: tagSize,
                                            fontWeight: 500,
                                            letterSpacing: '0.1em',
                                            lineHeight: 1.1667,
                                            textTransform: 'uppercase',
                                            color: 'rgba(14, 14, 14, 0.64)',
                                        }}
                                    >
                                        {service.tags}
                                    </p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div
                                    style={{
                                        flex: '1 0 0px',
                                        maxWidth: 120,
                                    }}
                                >
                                    <p
                                        style={{
                                            margin: 0,
                                            fontFamily: 'var(--font-grotesk)',
                                            fontSize: tagSize,
                                            fontWeight: 500,
                                            letterSpacing: '0.1em',
                                            lineHeight: 1.1667,
                                            textTransform: 'uppercase',
                                            color: 'rgba(14, 14, 14, 0.64)',
                                        }}
                                    >
                                        {service.tags}
                                    </p>
                                </div>
                                <div
                                    style={{
                                        flex: '1 0 0px',
                                        maxWidth: '80%',
                                    }}
                                >
                                    <p
                                        className={dmSans.className}
                                        style={{
                                            margin: 0,
                                            fontSize: descriptionSize,
                                            fontWeight: 400,
                                            letterSpacing: '-0.0025em',
                                            lineHeight: 1.2,
                                            color: 'rgb(14, 14, 14)',
                                        }}
                                    >
                                        {service.description}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div
                    style={{
                        position: 'relative',
                        alignSelf: 'start',
                        width: '100%',
                        aspectRatio: isMobile ? undefined : '1.1411290322580645 / 1',
                        height: isMobile ? 175 : undefined,
                        overflow: 'hidden',
                    }}
                >
                    <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        priority={index === 0}
                        sizes={
                            isMobile
                                ? '(max-width: 809px) calc(100vw - 32px)'
                                : isTablet
                                    ? '(max-width: 1199px) calc((100vw - 48px) / 4)'
                                    : 'calc((min(100vw, 1800px) - 64px) / 4)'
                        }
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
            </div>
        </motion.article>
    );
}

export default function Services() {
    const { isMobile, isTablet } = useViewport();
    const sectionPadding = isMobile ? 100 : isTablet ? 120 : 160;
    const horizontalPadding = isMobile ? 16 : isTablet ? 24 : 32;
    const stackGap = isMobile ? 64 : 88;
    const titleSize = isMobile ? 40 : isTablet ? 64 : 88;

    return (
        <section
            id="services"
            className="section-light"
            style={{
                width: '100%',
                background: '#ebebeb',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: stackGap,
                    padding: `${sectionPadding}px 0`,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: stackGap,
                        width: '100%',
                        overflow: 'clip',
                    }}
                >
                    <div
                        style={{
                            display: isMobile ? 'flex' : 'grid',
                            flexDirection: 'column',
                            gap: isMobile ? 32 : 8,
                            gridTemplateColumns: isMobile ? undefined : 'repeat(4, minmax(50px, 1fr))',
                            gridTemplateRows: isMobile ? undefined : 'repeat(1, minmax(0, 1fr))',
                            width: '100%',
                            maxWidth: 1800,
                            padding: `0 ${horizontalPadding}px`,
                        }}
                    >
                        <SectionLabel isMobile={isMobile} />

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gridColumn: isMobile ? undefined : 'span 3',
                                width: '100%',
                            }}
                        >
                            <h2
                                style={{
                                    margin: 0,
                                    fontFamily: 'var(--font-display)',
                                    fontSize: titleSize,
                                    fontWeight: 900,
                                    lineHeight: 0.818,
                                    letterSpacing: '-0.03em',
                                    textTransform: 'uppercase',
                                    color: 'rgb(14, 14, 14)',
                                }}
                            >
                                What
                                <br />
                                We Do
                            </h2>
                        </div>
                    </div>

                    <div
                        style={{
                            width: '100%',
                            maxWidth: 1800,
                            overflow: 'hidden',
                        }}
                    >
                        {SERVICES.map((service, index) => (
                            <ServiceCard
                                key={service.number}
                                index={index}
                                service={service}
                                isMobile={isMobile}
                                isTablet={isTablet}
                            />
                        ))}
                    </div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, minmax(50px, 1fr))',
                            width: '100%',
                            maxWidth: 1800,
                            padding: `0 ${horizontalPadding}px`,
                        }}
                    >
                        {!isMobile ? (
                            <div
                                aria-hidden="true"
                                style={{
                                    width: '100%',
                                    height: 100,
                                    opacity: 0,
                                }}
                            />
                        ) : null}

                        <div
                            style={{
                                gridColumn: isMobile ? '1 / -1' : isTablet ? '2 / span 2' : '2 / span 1',
                                width: '100%',
                            }}
                        >
                            <ServicesButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
