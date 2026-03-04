import {FlipWords} from "./FlipWords";
import {motion} from "motion/react";

const HeroText = () => {
  const words=["Robust", "Adaptive", "Integrated", "Real-time", "Precise"];
  const variants = {
    hidden: {opacity:0, x:-50},
    visible: {opacity:1, x:0},
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 
    md:text-left rounded-3xl bg-clip-text">
        {/* DesktopView */}
        <div className="flex-col hidden md:flex c-space">
            <motion.h1 
                className="text-4xl font-medium"
                variants={variants}
                initial = "hidden"
                animate = "visible"
                transition = {{delay:1}}
            >
                Hi, I'm Anish
            </motion.h1>
            <div className="flex flex-col items-start">
                <motion.p 
                    className="text-5xl font-medium text-neutral-300"
                    variants={variants}
                    initial = "hidden"
                    animate = "visible"
                    transition = {{delay:1.2}}
                >
                    An Engineer <br />Dedicated to Crafting
                </motion.p>
                <motion.div
                    variants={variants}
                    initial = "hidden"
                    animate = "visible"
                    transition = {{delay:1.5}}
                >
                    <FlipWords 
                    words={words}
                    className="font-black text-white text-8xl"
                    />
                </motion.div>
                <motion.p 
                    className="text-4xl font-medium text-neutral-300"
                    variants={variants}
                    initial = "hidden"
                    animate = "visible"
                    transition = {{delay:1.8}}
                >
                    Robotic Systems
                </motion.p>
            </div>
        </div>
        {/* MobileView */}
        <div className="flex flex-col items-center justify-center space-y-6 md:hidden text-center w-full px-4">
            {/* Greeting */}
            <motion.p 
                className="text-4xl font-medium"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1 }}
            >
                Hi, I'm Anish
            </motion.p>

            {/* Main Heading Stack */}
            <div className="flex flex-col items-center justify-center w-full">
                <motion.p 
                    className="text-5xl font-black text-neutral-300 w-full"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.2 }}
                >
                    Building
                </motion.p>

                {/* This wrapper forces the inline-block FlipWords to the center */}
                <motion.div
                    className="flex justify-center items-center w-full my-2"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.5 }}
                >
                    <FlipWords 
                        words={words}
                        // We add text-center here and handle the PC view in FlipWords.tsx
                        className="font-bold text-white text-6xl sm:text-7xl text-center" 
                    />
                </motion.div>

                <motion.p 
                    className="text-4xl font-black text-neutral-300 w-full"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.8 }}
                >
                    Robotic Systems
                </motion.p>
            </div>
        </div>
    </div>
  );
};

export default HeroText