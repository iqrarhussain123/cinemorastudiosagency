# Cinemora Studios - Framer Template Animation & UI Specifications
## For 10-20K Visitors/Minute Production Site

---

## 1. GLOBAL ANIMATIONS & EFFECTS

### 1.1 Smooth Scroll Behavior
**Location**: Page-wide
**CSS**:
```css
html {
  scroll-behavior: smooth;
}
```
**Implementation**: Add to `globals.css`
**Performance**: Native browser, zero overhead

### 1.2 Grid Background Lines
**Location**: Behind entire page
**Effect**: Subtle grid overlay with ~4 vertical lines
**CSS**:
```css
.grid-lines {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.grid-lines-inner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  height: 100%;
  opacity: 0.03;
}

.grid-lines-inner span {
  border-right: 1px solid rgba(255, 255, 255, 0.5);
}
```
**Performance**: Static, no animation cost

### 1.3 Custom Cursor
**Location**: Custom cursor element throughout
**Effect**: Replaced system cursor with animated dot
**Implementation**: Already exists in `CustomCursor.jsx`
**Optimization**: Use pointer-events: none, requestAnimationFrame for tracking

---

## 2. HERO SECTION ANIMATIONS

### 2.1 Image Slider with Parallax
**Effect**: 
- Background image with brightness filter: `filter: brightness(0.8)`
- Clip-path animation
- Opacity: 1, Transform varies on scroll

**CSS Transforms**:
```css
img {
  position: absolute;
  top: -10%;
  left: 0;
  width: 100%;
  height: 120%;
  object-fit: cover;
  filter: brightness(0.8);
  will-change: transform;
  opacity: 1;
}
```

**Implementation**:
- Use `useViewport.js` hook for scroll detection
- Apply transforms based on scroll position
- **Critical**: Use `will-change: transform` for performance
- **For 20K visitors**: Use CSS scroll-driven animations if available

### 2.2 Text Split Animation (Hero Title)
**Text**: "Beyond Design"
**Effect**: 
- Split into `<span>` elements, each set to `display: inline-block`
- Will-change: transform
- Appears without animation on initial load
- HOVER EFFECT: character-by-character slide up on button hover

**HTML Structure**:
```jsx
<h1>
  <span style={{display: 'inline-block', willChange: 'transform'}}>Beyond</span>
  <span style={{display: 'inline-block', willChange: 'transform'}}>Design</span>
</h1>
```

### 2.3 Avatar Stack Animation
**Location**: Top-right corner of hero
**Elements**:
- 3 profile images (60x60px)
- Border: 1.5px solid white
- Border-radius: 160px (circular)
- Overlapped with negative margin

**CSS**:
```css
.avatar {
  border: 1.5px solid rgb(255, 255, 255);
  border-radius: 160px;
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-left: -15px;
}
```

### 2.4 Rating Display 
**Element**: "4.9/5 Based on 180 verified reviews"
**Animation**: 
- 5 white dots (indicator)
- Text with color: `rgba(255, 255, 255, 0.64)` for secondary text
- No animation, static styling

### 2.5 Hero Button
**Type**: "Light 32% (white line)"
**Background**: `rgba(14, 14, 14, 0.32)` (semi-transparent dark)
**Text Effect**: Character-by-character animation on hover
**Keyframes**: Staggered delays per character

**CSS Animation Pattern**:
```css
.slink-container.active .slink-span:nth-child(1) .slink-txt {
  transform: translate3d(0, -120%, 0);
  transition-delay: 0s;
}
.slink-container.active .slink-span:nth-child(1)::after {
  transform: translate3d(0, 0, 0);
  opacity: 1;
  transition-delay: 0s;
}
```
- Uses `::after` pseudo-element with `data-ch` attribute
- Sliding animation: `translate3d(0, 120%, 0)` → `translate3d(0, 0, 0)`
- Easing: `cubic-bezier(.68, -0.55, .265, 1.55)` for bouncy effect
- Duration: 0.5s

---

## 3. RESPONSIVE BREAKPOINTS

```
Desktop (1200px and up): Full layout
Tablet (810px - 1199px): Adjusted spacing
Mobile (≤809px): Stacked layout
```

**Implementation**:
```css
@media (max-width: 1199px) {
  /* tablet styles */
}

@media (max-width: 809px) {
  /* mobile styles */
}
```

---

## 4. FONT STACK

**Fonts Used**:
- **DM Sans** (400, 500, 700, italic 400, italic 700)
- **Inter** (400, 500, 700, 900, all weights with italics)
- **Space Grotesk** (400, 700)
- **Satoshi** (400 italic, 700 italic)
- **Mattone** (900)

**Font Loading**:
```css
@font-face {
  font-family: "DM Sans";
  src: url("...woff2");
  font-display: swap;
  font-style: normal;
  font-weight: 400;
}
```

**Setup**: Add font imports to `globals.css` or use Google Fonts CDN with preconnect

---

## 5. COLOR PALETTE

**Primary Colors from Template**:
- Dark background: `rgb(14, 14, 14)` (#0e0e0e)
- White/Light: `rgb(255, 255, 255)` (#ffffff)
- Light gray: `rgb(245, 245, 245)` (#f5f5f5)
- White with transparency: `rgba(255, 255, 255, 0.64)`
- Semi-transparent overlay: `rgba(14, 14, 14, 0.32)`

---

## 6. SCROLL ANIMATIONS (Future Sections)

**Pattern to Implement**:
- Use Intersection Observer API for section triggering
- ScrollTimeline or Framer Motion for smooth animations
- Lazy load images with blur-up effect

**Code Pattern**:
```jsx
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger animation
      }
    });
  });
  
  return () => observer.disconnect();
}, []);
```

---

## 7. PERFORMANCE OPTIMIZATIONS

### For 10-20K Visitors/Minute:

1. **Use `will-change` strategically**:
   - Only on animated elements
   - Remove after animation completes (if possible)

2. **GPU Acceleration**:
   - Use `transform` and `opacity` only (not `top`, `left`, etc.)
   - Use `translate3d(x, y, 0)` to force GPU

3. **Debounce Scroll Events**:
   ```jsx
   const debounce = (func, delay) => {
     let timeout;
     return (...args) => {
       clearTimeout(timeout);
       timeout = setTimeout(() => func(...args), delay);
     };
   };
   ```

4. **Lazy Load Images**:
   - Use `<Image>` from `next/image` with `loading="lazy"`
   - Placeholder blur effect

5. **Code Split Components**:
   - Use dynamic imports for below-fold sections

6. **CSS Optimization**:
   - Minify CSS
   - Remove unused font weights
   - Use CSS variables for theme colors

7. **Animation Libraries**:
   - **Framer Motion** (if needed) - tree-shakeable
   - **GSAP** (not needed for this template)
   - Prefer CSS animations for simple effects

---

## 8. FONTS TO ADD

Add to `frontend/src/app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Inter:wght@400;500;700;900&family=Space+Grotesk:wght@400;700&display=swap');
```

---

## IMPLEMENTATION CHECKLIST

- [ ] Add smooth scroll behavior
- [ ] Create grid background lines component
- [ ] Enhance CustomCursor with Framer animations
- [ ] Implement Hero image parallax
- [ ] Add character-by-character button animation
- [ ] Setup responsive breakpoints
- [ ] Import all fonts
- [ ] Add color CSS variables
- [ ] Implement scroll-based animations
- [ ] Performance test at 20K req/min load
- [ ] Add branding customization points

---

## FILES TO CREATE/MODIFY

```
frontend/src/
├── app/globals.css (add fonts, colors, animations)
├── styles/
│   └── animations.css (character animation, scroll effects)
├── components/
│   ├── Hero.jsx (parallax, text animation)
│   ├── CustomCursor.jsx (enhance with Framer)
│   ├── GridBackground.jsx (grid lines)
│   └── etc...
└── lib/
    └── animations.js (scroll, animation utilities)
```
