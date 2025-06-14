import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1500px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Backdrop overlay */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 35,
            backdropFilter: 'blur(5px)'
          }}
        />
      )}

      <motion.div 
        className={`sidebar ${open ? 'open' : ''}`}
        animate={open ? "open" : "closed"}
      >
        <motion.div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            width: '400px',
            maxWidth: '80vw',
            background: 'linear-gradient(135deg, rgba(12, 12, 29, 0.98), rgba(26, 26, 46, 0.95))',
            backdropFilter: 'blur(20px)',
            zIndex: 40,
            border: 'none',
            borderRight: '1px solid rgba(255, 101, 0, 0.2)',
            boxShadow: '0 0 50px rgba(0, 0, 0, 0.5)'
          }}
          variants={variants}
        >
          <Links setOpen={setOpen} />
        </motion.div>
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    </>
  );
};

export default Sidebar;
