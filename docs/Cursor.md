# Cursor Component Documentation

## Overview
The `Cursor` component creates a custom animated cursor that follows the user's mouse movement across the website. It provides an enhanced interactive experience with smooth animations powered by Framer Motion.

## File Location
`src/components/cursor/Cursor.jsx`

## Dependencies
- React (`useEffect`, `useState`)
- Framer Motion (`motion`)

## Features
- **Real-time Mouse Tracking**: Follows mouse movement with precision
- **Smooth Animation**: Uses Framer Motion for fluid cursor transitions
- **Offset Positioning**: Cursor appears slightly offset from the actual mouse position (+10px x and y)
- **Performance Optimized**: Efficient event listener management

## Technical Implementation

### State Management
```jsx
const [position, setPosition] = useState({ x: 0, y: 0 });
```
- Tracks cursor position with x and y coordinates
- Initial position set to (0, 0)

### Mouse Event Handling
```jsx
useEffect(() => {
  const mouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  window.addEventListener("mousemove", mouseMove);

  return () => {
    window.removeEventListener("mousemove", mouseMove);
  };
}, []);
```

### Key Features:
- **Event Listener**: Listens to `mousemove` events on the window
- **Cleanup**: Properly removes event listener on component unmount
- **Performance**: Uses `clientX` and `clientY` for accurate positioning

### Animation
```jsx
<motion.div
  className="cursor"
  animate={{ x: position.x+10, y: position.y+10 }}
/>
```

## Styling Requirements
The component requires CSS class `.cursor` to be defined in your stylesheet. Typical styling might include:

```css
.cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  background: #ff6500;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
}
```

## Usage
Simply import and include in your main App component:

```jsx
import Cursor from "./components/cursor/Cursor";

function App() {
  return (
    <div>
      <Cursor />
      {/* Other components */}
    </div>
  );
}
```

## Performance Considerations
- Uses modern React hooks for optimal performance
- Event listener is properly cleaned up to prevent memory leaks
- Minimal re-renders due to efficient state management

## Browser Compatibility
- Works in all modern browsers that support CSS transforms
- Gracefully degrades in browsers without JavaScript

## Customization Options
To customize the cursor:
1. Modify the offset values (currently +10px)
2. Update the CSS class `.cursor` for different visual styles
3. Add additional motion properties for enhanced animations

## Integration Notes
- Designed to work seamlessly with other Framer Motion components
- Does not interfere with native cursor functionality
- Positioned with high z-index to appear above other elements 