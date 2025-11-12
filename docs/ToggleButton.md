# ToggleButton Component Documentation

## Overview
The `ToggleButton` component creates an animated hamburger menu button that transforms into a close (X) icon. It's positioned fixed in the top-left corner and serves as the primary trigger for the mobile sidebar navigation.

## File Location
`src/components/sidebar/toggleButton/ToggleButton.jsx`

## Dependencies
- Framer Motion (`motion`)

## Features
- **Animated Icon**: Smooth transformation between hamburger and close states
- **Fixed Positioning**: Always accessible in top-left corner
- **SVG-Based**: Scalable vector graphics for crisp display
- **Touch-Friendly**: Large hit target for mobile devices
- **Hover Effects**: Visual feedback on interaction
- **Coordinated Animation**: Syncs with sidebar open/close state

## Props
| Prop | Type | Description |
|------|------|-------------|
| `setOpen` | function | Function to toggle sidebar state |

## Component Structure
```jsx
const ToggleButton = ({ setOpen }) => {
  return (
    <button 
      onClick={() => setOpen((prev) => !prev)}
      className="navbar-toggle"
      style={{
        width: '3rem',
        height: '3rem',
        borderRadius: '50%',
        position: 'fixed',
        top: '1.5rem',
        left: '1.5rem',
        zIndex: 50,
        // ... additional styles
      }}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        {/* Animated paths */}
      </svg>
    </button>
  );
};
```

## Animation System

### Path Variants
The component uses three animated SVG paths that transform between states:

#### Top Line
```jsx
<motion.path
  strokeWidth="3"
  stroke="white"
  strokeLinecap="round"
  variants={{
    closed: { d: "M 2 2.5 L 20 2.5" },
    open: { d: "M 3 16.5 L 17 2.5" },
  }}
/>
```
- **Closed**: Horizontal line at top
- **Open**: Diagonal line (top-left to bottom-right)

#### Middle Line
```jsx
<motion.path
  strokeWidth="3"
  stroke="white"
  strokeLinecap="round"
  d="M 2 9.423 L 20 9.423"
  variants={{
    closed: { opacity: 1 },
    open: { opacity: 0 },
  }}
/>
```
- **Closed**: Visible horizontal line in center
- **Open**: Fades out completely

#### Bottom Line
```jsx
<motion.path
  strokeWidth="3"
  stroke="white"
  strokeLinecap="round"
  variants={{
    closed: { d: "M 2 16.346 L 20 16.346" },
    open: { d: "M 3 2.5 L 17 16.346" },
  }}
/>
```
- **Closed**: Horizontal line at bottom
- **Open**: Diagonal line (bottom-left to top-right)

## Visual Design

### Button Styling
- **Size**: 3rem × 3rem (48px × 48px)
- **Shape**: Circular with 50% border-radius
- **Background**: Transparent (becomes semi-transparent on hover)
- **Position**: Fixed at top-left (1.5rem from edges)
- **Z-Index**: 50 (highest priority for accessibility)

### Icon Specifications
- **SVG Size**: 23px × 23px
- **Stroke Width**: 3px for visibility
- **Stroke Color**: White for contrast
- **Line Caps**: Rounded for modern appearance

### Hover Effects
```jsx
onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
onMouseLeave={(e) => e.target.style.background = 'transparent'}
```
- Subtle white overlay on hover
- Smooth transition between states

## State Coordination
The component works in conjunction with the Sidebar component's state:

```jsx
// In Sidebar component
const [open, setOpen] = useState(false);

// Passed to ToggleButton
<ToggleButton setOpen={setOpen} />

// ToggleButton toggles state
onClick={() => setOpen((prev) => !prev)}
```

## Accessibility Features
- **Button Semantics**: Proper button element for screen readers
- **Touch Target**: Large enough for easy mobile interaction
- **Visual Feedback**: Clear state changes and hover effects
- **Keyboard Support**: Native button keyboard accessibility

## CSS Classes
- `.navbar-toggle` - Applied to the button element for additional styling

## Animation Inheritance
The icon animations are controlled by the parent Sidebar component's motion variants:
- Inherits "open" and "closed" states from Sidebar
- Automatically animates when sidebar state changes
- No internal state management required

## Performance Features
- **SVG Optimization**: Lightweight vector graphics
- **Transform Animations**: GPU-accelerated path morphing
- **Minimal Re-renders**: Only updates when open state changes
- **Fixed Positioning**: Doesn't affect layout flow

## Browser Compatibility
- **Modern Browsers**: Full SVG animation support
- **Safari**: Optimized for iOS Safari touch events
- **Mobile Chrome**: Android-optimized touch handling

## Integration Points
- **Sidebar Component**: Primary integration for state management
- **Navbar Component**: Coordinates with main navigation
- **Global Layout**: Fixed positioning works with overall design

## Customization Options
1. **Position**: Modify top/left values for different placement
2. **Size**: Adjust width/height for different button sizes
3. **Icon Style**: Modify stroke width, color, or line cap style
4. **Animation Timing**: Framer Motion inherits timing from parent
5. **Hover Effects**: Customize background colors and transitions

## Usage Example
```jsx
import ToggleButton from './components/sidebar/toggleButton/ToggleButton';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <ToggleButton setOpen={setOpen} />
      {/* Other sidebar content */}
    </div>
  );
};
```

## Animation States
- **Default**: Hamburger icon (three horizontal lines)
- **Active**: Close icon (X formed by diagonal lines)
- **Transition**: Smooth morphing between states
- **Hover**: Background highlight for user feedback

## Mobile Optimization
- **Touch Events**: Optimized for mobile touch interfaces
- **Hit Target**: 48px minimum for accessibility guidelines
- **Visual Feedback**: Clear state changes for touch devices
- **Performance**: Smooth animations on mobile devices 