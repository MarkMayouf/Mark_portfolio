# Parallax Component Documentation

## Overview
The `Parallax` component creates immersive scrolling effects with layered background images and animated text. It serves as a visual transition between sections, particularly between the homepage and portfolio sections.

## File Location
`src/components/parallax/Parallax.jsx`

## Dependencies
- React (`useRef`)
- Framer Motion (`motion`, `useScroll`, `useTransform`)

## Features
- **Scroll-Based Animation**: Elements animate based on scroll position
- **Multi-Layer Backgrounds**: Multiple image layers with different animation speeds
- **Dynamic Content**: Accepts type prop for different section configurations
- **Responsive Design**: Adapts to various screen sizes
- **Smooth Transforms**: Uses Framer Motion's useTransform for fluid animations

## Props
| Prop | Type | Description | Example |
|------|------|-------------|---------|
| `type` | string | Determines the content and styling theme | `"portfolio"`, `"services"` |

## Technical Implementation

### Scroll Detection
```jsx
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start start", "end start"],
});
```
- Tracks scroll progress from when element starts entering viewport to when it exits
- Returns value between 0 and 1

### Transform Calculations
```jsx
const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
```
- **yText**: Text moves faster (0% to 500%) for dramatic effect
- **yBg**: Backgrounds move slower (0% to 100%) for depth

## Visual Layers

### 1. Background Gradient
```jsx
background:
  type === "services"
    ? "linear-gradient(180deg, #111132, #0c0c1d)"
    : "linear-gradient(180deg, #111132, #505064)"
```

### 2. Animated Title
- Large responsive text (3rem to 12rem using clamp)
- Moves with `yText` transform for parallax effect
- Currently displays "Portfolio" for portfolio type

### 3. Mountain Layer
- Static background image (`/mountains.png`)
- Provides visual depth and framing

### 4. Dynamic Background
- Changes based on type prop:
  - **Services**: `/planets.png`
  - **Portfolio**: `/sun.png`
- Animates with `yBg` transform

### 5. Stars Layer
- Background stars (`/stars.png`)
- Moves horizontally with scroll for added dynamism

## Code Structure
```jsx
const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="parallax" ref={ref}>
      {/* Title */}
      <motion.h1 style={{ y: yText }}>
        {type === "portfolio" ? "Portfolio" : ""}
      </motion.h1>
      
      {/* Background Layers */}
      <motion.div /* mountains */ />
      <motion.div style={{ y: yBg }} /* dynamic bg */ />
      <motion.div style={{ x: yBg }} /* stars */ />
    </div>
  );
};
```

## Styling Specifications
- **Height**: 100vh (full viewport height)
- **Position**: Relative for proper layering
- **Display**: Flex with center alignment
- **Overflow**: Hidden to contain animated elements
- **Z-index Management**: Text has z-index: 10 for proper layering

## Image Assets Required
The component expects these images in the `/public` folder:
- `/mountains.png` - Mountain silhouette for framing
- `/sun.png` - Sun/celestial body for portfolio sections
- `/planets.png` - Planet imagery for services sections
- `/stars.png` - Star field background

## Performance Considerations
- Uses `useTransform` for optimized animations (runs on main thread)
- Background images should be optimized for web
- Scroll calculations are efficient with Framer Motion's optimization

## Usage Examples

### Portfolio Section
```jsx
<Parallax type="portfolio" />
// Displays "Portfolio" title with sun background
```

### Services Section (Future Use)
```jsx
<Parallax type="services" />
// Uses planets background with different gradient
```

## Customization Options
1. **Animation Speed**: Modify transform ranges for different scroll speeds
2. **Background Images**: Replace image paths for different themes
3. **Title Content**: Add more type conditions for different section titles
4. **Colors**: Adjust gradient colors for different moods
5. **Animation Direction**: Change x/y transforms for different movement patterns

## Browser Compatibility
- Works in all modern browsers supporting CSS transforms
- Gracefully degrades in browsers without JavaScript
- Mobile-friendly with appropriate performance considerations

## Integration Notes
- Typically placed between major sections as a transition element
- Works seamlessly with the portfolio structure in App.jsx
- Designed to be lightweight and performant for smooth scrolling experiences 