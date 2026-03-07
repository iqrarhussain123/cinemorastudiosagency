'use client';

import React, { useState } from 'react';

export default function AnimatedButton({
  text = 'Get Started',
  href = '#contact',
  onClick,
  style = {},
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);
  const characters = text.split('');

  return (
    <>
      <a
        href={href}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px 32px',
          backgroundColor: 'rgba(14, 14, 14, 0.32)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '8px',
          color: 'rgb(255, 255, 255)',
          fontSize: '14px',
          fontWeight: 500,
          textDecoration: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          overflow: 'hidden',
          backgroundColor: isHovered ? 'rgba(14, 14, 14, 0.48)' : 'rgba(14, 14, 14, 0.32)',
          ...style,
        }}
        {...props}
      >
        <span style={{ display: 'flex', gap: 0 }}>
          {characters.map((char, index) => (
            <span
              key={index}
              style={{
                position: 'relative',
                display: 'inline-block',
                minWidth: 0,
                whiteSpace: 'pre',
                textTransform: 'uppercase',
              }}
            >
              <span
                style={{
                  color: 'rgb(255, 255, 255)',
                  transition: `transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55), color 0.18s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.01}s`,
                  willChange: 'transform, color',
                  display: 'inline-block',
                  backfaceVisibility: 'hidden',
                  transform: isHovered ? 'translate3d(0, -120%, 0)' : 'translate3d(0, 0, 0)',
                  transitionDelay: isHovered ? `${index * 0.01}s` : '0s',
                }}
              >
                {char}
              </span>
              <span
                style={{
                  content: `"${char}"`,
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  color: 'rgba(255, 255, 255, 0.8)',
                  pointerEvents: 'none',
                  transition: `transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.01}s`,
                  willChange: 'transform, color, opacity',
                  display: 'inline-block',
                  backfaceVisibility: 'hidden',
                  transform: isHovered ? 'translate3d(0, 0, 0)' : 'translate3d(0, 120%, 0)',
                  opacity: isHovered ? 1 : 0,
                  zIndex: 1,
                  whiteSpace: 'pre',
                  transitionDelay: isHovered ? `${index * 0.01}s` : '0s',
                }}
              >
                {char}
              </span>
            </span>
          ))}
        </span>
      </a>
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          a[href] span span {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}
