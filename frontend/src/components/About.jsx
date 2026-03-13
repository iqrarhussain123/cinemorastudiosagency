'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import RevealWords from '@/components/RevealWords';
import RollingText from '@/components/RollingText';
import useViewport from '@/components/useViewport';

const SHOWREEL_POSTER = '/linie-showreel.jpg';
const SHOWREEL_VIDEO = '/linie-showreel.mp4';

function CountUp({ target, suffix = '', duration = 1800 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const end = Number(target.replace(/[^0-9]/g, ''));
    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const { isMobile, isTablet } = useViewport();
  const [showreelUnavailable, setShowreelUnavailable] = useState(false);

  return (
    <section id="about" className="section-light">
      {/* Top rule */}
      <div className="h-rule-light" />

      <div className="px" style={{ paddingTop: isMobile ? 64 : 80, paddingBottom: isMobile ? 64 : 80 }}>

        {/* ROW 1: Intro and Video */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
          gap: 0,
          width: '100%',
          paddingBottom: isMobile ? 48 : 80,
        }}>
          {/* Col 1 */}
          <div style={{ paddingRight: isMobile ? 0 : 32, display: 'flex', flexDirection: 'column' }}>
            <div className="label-section" style={{ marginBottom: 40, color: 'rgba(0,0,0,0.40)' }}>
              <span style={{ fontFamily: 'var(--font-grotesk)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 600 }}>
                <span style={{ color: 'rgba(0,0,0,0.15)' }}>■</span> 001&nbsp;&nbsp;&nbsp;ABOUT
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group roll-trigger"
              style={{
                position: 'relative', overflow: 'hidden',
                background: '#1a1a1a', aspectRatio: '4/3',
                cursor: 'pointer',
              }}
            >
              {showreelUnavailable ? (
                <img
                  src={SHOWREEL_POSTER}
                  alt="Showreel"
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    filter: 'grayscale(100%) brightness(0.6)',
                    transition: 'filter 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-105"
                />
              ) : (
                <video
                  src={SHOWREEL_VIDEO}
                  poster={SHOWREEL_POSTER}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onError={() => setShowreelUnavailable(true)}
                  aria-label="Showreel video"
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    filter: 'grayscale(100%) brightness(0.6)',
                    transition: 'filter 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-105"
                />
              )}
              {/* Play overlay positioned exactly corresponding to the image */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, width: '100%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                padding: '24px 20px', display: 'flex', alignItems: 'center', gap: 14
              }}>
                <div style={{
                  width: 0, height: 0,
                  borderTop: '6px solid transparent',
                  borderBottom: '6px solid transparent',
                  borderLeft: '9px solid #b23411',
                  transition: 'transform 0.3s'
                }} className="group-hover:scale-110" />
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  fontFamily: 'var(--font-grotesk)', fontSize: 10, fontWeight: 700,
                  letterSpacing: '0.12em', color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase',
                  lineHeight: '1.2em'
                }}>
                  <span style={{ position: 'relative', display: 'inline-flex' }}>
                    <span className="sr-only">Play</span>
                    <RollingText text="PLAY" />
                  </span>
                  <span style={{ position: 'relative', display: 'inline-flex' }}>
                    <span className="sr-only">Showreel</span>
                    <RollingText text="SHOWREEL" />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Col 2: Empty Spacer */}
          {!isMobile && <div />}

          {/* Col 3 & 4 (Right Side Grid) */}
          {!isMobile ? (
            <div style={{
              gridColumn: 'span 2',
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: 'auto 1fr auto',
              gap: 0,
            }}>
              {/* Spans both Col 3 and 4 */}
              <div style={{ gridColumn: 'span 2', paddingLeft: 32, paddingRight: 32, paddingTop: 56, paddingBottom: 56 }}>
                <RevealWords
                  as="p"
                  text="We create digital solutions that help businesses grow and thrive. Our approach combines creativity, strategy, and technical expertise to deliver work that truly makes an impact. Since our founding, we've worked with clients worldwide, designing interfaces that inspire and perform."
                  amount={0.3}
                  startDelay={0.04}
                  step={0.02}
                  style={{
                    fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'clamp(18px, 1.3vw, 21px)',
                    lineHeight: '1.4em', letterSpacing: '-0.01em', color: 'var(--text-dark)',
                  }}
                />
              </div>

              {/* Col 3: empty, Col 4: small text */}
              <div style={{ gridColumn: '2', paddingLeft: 32, paddingRight: 32, paddingBottom: 64 }}>
                <RevealWords
                  as="p"
                  text="Founded by passionate designers, we specialize in web and mobile interfaces, bringing clarity and elegance to every project we touch."
                  amount={0.45}
                  startDelay={0.12}
                  step={0.03}
                  style={{
                    fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-dark)', lineHeight: '1.5em',
                  }}
                />
              </div>

              {/* Col 3: CTA, Col 4: empty */}
              <div style={{ gridColumn: '1', paddingLeft: 32, paddingRight: 32, display: 'flex', alignItems: 'flex-end', paddingBottom: 0 }}>
                <a href="#about" className="roll-trigger" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '16px 20px', width: '100%',
                  background: 'rgba(0,0,0,0.04)',
                  borderLeft: '2px solid rgba(178,52,17,0.4)',
                  textDecoration: 'none',
                  transition: 'background 0.3s ease, border-left-color 0.3s ease',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderLeftColor = 'rgba(178,52,17,1)'; e.currentTarget.style.background = 'rgba(0,0,0,0.08)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderLeftColor = 'rgba(178,52,17,0.4)'; e.currentTarget.style.background = 'rgba(0,0,0,0.04)'; }}>
                  <span className="sr-only">About Us</span>
                  <RollingText text="ABOUT US" style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', fontFamily: 'var(--font-grotesk)', color: '#000', textTransform: 'uppercase' }} />
                  <span style={{ color: 'rgba(0,0,0,0.4)', fontSize: 12, transition: 'transform 0.3s' }} className="group-hover:translate-x-1">&gt;</span>
                </a>
              </div>
            </div>
          ) : (
            // Mobile layout
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32, marginTop: 40 }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 18, lineHeight: '1.4em' }}>
                We create digital solutions that help businesses grow and thrive. Our approach combines creativity, strategy, and technical expertise to deliver work that truly makes an impact.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: '1.5em', color: 'var(--text-gray)' }}>
                Founded by passionate designers, we specialize in web and mobile interfaces, bringing clarity and elegance to every project we touch.
              </p>
              <a href="#about" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '18px 20px', background: '#ebebeb', borderLeft: '2px solid #b23411', textDecoration: 'none',
              }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', fontFamily: 'var(--font-grotesk)', color: '#000' }}>ABOUT US</span>
                <span style={{ color: 'rgba(0,0,0,0.4)', fontSize: 14 }}>&gt;</span>
              </a>
            </div>
          )}
        </div>

        {/* Horizontal divider strictly connecting columns */}
        <div style={{ width: '100%', height: 1, background: 'rgba(0,0,0,0.06)' }} />

        {/* ROW 2: Stats and Avatars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
          gap: 0,
          width: '100%',
          paddingTop: isMobile ? 48 : 64,
        }}>
          {/* Col 1: Avatars */}
          <div style={{ paddingRight: isMobile ? 0 : 32, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24, paddingBottom: isMobile ? 48 : 0 }}>
            {[
              { name: 'ALEX JOHNSON', role: 'FOUNDER', img: '/img-team1.png' },
              { name: 'MARIA LEE', role: 'CREATIVE DIRECTOR', img: '/img-team2.png' },
            ].map((p, i) => (
              <motion.div custom={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }} key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 44, height: 44, background: '#e0e0e0', overflow: 'hidden' }}>
                  <img src={p.img} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) brightness(0.95)' }} alt={p.name} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontFamily: 'var(--font-grotesk)', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: '#000' }}>{p.name}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 9, fontWeight: 500, letterSpacing: '0.08em', color: '#b23411', textTransform: 'uppercase' }}>{p.role}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Col 2 */}
          {!isMobile && <div />}

          {/* Col 3 & 4 */}
          <div style={{ gridColumn: isMobile ? 'span 1' : 'span 2', display: 'flex', flexDirection: 'column' }}>
            {[
              { val: '#1', label: 'DESIGN COMPANY' },
              { val: '150', suf: '+', label: 'COMPLETED PROJECTS' },
              { val: '20', suf: '+', label: 'AWARDS EARNED' },
            ].map((s, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr',
                borderBottom: i < 2 ? '1px dotted rgba(0,0,0,0.15)' : 'none',
                paddingTop: i === 0 ? 0 : 32, paddingBottom: 32,
                alignItems: 'end'
              }}>
                <div style={{ paddingLeft: isMobile ? 0 : 32, paddingRight: isMobile ? 0 : 32, display: 'flex', alignItems: 'flex-end', lineHeight: '0.9em' }}>
                  <span style={{ fontSize: 'clamp(48px, 4.5vw, 64px)', fontWeight: 500, fontFamily: 'var(--font-grotesk)', letterSpacing: '-0.04em', lineHeight: '0.8em', color: '#000' }}>
                    {s.val === '#1' ? '#1' : <CountUp target={s.val} suffix={s.suf} />}
                  </span>
                </div>
                <div style={{ paddingLeft: isMobile ? 0 : 32, paddingRight: isMobile ? 0 : 32, display: 'flex', alignItems: 'flex-end', paddingBottom: 4 }}>
                  <span style={{ fontSize: 8, fontWeight: 700, fontFamily: 'var(--font-grotesk)', color: 'rgba(0,0,0,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
