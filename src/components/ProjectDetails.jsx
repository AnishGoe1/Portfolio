import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-hidden backdrop-blur-sm bg-black/50"
      onClick={closeModal}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()} 
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col border shadow-sm rounded-2xl bg-linear-to-l from-midnight to-navy border-white/10 overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute z-10 p-2 rounded-full top-5 right-5 bg-midnight/80 hover:bg-gray-500 transition-colors"
        >
          <img src="assets/close.svg" className="w-6 h-6" alt="close" />
        </button>

        <div className="overflow-y-auto custom-scrollbar">
          <img src={image} alt={title} className="w-full h-auto rounded-t-2xl" />
          
          <div className="p-6">
            <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
            <p className="mb-3 font-normal text-neutral-400">{description}</p>
            
            {subDescription?.map((subDesc, index) => (
              <p key={index} className="mb-3 font-normal text-neutral-400">
                • {subDesc}
              </p>
            ))}

            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <img
                    key={tag.id}
                    src={tag.path}
                    alt={tag.name}
                    className="rounded-lg size-10 hover-animation"
                  />
                ))}
              </div>
              
              <a 
                href={href} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-medium text-white cursor-pointer hover:underline"
              >
                View Project 
                <img src="assets/arrow-up.svg" className="size-4" alt="arrow" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;