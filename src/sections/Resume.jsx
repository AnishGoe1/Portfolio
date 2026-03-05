import { useState, useRef } from "react";
import { motion } from "motion/react";
import resumeFile from "../constants/Resume.pdf";

const Resume = () => {
  const [isDownloaded, setIsDownloaded] = useState(false);
  const timeoutRef = useRef(null); // Ref to manage timer safely

  const handleDownload = () => {
    // 1. Clear any existing timer to prevent memory collisions
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setIsDownloaded(true);

    // 2. Use a slightly longer delay for mobile stability
    timeoutRef.current = setTimeout(() => {
      setIsDownloaded(false);
    }, 4000);
  };

  return (
    <section id="resume" className="relative flex text-center items-center justify-center min-h-[40vh] bg-black overflow-hidden py-20 px-5">
      
      {/* 3. MOBILE OPTIMIZATION: Lower blur radius. 
          Extremely high blur values (150px+) can crash mobile GPUs */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-62.5 h-62.5 bg-purple-600/10 blur-[80px] rounded-full z-0 pointer-events-none" 
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Want to work with me? Download my <br />
            <span className="text-purple-300">Resume</span>
          </h2>
        </motion.div>

        <div className="mt-12">
          <a
            href={resumeFile}
            download="Anish_Resume.pdf"
            onClick={handleDownload}
            style={{ touchAction: 'manipulation' }}
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 transition-all duration-300 text-lg font-medium
              ${isDownloaded 
                ? "border-purple-300 bg-purple-300/10 text-white" 
                : "border-white/10 text-white active:bg-white/5"
              }`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" height="20" 
              viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>

            {isDownloaded ? "Resume is Downloaded!" : "Download Resume"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;