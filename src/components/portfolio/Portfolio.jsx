import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * Portfolio Component - Responsive Design with Demo URLs
 * 
 * To update your work URLs:
 * 1. Replace "https://your-[project]-demo.com" with your actual demo URLs
 * 2. Replace "https://github.com/yourusername/[project]" with your GitHub repo URLs
 * 3. Update project descriptions with your actual project details
 * 
 * The component now includes:
 * - Responsive design for mobile, tablet, and desktop
 * - Clickable demo buttons that open in new tabs
 * - Optional GitHub buttons for code viewing
 * - Improved styling with hover effects
 */

const items = [
   {
    id: 1,
    title: "A full-featured eCommerce app",
    img: "./4.png",
    desc: "A full-featured eCommerce application built with the MERN stack (MongoDB, Express, React, Node.js) and Redux Toolkit. It includes a shopping cart with PayPal and credit card support, product reviews, search, ratings, and pagination. Users can manage profiles and view order history, while admins have full control over products, users, and orders.",
    demoUrl:"https://promayouftech-w367.onrender.com", // Replace with your actual demo URL
    githubUrl:"https://github.com/MarkMayouf/PromayoufTech/tree/main" // Optional: Add GitHub repo URL
  },
  {
    id: 2,
    title: "Blog App with AI Writing Assistant",
    img: "./1.png",
    desc: "This full-stack blog app combines A full-stack Blog App built with React, Node.js, Express, and MySQL. It features JWT-based authentication, post creation, file uploads, and dynamic content fetching — plus an integrated AI Writing Assistant to help users generate and refine blog content.",
    demoUrl:"https://app-vfar.onrender.com", // Replace with your actual demo URL
    githubUrl:"https://github.com/MarkMayouf/BlogApp/tree/main" // Optional: Add GitHub repo URL
  },
  {
    id: 3,
    title: "Recipes App",
    img: "./recipes.png",
    desc: "A modern interactive web app for exploring and saving your favorite meals. Built with HTML, CSS, and JavaScript, it fetches data from a meal API, allowing users to browse recipes, view details, and mark meals as favorites.",
    demoUrl:"https://recipe-application-five.vercel.app/", // Replace with your actual demo URL
    githubUrl:"https://github.com/MarkMayouf/Recipe_Application"
  },
  {
    id: 4,
    title: "Books store ",
    img: "BOOKS.png",
    desc: "A responsive landing page for a Book Store, built with HTML, CSS, and JavaScript. It features a clean, modern design with a user-friendly layout for showcasing books and engaging visitors",
    demoUrl:"https://book-store-html-css-js-ili9.vercel.app/", // Replace with your actual demo URL
    githubUrl:"https://github.com/MarkMayouf/Book_Store_HTML_CSS_JS/tree/main"
  },

];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttonContainer">
              <button 
                className="demoButton" 
                onClick={() => window.open(item.demoUrl, '_blank')}
              >
                See Demo
              </button>
              {item.githubUrl && (
                <button 
                  className="githubButton" 
                  onClick={() => window.open(item.githubUrl, '_blank')}
                >
                  View Code
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
