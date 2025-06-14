import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ setOpen }) => {
  const items = [
    { name: "Homepage", href: "#Homepage" },
    { name: "Portfolio", href: "#Portfolio" },
    { name: "Contact", href: "#Contact" }
  ];

  const handleNavigation = (href) => {
    // Close sidebar
    if (setOpen) setOpen(false);
    
    // Get the target element
    const element = document.querySelector(href);
    if (element) {
      // Calculate offset for fixed navbar (navbar height + some padding)
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      // Smooth scroll to the calculated position
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div 
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '2rem',
        padding: '2rem'
      }}
      variants={variants}
    >
      <motion.div
        style={{
          marginBottom: '2rem',
          textAlign: 'left'
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#ff6500',
          marginBottom: '0.5rem',
          textShadow: '0 0 10px rgba(255, 101, 0, 0.3)'
        }}>
          Navigation
        </h2>
        <div style={{
          width: '60px',
          height: '3px',
          background: 'linear-gradient(90deg, #ff6500, #ff8c00)',
          borderRadius: '2px'
        }} />
      </motion.div>

      {items.map((item, index) => (
        <motion.button
          key={item.name}
          variants={itemVariants}
          whileHover={{ 
            scale: 1.05,
            x: 10,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleNavigation(item.href)}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            fontWeight: '600',
            color: 'white',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            padding: '1rem 1.5rem',
            borderRadius: '12px',
            width: '100%',
            textAlign: 'left',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#ff6500';
            e.target.style.background = 'rgba(255, 101, 0, 0.1)';
            e.target.style.boxShadow = '0 4px 15px rgba(255, 101, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = 'white';
            e.target.style.background = 'none';
            e.target.style.boxShadow = 'none';
          }}
        >
          <span style={{ position: 'relative', zIndex: 1 }}>
            {item.name}
          </span>
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

      <motion.div
        style={{
          marginTop: 'auto',
          padding: '1rem 0',
          borderTop: '1px solid rgba(255, 101, 0, 0.2)',
          width: '100%'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p style={{
          fontSize: '0.875rem',
          color: 'rgba(255, 255, 255, 0.6)',
          textAlign: 'center',
          margin: 0
        }}>
          Mark Mayouf Portfolio
        </p>
        <p style={{
          fontSize: '0.75rem',
          color: 'rgba(255, 101, 0, 0.8)',
          textAlign: 'center',
          margin: '0.5rem 0 0 0',
          fontWeight: '500'
        }}>
          © 2025
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Links;
