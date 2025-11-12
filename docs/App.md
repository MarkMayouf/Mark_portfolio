# App Component Documentation

## Overview
The `App` component serves as the main application container for Mark Mayouf's portfolio website. It orchestrates the layout and structure of all sections including navigation, hero, portfolio, and contact areas.

## File Location
`src/App.jsx`

## Dependencies
- React (functional component)
- Test component (`./Test`)
- Contact component (`./components/contact/Contact`)
- Cursor component (`./components/cursor/Cursor`)
- Hero component (`./components/hero/Hero`)
- Navbar component (`./components/navbar/Navbar`)
- Parallax component (`./components/parallax/Parallax`)
- Portfolio component (`./components/portfolio/Portfolio`)

## Structure
The application is divided into distinct sections:

### 1. Global Elements
- **Cursor**: Custom animated cursor that follows mouse movement

### 2. Homepage Section (`#Homepage`)
- **Navbar**: Main navigation with dropdown functionality
- **Hero**: Landing section with animated text and background

### 3. Portfolio Section (`#Portfolio`)
- **Parallax**: Animated parallax transition effect
- **Portfolio**: Showcase of projects and work

### 4. Contact Section (`#Contact`)
- **Contact**: Contact form with EmailJS integration

### 5. Footer
- Simple footer with copyright information
- Styled with consistent brand colors (#ff6500)

## Key Features
- **Section-based Navigation**: Each major area has a unique ID for smooth scrolling
- **Responsive Design**: Works across desktop and mobile devices
- **Consistent Branding**: Orange theme (#ff6500) throughout
- **Framer Motion Integration**: Ready for animations via child components

## Styling Approach
- Uses CSS classes (`.app` for main container)
- Inline styles for footer styling
- Responsive layout structure

## Code Example
```jsx
const App = () => {
  return (
    <div className="app">
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
        <div id="portfolio-content">
          <Portfolio />
        </div>
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
};
```

## Navigation Integration
- Homepage: `#Homepage`
- Portfolio: `#Portfolio` (with special targeting to `#portfolio-content`)
- Contact: `#Contact`

## Future Enhancements
- The Test component is currently commented out but available for testing Framer Motion features
- Potential for additional sections or features 