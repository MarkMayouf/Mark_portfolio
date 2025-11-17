import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * Portfolio Component - Fully Responsive with Tailwind CSS
 * 
 * Responsive breakpoints:
 * - xs: 480px+ (small phones)
 * - sm: 640px+ (large phones)
 * - md: 768px+ (tablets)
 * - lg: 1024px+ (laptops)
 * - xl: 1280px+ (desktops)
 * - 2xl: 1536px+ (large desktops)
 */

const items = [

   {
    id: 1,
    title: "Gogo Jeans landing page",
    img: "./gogojeans.png",
    desc: "A modern, responsive website for GOGO JEANS, the world's leading quick-to-market apparel and lifestyle company. This website showcases multiple fashion brands, services, and provides an interactive customer experience with a built-in chatbot.",
    demoUrl:"https://gogo-jeans-96mp.vercel.app/",
    githubUrl:"https://github.com/MarkMayouf/Gogo_jeans"
  },   {
    id: 2,
    title: "MODERN SHOP",
    img: "./MODERNSHOP.png",
    desc: "MODERN SHOP. Built with the powerful and flexible WordPress Content Management System (CMS) and integrated e-commerce functionality (likely via the WooCommerce plugin), a website offers a seamless and user-friendly shopping experience ."
    ,demoUrl:"https://expensiveforcheap.com/"
  },
  //    {
  //   id: 3,
  //   title: "A full-featured eCommerce app",
  //   img: "./4.png",
  //   desc: "A full-featured eCommerce application built with the MERN stack (MongoDB, Express, React, Node.js) and Redux Toolkit. It includes a shopping cart with PayPal and credit card support, product reviews, search, ratings, and pagination. Users can manage profiles and view order history, while admins have full control over products, users, and orders.",
  //   demoUrl:"https://promayouftech-w367.onrender.com",
  //   githubUrl:"https://github.com/MarkMayouf/PromayoufTech/tree/main"
  // },

  //  {
  //   id: 1,
  //   title: "A full-featured eCommerce app",
  //   img: "./4.png",
  //   desc: "A full-featured eCommerce application built with the MERN stack (MongoDB, Express, React, Node.js) and Redux Toolkit. It includes a shopping cart with PayPal and credit card support, product reviews, search, ratings, and pagination. Users can manage profiles and view order history, while admins have full control over products, users, and orders.",
  //   demoUrl:"https://promayouftech-w367.onrender.com",
  //   githubUrl:"https://github.com/MarkMayouf/PromayoufTech/tree/main"
  // },

  {
    id: 4,
    title: "Blog App with AI Writing Assistant",
    img: "./1.png",
    desc: "This full-stack blog app combines A full-stack Blog App built with React, Node.js, Express, and MySQL. It features JWT-based authentication, post creation, file uploads, and dynamic content fetching — plus an integrated AI Writing Assistant to help users generate and refine blog content.",
    demoUrl:"https://app-vfar.onrender.com",
    githubUrl:"https://github.com/MarkMayouf/BlogApp/tree/main"
  },
  {
    id: 5,
    title: "Recipes App",
    img: "./recipes.png",
    desc: "A modern interactive web app for exploring and saving your favorite meals. Built with HTML, CSS, and JavaScript, it fetches data from a meal API, allowing users to browse recipes, view details, and mark meals as favorites.",
    demoUrl:"https://recipe-application-five.vercel.app/",
    githubUrl:"https://github.com/MarkMayouf/Recipe_Application"
  },
  {
    id: 6,
    title: "Books store ",
    img: "BOOKS.png",
    desc: "A responsive landing page for a Book Store, built with HTML, CSS, and JavaScript. It features a clean, modern design with a user-friendly layout for showcasing books and engaging visitors",
    demoUrl:"https://book-store-html-css-js-ili9.vercel.app/",
    githubUrl:"https://github.com/MarkMayouf/Book_Store_HTML_CSS_JS/tree/main"
  },
];

const Portfolio = () => {
  const ref = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

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

    const portfolioElement = ref.current;
    if (portfolioElement) {
      portfolioElement.addEventListener('mousemove', handleMouseMove);
      return () => portfolioElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div className="portfolio" ref={ref}>
      <div className="portfolio-container">
        {/* Main Portfolio Title */}
        <motion.div
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
            position: 'relative',
            overflow: 'hidden'
          }}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            style={{
              fontSize: 'clamp(4rem, 10vw, 8rem)',
              fontWeight: 'bold',
              color: 'transparent',
              background: 'linear-gradient(45deg, #ff6500, #ff8c00, #ffa500)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              textShadow: '0 0 30px rgba(255, 101, 0, 0.3)',
              marginBottom: '1rem',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            Portfolio
          </motion.h1>
          
          {/* Animated background elements */}
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(255, 101, 0, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
              transition: 'transform 0.2s ease-out',
              zIndex: -1
            }}
          />
        </motion.div>

        {/* Featured Works Section */}
        <div style={{ position: 'sticky', top: 0, zIndex: 10, marginBottom: '2rem' }}>
          <motion.h2 
            className="portfolio-title"
            style={{
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
              transition: 'transform 0.1s ease-out',
              position: 'relative'
            }}
            whileHover={{ scale: 1.05 }}
          >
            Featured Works
            
            {/* Cursor follower dot */}
            <motion.div
              style={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                background: '#ff6500',
                borderRadius: '50%',
                transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
                transition: 'transform 0.05s ease-out',
                boxShadow: '0 0 20px rgba(255, 101, 0, 0.6)',
                zIndex: 1
              }}
            />
          </motion.h2>
          
          <motion.div 
            style={{ 
              scaleX,
              height: '4px',
              background: 'linear-gradient(90deg, #ff6500, #ff8c00, #ffa500)',
              borderRadius: '2px',
              transformOrigin: 'left',
              boxShadow: '0 0 10px rgba(255, 101, 0, 0.5)'
            }} 
          />
        </div>
        
        <div className="portfolio-grid">
          {items.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="portfolio-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="portfolio-image-container">
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="portfolio-image"
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(255, 101, 0, 0.1), transparent)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }} className="portfolio-overlay" />
              </div>
              
              <div className="portfolio-content">
                <div className="portfolio-text-content">
                  <h2 className="portfolio-item-title">{item.title}</h2>
                  <p className="portfolio-item-description">{item.desc}</p>
                </div>
                
                <div className="portfolio-buttons">
                  <motion.button 
                    className="portfolio-button"
                    onClick={() => window.open(item.demoUrl, '_blank')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🚀 See Demo
                  </motion.button>
                  {item.githubUrl && (
                    <motion.button 
                      className="portfolio-button"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        color: 'white',
                        backdropFilter: 'blur(10px)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8))';
                        e.target.style.color = '#0c0c1d';
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))';
                        e.target.style.color = 'white';
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                      }}
                      onClick={() => window.open(item.githubUrl, '_blank')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      💻 View Code
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
