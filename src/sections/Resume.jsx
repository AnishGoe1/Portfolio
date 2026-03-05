import { useState } from "react";
import { motion } from "motion/react"; // 1. Added Framer Motion import
import resumeFile from "../constants/Resume.pdf";

const Resume = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    setIsDownloaded(true);
    setTimeout(() => setIsDownloaded(false), 3000);
  };

  return (
    // Added 'overflow-hidden' to contain the background glow
    <section id="resume" className="relative flex text-center items-center c-space section-spacing overflow-hidden via-neutral-700">
      
      {/* 2. ADDED: Floating Aura (Background Glow) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-purple-500/20 blur-[100px] rounded-full z-0" 
      />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Added a subtle fade-in animation to the text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Want to work with me? Download my <br />
            <span className="block text-lavender">Resume</span>
          </h2>

          <p className="mt-6 text-white-600 text-lg md:text-xl">
            Explore my Resume and see how we can work together!
          </p>
        </motion.div>

        {/* 3. ADDED: Magnetic/Interactive Button Animation */}
        <motion.div 
          className="mt-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href={resumeFile}
            download="Anish_Resume.pdf"
            onClick={handleDownload}
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 transition-all duration-300 text-lg font-medium
              ${isDownloaded 
                ? "border-purple-300 bg-purple-300/10 text-white" 
                : "border-white-100/20 hover:border-purple-300 text-white hover:bg-white-100/5"
              }`}
          >
            {/* Animated Download Icon */}
            <motion.svg 
              animate={isDownloaded ? { y: [0, 5, 0] } : { y: 0 }}
              transition={{ repeat: isDownloaded ? Infinity : 0, duration: 0.6 }}
              xmlns="http://www.w3.org/2000/svg" 
              width="20" height="20" 
              viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </motion.svg>

            {isDownloaded ? "Resume is Downloaded!" : "Download Resume"}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;