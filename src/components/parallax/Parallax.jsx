import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 
        style={{ 
          y: yText,
          fontSize: 'clamp(3rem, 8vw, 12rem)',
          fontWeight: 'bold',
          color: 'white',
          zIndex: 10,
          textAlign: 'center'
        }}
      >
        {type === "portfolio" ? "Portfolio" :""}
      </motion.h1>
      
      <motion.div 
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url(/mountains.png)",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '100%',
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <motion.div 
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '100%',
          x: yBg,
          backgroundImage: "url(/stars.png)",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </div>
  );
};

export default Parallax;
