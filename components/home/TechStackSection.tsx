"use client";

import { techStack } from "@/data/techStack";
import { motion } from "framer-motion";
import { memo, useMemo, useState, useEffect } from "react";

// Memoized tech item component
const TechItem = memo(({ tech }: { tech: (typeof techStack)[0] }) => (
  <div className="flex items-center gap-3 bg-gray-800/80 px-4 py-2 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:bg-gray-700/80 transition-colors duration-300 whitespace-nowrap">
    <tech.icon className={`text-xl ${tech.color}`} />
    <span className="text-sm font-medium">{tech.name}</span>
  </div>
));

TechItem.displayName = "TechItem";

const TechStackSection = memo(function TechStackSection() {
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  const [carouselEnabled, setCarouselEnabled] = useState(false);

  // Memoize the duplicated tech stack to prevent recreation
  const duplicatedTechStack = useMemo(() => [...techStack, ...techStack], []);

  useEffect(() => {
    // Enable basic animations first
    const animTimer = setTimeout(() => {
      setAnimationsEnabled(true);
    }, 100);

    // Enable carousel after everything else is loaded
    const carouselTimer = setTimeout(() => {
      setCarouselEnabled(true);
    }, 1000);

    return () => {
      clearTimeout(animTimer);
      clearTimeout(carouselTimer);
    };
  }, []);

  return (
    <section className="w-full mb-32 text-center">
      {/* Static header - no animation delay */}
      <motion.div
        className="mb-12"
        initial={false}
        animate={
          animationsEnabled ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
        }
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Tech Stack
          </span>
        </h2>
        <p className="text-gray-400">
          Technologies I use to build amazing experiences
        </p>
      </motion.div>

      {/* Progressive carousel loading */}
      <motion.div
        className="relative overflow-hidden w-full"
        initial={false}
        animate={
          animationsEnabled
            ? { opacity: 1, scale: 1 }
            : { opacity: 0.8, scale: 0.95 }
        }
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex gap-4 text-white"
          animate={carouselEnabled ? { x: ["0%", "-50%"] } : {}}
          transition={
            carouselEnabled
              ? {
                  repeat: Infinity,
                  duration: 80, // Very slow for performance
                  ease: "linear",
                  repeatType: "loop",
                }
              : {}
          }
          style={{
            display: "flex",
            minWidth: "200%",
            willChange: "transform", // Optimize for transform changes
            transform: "translateZ(0)", // Force GPU acceleration
          }}
        >
          {duplicatedTechStack.map((tech, index) => (
            <TechItem key={`${tech.name}-${index}`} tech={tech} />
          ))}
        </motion.div>

        {/* Gradient fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </motion.div>
    </section>
  );
});

export default TechStackSection;
