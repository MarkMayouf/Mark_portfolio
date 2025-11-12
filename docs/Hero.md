# Hero Component Documentation

## Overview
The `Hero` component is the main landing section of Mark Mayouf's portfolio website. It features animated text elements and a sliding background text effect, creating an engaging first impression for visitors.

## File Location
`src/components/hero/Hero.jsx`

## Dependencies
- Framer Motion (`motion` for animations)

## Features
- **Animated Text Entry**: Text slides in from the left with opacity fade
- **Staggered Animation**: Child elements animate with delays for dynamic effect
- **Sliding Background**: Continuous sliding text animation in the background
- **Responsive Typography**: Text scales appropriately across device sizes

## Animation Variants

### Text Variants
```jsx
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
```

### Slider Variants
```jsx
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
```

## Component Structure

### Main Content Area
- **Hero Subtitle**: "MARK MAYOUF" - Personal brand name
- **Hero Title**: "Web Developer" - Professional title

### Background Animation
- **Sliding Text**: "MARK MAYOUF" continuously moves across the background
- **Mirror Effect**: Text slides back and forth infinitely

## Key Animation Features

### Text Animation Sequence
1. **Initial State**: Text positioned -500px left, opacity 0
2. **Animate State**: Text slides to normal position (x: 0) with full opacity
3. **Stagger Effect**: 0.1s delay between child element animations
4. **Duration**: 1-second smooth transition

### Background Text Animation
- **Infinite Loop**: Continuous movement with mirror repeat
- **Duration**: 20-second cycle for smooth, noticeable movement
- **Range**: Moves -220% of container width

## Code Example
```jsx
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants} className="hero-subtitle">
            MARK MAYOUF
          </motion.h2>
          <motion.h1 variants={textVariants} className="hero-title">
            Web Developer 
          </motion.h1>
        </motion.div>
      </div>
      
      <motion.div
        className="hero-background-text"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
       MARK MAYOUF
      </motion.div>
    </div>
  );
};
```

## CSS Classes Required
The component relies on these CSS classes:
- `.hero` - Main container
- `.hero-content` - Content wrapper
- `.hero-subtitle` - Styling for the name
- `.hero-title` - Styling for the job title
- `.hero-background-text` - Background sliding text styling

## Typical CSS Implementation
```css
.hero {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 2rem;
}

.hero-subtitle {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 600;
  color: #ff6500;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: bold;
  color: white;
}

.hero-background-text {
  position: absolute;
  font-size: clamp(5rem, 15vw, 12rem);
  color: rgba(255, 255, 255, 0.1);
  white-space: nowrap;
  top: 50%;
  transform: translateY(-50%);
}
```

## Performance Notes
- Animations use transform properties for optimal performance
- Background animation runs continuously but uses GPU acceleration
- Text uses clamp() for responsive sizing without JavaScript

## Accessibility
- Proper heading hierarchy (h2 for subtitle, h1 for main title)
- Text remains readable even with animations
- Reduced motion preferences should be considered for accessibility

## Customization Options
1. **Animation Duration**: Modify transition duration values
2. **Text Content**: Update personal name and job title
3. **Animation Distance**: Adjust initial x position and slider range
4. **Stagger Timing**: Change staggerChildren delay for different effects 