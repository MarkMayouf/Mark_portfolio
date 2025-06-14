import Test from "./Test";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
 
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
      <footer style={{
        background: '#1a1a2e',
        padding: '1.25rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(255, 165, 0, 0.2)'
      }}>
        <p style={{
          margin: 0,
          fontSize: '0.875rem',
          color: '#ff6500',
          fontWeight: 300
        }}>Mark©2025</p>
      </footer>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
