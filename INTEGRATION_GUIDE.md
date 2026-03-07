# Cinemora Studios - Integration Guide
## Framer Animation Implementation Plan

---

## ✅ COMPLETED: New Files Created

### Components Created
1. **AnimatedButton.jsx** - Character-by-character hover animation
2. **GridBackground.jsx** - Subtle grid overlay (already had one, but optimized)
3. **RatingDisplay.jsx** - 4.9/5 rating with dots and verified reviews
4. **AvatarStack.jsx** - Stacked profile images with borders

### Utilities Created
1. **animations.js** - Hooks for parallax, scroll reveal, and helpers
   - `useParallax` - Scroll-based parallax movement
   - `useScrollReveal` - Intersection Observer for animations
   - `debounce`, `throttle` - Event handler optimization
   - Easing functions - Smooth animation curves

### Styles Created
1. **hero-animations.css** - All button, rating, avatar, and grid animations
   - Character animation CSS with stagger delays
   - Responsive breakpoints baked in
   - Accessibility: respects prefers-reduced-motion

---

## 🚀 HOW TO USE THESE IN YOUR COMPONENTS

### 1. Update Hero Component

**File**: `frontend/src/components/Hero.jsx`

```jsx
'use client';

import AnimatedButton from '@/components/AnimatedButton';
import RatingDisplay from '@/components/RatingDisplay';
import AvatarStack from '@/components/AvatarStack';
import GridBackground from '@/components/GridBackground';
import { useParallax } from '@/lib/animations';
import Image from 'next/image';

export default function Hero() {
  const { ref, offset } = useParallax(0.5);

  return (
    <>
      <GridBackground />
      
      <section ref={ref} className="hero">
        {/* Hero Background Image with Parallax */}
        <div className="hero-image-slider">
          <Image
            src="/images/hero/your-image.png"
            alt="Hero background"
            fill
            className="hero-image"
            style={{
              transform: `translateY(${offset * 0.5}px)`,
            }}
            priority
          />
          <div className="hero-image-overlay" />
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          {/* Avatar Stack */}
          <AvatarStack />

          {/* Rating Display */}
          <RatingDisplay 
            rating={4.9} 
            reviewCount={180}
          />

          {/* Main Heading with Split Text Animation */}
          <h1>
            <span className="text-split">Beyond</span>
            <span className="text-split">Design</span>
          </h1>

          {/* Animated CTA Button */}
          <AnimatedButton 
            text="Get Started"
            href="/contact"
          />
        </div>
      </section>
    </>
  );
}
```

### 2. Import Hero Animations in globals.css

**File**: `frontend/src/app/globals.css`

Add at the top (after existing imports):
```css
@import url('./hero-animations.css');
```

### 3. Use Scroll Reveal Hook in Other Sections

**Example**: For About, Services, etc.

```jsx
'use client';

import { useScrollReveal } from '@/lib/animations';

export default function Services() {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.2,
    once: true,
  });

  return (
    <section ref={ref} className={isVisible ? 'animate-in' : ''}>
      {/* Content slides in when visible */}
    </section>
  );
}
```

---

## 🎨 BRANDING CUSTOMIZATION POINTS

### Colors
Edit `hero-animations.css` (search and replace):
- `rgb(14, 14, 14)` → Your dark color
- `rgb(255, 255, 255)` → Your light color
- `rgba(14, 14, 14, 0.32)` → Your button background

### Fonts
The Linie template uses:
- **DM Sans** - Body text (already imported)
- **Inter** - Secondary text (already imported)
- **Space Grotesk** - Display/Headings (already imported)

Change in `globals.css` if desired.

### Animation Speed
- Button animation: Change `0.5s` to your preference
- Parallax speed: Change `0.5` in `useParallax(0.5)`
- Scroll reveal threshold: Adjust in `useScrollReveal({ threshold: 0.2 })`

### Easing Functions
Located in `animations.js`. Common ones:
- `--easing-bounce`: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`
- `--easing-smooth`: `cubic-bezier(0.4, 0, 0.2, 1)`

---

## ⚡ PERFORMANCE OPTIMIZATIONS FOR 10-20K VISITORS/MIN

### 1. Image Optimization
```jsx
<Image
  src={imagePath}
  alt="description"
  width={1200}
  height={800}
  loading="lazy"         // Lazy load below-fold images
  priority               // Only for Hero
  placeholder="blur"     // Blur-up effect
/>
```

### 2. Code Splitting
```jsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/Heavy'), {
  loading: () => <p>Loading...</p>,
});
```

### 3. Disable Animations for Low-End Devices
```jsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  // Apply animations
}
```

### 4. Use will-change Sparingly
```css
.btn-animated {
  will-change: auto; /* Default */
}

.btn-animated:hover {
  will-change: transform; /* Only on hover */
}
```

### 5. Debounce Scroll Events
Already handled in `useParallax` hook with RAF (requestAnimationFrame).

---

## 📋 IMPLEMENTATION CHECKLIST

- [ ] Copy new components to `/components/`
- [ ] Copy `animations.js` to `/lib/`
- [ ] Copy `hero-animations.css` to `/styles/`
- [ ] Import `hero-animations.css` in `globals.css`
- [ ] Update Hero.jsx to use new components
- [ ] Test parallax effect on scroll
- [ ] Test button animation on hover
- [ ] Test rating display rendering
- [ ] Test avatar stack displaying correctly
- [ ] Check responsive behavior at 809px and 1199px breakpoints
- [ ] Test on mobile (test touch hover states)
- [ ] Performance test: Load test at high traffic
- [ ] Update all brand colors if needed
- [ ] Test accessibility (keyboard nav, reduced motion)

---

## 🎯 NEXT STEPS

### Phase 1: Hero Section (This Week)
- [ ] Implement Hero with animations
- [ ] Test parallax and button effects
- [ ] Performance baseline testing

### Phase 2: Other Sections
- [ ] Apply scroll reveal to About, Services, etc.
- [ ] Customize animations per section
- [ ] Brand colors and fonts

### Phase 3: Fine-tuning
- [ ] Load testing at scale
- [ ] Optimize images
- [ ] Cache strategy
- [ ] CDN setup for assets

---

## 📚 FRAMER TEMPLATE REFERENCE

**Original Template**: Linie - Digital Agency Website Template
**Published**: Feb 19, 2026
**Reference File**: `linie-reference.html` in project root

All animations described in `ANIMATION_SPECS.md`

---

## ⚠️ Important Notes

1. **Image Paths**: Replace `/images/hero/...` with your actual paths
2. **Colors**: Current setup uses template colors; update to Cinemora branding
3. **Responsive**: Mobile optimizations are already in CSS (809px breakpoint)
4. **Accessibility**: All animations respect `prefers-reduced-motion`
5. **Performance**: No animations on first paint; use `will-change` strategically

---

## 🤝 Support

For detailed specs on each animation, see: `ANIMATION_SPECS.md`

For production deployment: See `nextjs-deployment` skill in VS Code
