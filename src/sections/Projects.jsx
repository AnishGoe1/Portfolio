import { useState, useEffect } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  // 1. State to track if the screen is mobile-sized
  const [isMobile, setIsMobile] = useState(false);
  const [preview, setPreview] = useState(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Configuration for smooth trailing effect
  const springConfig = { damping: 15, stiffness: 100 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // 2. Effect to handle window resizing
  useEffect(() => {
    const checkMobile = () => {
      // 768px is the standard 'md' breakpoint in Tailwind
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    // 3. Optimization: Don't update motion values on mobile
    if (isMobile) return;

    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  return (
    <section 
      id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      
      <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent mt-12 h-px w-full" />

      {myProjects.map((project) => (
        <Project 
          key={project.id} 
          {...project}
          setPreview={setPreview}
        />
      ))}

      {/* 4. Conditional Rendering: Only show if preview exists AND NOT mobile */}
      {preview && !isMobile && (
        <motion.img 
          className="fixed top-0 left-0 z-50 object-cover h-45 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        />
      )}
    </section> 
  );
};

export default Projects;