'use client';

/**
 * useParallax Hook
 * Applies parallax effect based on scroll position
 * Optimized for high traffic with RAF and debounce
 */

import { useEffect, useRef, useState } from 'react';

export function useParallax(speed = 0.5) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrameId;
    let scrollTimeout;

    const handleScroll = () => {
      // Use RAF for smooth animation
      animationFrameId = requestAnimationFrame(() => {
        if (ref.current) {
          const element = ref.current;
          const elementTop = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          // Only calculate if element is in viewport
          if (elementTop < windowHeight && elementTop > -element.offsetHeight) {
            const scrolled = window.scrollY;
            const newOffset = scrolled * speed;
            setOffset(newOffset);
          }
        }

        // Debounce callback
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          // Could trigger additional actions here
        }, 150);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(scrollTimeout);
    };
  }, [speed]);

  return { ref, offset };
}

/**
 * useScrollReveal Hook
 * Triggers animations when element enters viewport
 * Uses Intersection Observer API for performance
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Optional: unobserve to avoid re-triggering
        if (options.once !== false) {
          observer.unobserve(entry.target);
        }
      } else if (!options.once) {
        setIsVisible(false);
      }
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px',
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
}

/**
 * Utility: Debounce function for event handlers
 */
export function debounce(func, delay = 150) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

/**
 * Utility: Throttle function for scroll/resize events
 */
export function throttle(func, delay = 16) {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}

/**
 * useViewportWidth Hook
 * Gets current viewport width for responsive behavior
 * Already exists in project as useViewport.js
 */
export function useViewportWidth() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = throttle(() => {
      setWidth(window.innerWidth);
    }, 100);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

/**
 * Easing functions for smooth animations
 */
export const easing = {
  easeInQuad: (t) => t * t,
  easeOutQuad: (t) => t * (2 - t),
  easeInOutQuad: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeInCubic: (t) => t * t * t,
  easeOutCubic: (t) => (t - 1) * (t - 1) * (t - 1) + 1,
  easeOutElastic: (t) => {
    const c5 = (2 * Math.PI) / 4.5;
    return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c5) + 1;
  },
};
