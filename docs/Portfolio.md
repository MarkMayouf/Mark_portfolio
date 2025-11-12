# Portfolio Component Documentation

## Overview
The `Portfolio` component showcases Mark Mayouf's featured projects in an interactive, animated grid layout. It includes mouse tracking effects, scroll-based animations, and detailed project information with live demo and GitHub links.

## File Location
`src/components/portfolio/Portfolio.jsx`

## Dependencies
- React (`useRef`, `useState`, `useEffect`)
- Framer Motion (`motion`, `useScroll`, `useSpring`, `useTransform`)

## Features
- **Interactive Mouse Tracking**: Elements respond to mouse movement
- **Scroll Progress Indicator**: Animated progress bar based on scroll position
- **Responsive Grid Layout**: Adapts to different screen sizes
- **Project Showcase**: Displays projects with images, descriptions, and links
- **Smooth Animations**: Entrance animations and hover effects
- **Live Demos**: Direct links to deployed projects
- **GitHub Integration**: Links to source code repositories

## Projects Data
The component includes 4 featured projects:

### 1. E-Commerce App (PromayoufTech)
- **Technology**: MERN Stack + Redux Toolkit
- **Features**: Shopping cart, PayPal integration, product reviews, admin panel
- **Demo**: https://promayouftech-w367.onrender.com
- **GitHub**: https://github.com/MarkMayouf/PromayoufTech

### 2. Blog App with AI Writing Assistant
- **Technology**: React, Node.js, Express, MySQL
- **Features**: JWT authentication, file uploads, AI writing assistant
- **Demo**: https://app-vfar.onrender.com
- **GitHub**: https://github.com/MarkMayouf/BlogApp

### 3. Recipes App
- **Technology**: HTML, CSS, JavaScript
- **Features**: Recipe browsing, API integration, favorites system
- **Demo**: https://recipe-application-five.vercel.app/
- **GitHub**: https://github.com/MarkMayouf/Recipe_Application

### 4. Books Store Landing Page
- **Technology**: HTML, CSS, JavaScript
- **Features**: Responsive design, modern layout
- **Demo**: https://book-store-html-css-js-ili9.vercel.app/
- **GitHub**: https://github.com/MarkMayouf/Book_Store_HTML_CSS_JS

## Technical Implementation

### Mouse Tracking System
```jsx
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };
  // Event listener setup
}, []);
```

### Scroll Progress Tracking
```jsx
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["end end", "start start"],
});

const scaleX = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
});
```

## Animation Features

### 1. Title Animation
- **Mouse Parallax**: Title moves based on mouse position
- **Gradient Text**: Orange gradient with text clipping
- **Responsive Sizing**: Uses clamp() for responsive typography
- **Background Effects**: Animated radial gradient follows mouse

### 2. Progress Bar
- **Scroll-Based**: Scales horizontally based on scroll progress
- **Spring Animation**: Smooth spring physics for natural movement
- **Gradient Colors**: Orange theme consistent with brand

### 3. Grid Items
- **Entrance Animation**: Items fade in from bottom with stagger effect
- **Hover Effects**: Scale and 3D rotation on hover
- **Image Overlays**: Gradient overlays for enhanced visual appeal

## Code Structure
```jsx
const Portfolio = () => {
  const ref = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // Mouse tracking
  useEffect(() => {
    // Mouse move handler
  }, []);

  return (
    <div className="portfolio" ref={ref}>
      {/* Interactive Title */}
      <motion.h1 style={{
        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
      }}>
        Portfolio
      </motion.h1>

      {/* Progress Bar */}
      <motion.div style={{ scaleX }} />

      {/* Project Grid */}
      <div className="portfolio-grid">
        {items.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, rotateY: 5 }}
          >
            {/* Project content */}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
```

## Responsive Design Features
- **Grid Layout**: Auto-fit columns with minimum 300px width
- **Responsive Typography**: clamp() functions for scalable text
- **Mobile Optimized**: Touch-friendly interactions
- **Flexible Images**: Responsive image sizing

## CSS Classes Required
- `.portfolio` - Main container
- `.portfolio-container` - Inner container wrapper
- `.portfolio-grid` - Grid layout container
- `.portfolio-item` - Individual project containers
- `.portfolio-image-container` - Image wrapper
- `.portfolio-image` - Project images
- `.portfolio-title` - Project titles

## Performance Optimizations
- **useSpring**: Optimized scroll animations
- **Efficient Event Listeners**: Proper cleanup and minimal re-renders
- **Image Optimization**: Responsive image loading
- **GPU Acceleration**: Transform-based animations

## Accessibility Features
- **Semantic HTML**: Proper heading hierarchy
- **Alt Text**: Descriptive image alternative text
- **Keyboard Navigation**: Focusable interactive elements
- **Screen Reader Support**: Meaningful content structure

## Browser Compatibility
- **Modern Browsers**: Full feature support
- **Progressive Enhancement**: Graceful degradation
- **Mobile Support**: Touch and gesture compatibility

## Customization Options
1. **Projects Data**: Easily add/remove projects from items array
2. **Animation Timing**: Adjust transition durations and delays
3. **Mouse Sensitivity**: Modify parallax multipliers
4. **Color Scheme**: Update gradient colors and theme
5. **Grid Layout**: Modify responsive breakpoints

## Integration Notes
- Works with the overall portfolio scroll structure
- Coordinates with Navbar navigation targeting
- Optimized for the #portfolio-content targeting system
- Compatible with the global orange theme (#ff6500) 