# Mark Mayouf - Portfolio Website

A modern, interactive portfolio website built with React, Vite, and Framer Motion. Features smooth animations, responsive design, and an elegant user experience showcasing Mark Mayouf's web development projects and skills.

## ✨ Features

- **🎨 Modern Design**: Clean, professional interface with orange (#ff6500) branding
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🎭 Smooth Animations**: Powered by Framer Motion for fluid interactions
- **🖱️ Custom Cursor**: Interactive cursor that follows mouse movement
- **📧 Contact Form**: EmailJS integration with fallback mailto support
- **🌊 Parallax Effects**: Immersive scrolling animations between sections
- **🍔 Mobile Navigation**: Animated sidebar with hamburger menu
- **⚡ Fast Performance**: Built with Vite for optimal loading speeds

## 🚀 Live Demo

**Portfolio Website**: [View Live Demo](https://your-portfolio-url.com)

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - Modern React with hooks and functional components
- **Vite 4.4.5** - Next-generation frontend build tool
- **Framer Motion 10.16.4** - Production-ready motion library for React
- **Sass 1.68.0** - CSS preprocessing for enhanced styling

### Additional Libraries
- **EmailJS 3.11.0** - Client-side email sending without backend
- **ESLint** - Code quality and consistency

### Development Tools
- **Vite Dev Server** - Hot module replacement for development
- **ESLint** - Code linting and formatting
- **CSS3** - Modern styling with flexbox and grid

## 📁 Project Structure

```
src/
├── components/
│   ├── cursor/
│   │   └── Cursor.jsx           # Custom animated cursor
│   ├── hero/
│   │   └── Hero.jsx             # Landing section with animated text
│   ├── navbar/
│   │   └── Navbar.jsx           # Main navigation with dropdown
│   ├── parallax/
│   │   └── Parallax.jsx         # Scroll-based parallax effects
│   ├── portfolio/
│   │   └── Portfolio.jsx        # Project showcase with animations
│   ├── contact/
│   │   └── Contact.jsx          # Contact form with EmailJS
│   └── sidebar/
│       ├── Sidebar.jsx          # Mobile navigation container
│       ├── toggleButton/
│       │   └── ToggleButton.jsx # Animated hamburger menu
│       └── links/
│           └── Links.jsx        # Sidebar navigation links
├── App.jsx                      # Main application component
├── main.jsx                     # Application entry point
├── index.css                    # Global styles and animations
└── Test.jsx                     # Development testing component

docs/                            # Component documentation
├── App.md
├── Cursor.md
├── Hero.md
├── Navbar.md
├── Parallax.md
├── Portfolio.md
├── Contact.md
├── Sidebar.md
├── ToggleButton.md
└── Links.md
```

## 🎯 Featured Projects

### 1. E-Commerce Platform (PromayoufTech)
- **Tech Stack**: MERN Stack + Redux Toolkit
- **Features**: Shopping cart, PayPal integration, product reviews, admin panel
- **Demo**: [Live Demo](https://promayouftech-w367.onrender.com)
- **GitHub**: [Source Code](https://github.com/MarkMayouf/PromayoufTech)

### 2. AI-Powered Blog Platform
- **Tech Stack**: React, Node.js, Express, MySQL
- **Features**: JWT authentication, file uploads, AI writing assistant
- **Demo**: [Live Demo](https://app-vfar.onrender.com)
- **GitHub**: [Source Code](https://github.com/MarkMayouf/BlogApp)

### 3. Recipe Discovery App
- **Tech Stack**: HTML, CSS, JavaScript, API Integration
- **Features**: Recipe browsing, favorites system, responsive design
- **Demo**: [Live Demo](https://recipe-application-five.vercel.app/)
- **GitHub**: [Source Code](https://github.com/MarkMayouf/Recipe_Application)

### 4. Bookstore Landing Page
- **Tech Stack**: HTML, CSS, JavaScript
- **Features**: Modern responsive design, interactive elements
- **Demo**: [Live Demo](https://book-store-html-css-js-ili9.vercel.app/)
- **GitHub**: [Source Code](https://github.com/MarkMayouf/Book_Store_HTML_CSS_JS)

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint for code quality
```

## ⚙️ Configuration

### EmailJS Setup
To enable the contact form, configure EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the configuration in `src/components/contact/Contact.jsx`:

```javascript
const serviceID = 'your_service_id';
const templateID = 'your_template_id';
const userID = 'your_user_id';
```

### Environment Variables
Create a `.env` file for sensitive configuration:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

## 🎨 Customization

### Colors and Branding
The primary brand color is defined as `#ff6500` (orange). Update this throughout the codebase:

- CSS variables in `index.css`
- Component styling in individual files
- Framer Motion animation colors

### Content Updates
- **Personal Information**: Update in `Hero.jsx` and `Contact.jsx`
- **Projects**: Modify the `items` array in `Portfolio.jsx`
- **Navigation**: Update menu items in navigation components

### Images and Assets
Place images in the `public/` directory:
- Portfolio project screenshots
- Background images for parallax effects
- Icons and logos

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Performance Optimizations

- **Vite**: Fast build tool with hot module replacement
- **Code Splitting**: Automatic code splitting for optimal loading
- **Image Optimization**: Responsive images and lazy loading
- **Animation Performance**: GPU-accelerated animations
- **Minimal Dependencies**: Lean dependency tree

## 📞 Contact Information

- **Email**: mayouv.mark@gmail.com
- **Location**: Brooklyn, New York
- **Phone**: +1 929 277 1804

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Framer Motion** - For excellent animation capabilities
- **Vite** - For the amazing development experience
- **EmailJS** - For client-side email functionality
- **React Community** - For continuous inspiration and support

## 📚 Documentation

Detailed component documentation is available in the `docs/` directory:
- [App Component](docs/App.md) - Main application structure
- [Cursor Component](docs/Cursor.md) - Custom cursor implementation
- [Hero Component](docs/Hero.md) - Landing section animations
- [Navbar Component](docs/Navbar.md) - Navigation system
- [Parallax Component](docs/Parallax.md) - Scroll-based effects
- [Portfolio Component](docs/Portfolio.md) - Project showcase
- [Contact Component](docs/Contact.md) - Contact form functionality
- [Sidebar Components](docs/Sidebar.md) - Mobile navigation system

---

**Built with ❤️ by Mark Mayouf © 2025**

