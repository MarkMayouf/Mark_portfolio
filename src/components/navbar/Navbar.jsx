import { useState, useEffect, useRef } from "react";
import Sidebar from "../sidebar/Sidebar";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const dropdownItems = [
    { name: "Homepage", href: "#Homepage" },
    { name: "Portfolio", href: "#Portfolio" },
    { name: "Contact", href: "#Contact" }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleNavigation = (href, itemName) => {
    console.log(`🚀 Navigating to: ${itemName} (${href})`);
    
    // Close dropdown menu
    setIsDropdownOpen(false);
    
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      // Special handling for Portfolio to target actual content
      let targetSelector = href;
      if (href === '#Portfolio') {
        targetSelector = '#portfolio-content';
        console.log(`🎯 Using special selector for Portfolio: ${targetSelector}`);
      }
      
      // Find the target element
      const element = document.querySelector(targetSelector);
      console.log(`🔍 Target element found:`, element);
      
      if (element) {
        // Try multiple scrolling methods for better compatibility
        
        // Method 1: Modern scrollIntoView (recommended)
        try {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
          console.log(`✅ Method 1: scrollIntoView successful for ${itemName}`);
          return;
        } catch (error) {
          console.warn(`⚠️ Method 1 failed:`, error);
        }
        
        // Method 2: Window scrollTo with offset
        try {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;

          console.log(`📍 Element position: ${elementPosition}, Offset position: ${offsetPosition}`);

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          console.log(`✅ Method 2: window.scrollTo successful for ${itemName}`);
          return;
        } catch (error) {
          console.warn(`⚠️ Method 2 failed:`, error);
        }
        
        // Method 3: Fallback - instant scroll
        try {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;
          
          window.scrollTo(0, offsetPosition);
          console.log(`✅ Method 3: Fallback scroll successful for ${itemName}`);
        } catch (error) {
          console.error(`❌ All methods failed:`, error);
        }
        
      } else {
        console.error(`❌ Element with selector ${targetSelector} not found`);
        console.log(`🔍 Available elements with IDs:`, document.querySelectorAll('[id]'));
        
        // Fallback: try scrolling to top if it's Homepage
        if (href === '#Homepage') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          console.log('🏠 Fallback: Scrolled to top for Homepage');
        }
      }
    }, 100);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div ref={dropdownRef} style={{ position: 'relative' }}>
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            style={{
              background: 'linear-gradient(135deg, rgba(255, 101, 0, 0.1), rgba(255, 140, 0, 0.1))',
              border: '2px solid #ff6500',
              color: '#ff6500',
              padding: '0.75rem 1.25rem',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 15px rgba(255, 101, 0, 0.2)',
              minWidth: '140px',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #ff6500, #ff8c00)';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(255, 101, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(135deg, rgba(255, 101, 0, 0.1), rgba(255, 140, 0, 0.1))';
              e.target.style.color = '#ff6500';
              e.target.style.transform = 'translateY(0px)';
              e.target.style.boxShadow = '0 4px 15px rgba(255, 101, 0, 0.2)';
            }}
          >
            <span style={{ fontSize: '1rem', fontWeight: '700' }}>Mark</span>
            <motion.span 
              style={{ 
                fontSize: '0.75rem',
                transition: 'transform 0.3s ease',
                fontWeight: 'bold'
              }}
              animate={{ 
                rotate: isDropdownOpen ? 180 : 0 
              }}
            >
              ▼
            </motion.span>
          </motion.button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginTop: '0.75rem',
                  background: 'linear-gradient(135deg, rgba(12, 12, 29, 0.98), rgba(26, 26, 46, 0.95))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 101, 0, 0.3)',
                  borderRadius: '16px',
                  padding: '1rem 0',
                  minWidth: '220px',
                  zIndex: 1000,
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4), 0 5px 15px rgba(255, 101, 0, 0.1)'
                }}
              >
                {/* Header */}
                <motion.div
                  style={{
                    padding: '0 1.5rem 1rem',
                    borderBottom: '1px solid rgba(255, 101, 0, 0.2)',
                    marginBottom: '0.5rem'
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#ff6500',
                    margin: 0,
                    textAlign: 'center',
                    textShadow: '0 0 10px rgba(255, 101, 0, 0.3)'
                  }}>
                    Mark's Portfolio
                  </h3>
                </motion.div>

                {/* Navigation Items */}
                {dropdownItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '1rem 1.5rem',
                      color: 'white',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      fontSize: '1rem',
                      fontWeight: '500',
                      transition: 'all 0.3s ease',
                      borderRadius: '0',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, rgba(255, 101, 0, 0.15), rgba(255, 140, 0, 0.15))';
                      e.target.style.color = '#ff6500';
                      e.target.style.transform = 'translateX(8px)';
                      e.target.style.boxShadow = 'inset 4px 0 0 #ff6500';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateX(0px)';
                      e.target.style.boxShadow = 'none';
                    }}
                    onMouseDown={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, rgba(255, 101, 0, 0.3), rgba(255, 140, 0, 0.3))';
                      e.target.style.transform = 'translateX(4px) scale(0.98)';
                    }}
                    onMouseUp={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, rgba(255, 101, 0, 0.15), rgba(255, 140, 0, 0.15))';
                      e.target.style.transform = 'translateX(8px) scale(1)';
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log(`🎯 Button clicked for ${item.name}`);
                      handleNavigation(item.href, item.name);
                    }}
                  >
                    <span style={{ position: 'relative', zIndex: 1 }}>
                      {item.name}
                    </span>
                    
                    {/* Hover effect overlay */}
                    <motion.div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(255, 101, 0, 0.1), transparent)',
                        zIndex: 0
                      }}
                      whileHover={{
                        left: '100%',
                        transition: { duration: 0.5 }
                      }}
                    />
                  </motion.button>
                ))}

                {/* Footer */}
                <motion.div
                  style={{
                    padding: '1rem 1.5rem 0.5rem',
                    borderTop: '1px solid rgba(255, 101, 0, 0.2)',
                    marginTop: '0.5rem'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <p style={{
                    fontSize: '0.75rem',
                    color: 'rgba(255, 255, 255, 0.6)',
                    textAlign: 'center',
                    margin: 0
                  }}>
                    Mark Mayouf Portfolio © 2025
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <Sidebar/>
      </div>
    </nav>
  );
};

export default Navbar;