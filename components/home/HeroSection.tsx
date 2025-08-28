import { memo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface HeroSectionProps {
  onScrollToPortfolio: () => void;
}

const HeroSection = memo(function HeroSection({
  onScrollToPortfolio,
}: HeroSectionProps) {
  const [animationsReady, setAnimationsReady] = useState(false);

  useEffect(() => {
    // Start animations after component mounts
    const timer = setTimeout(() => {
      setAnimationsReady(true);
    }, 50); // Very quick start

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="my-48 text-left">
      {/* Static content first, then animate */}
      <motion.h1
        className="md:text-8xl lg:text-8xl text-4xl font-extrabold bg-gradient-to-r text-white text-transparent bg-clip-text drop-shadow-lg"
        initial={false} // No initial animation delay
        animate={animationsReady ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Here`s Muddatsir
      </motion.h1>

      <motion.p
        className="text-gray-white mt-6 max-w-3xl md:text-md lg:text-md text-sm leading-relaxed"
        initial={false}
        animate={
          animationsReady ? { opacity: 1, y: 0 } : { opacity: 0.9, y: 0 }
        }
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        Developing fast and adaptable digital solutions with a focus on modern,
        flexible technologies such as React, Next.js, and TypeScript. I am
        dedicated to delivering responsive, high-performance applications and
        ensuring superior user experiences. My multidisciplinary background
        allows me to approach every project with innovation and agility,
        resulting in impactful and future-ready outcomes.
      </motion.p>

      {/* CTA Button */}
      <motion.button
        onClick={onScrollToPortfolio}
        className="mt-6 md:px-6 px-3 py-2 md:py-3 bg-indigo-700 rounded-lg text-white md:text-lg text-sm font-semibold shadow-md hover:bg-indigo-900 transition-all"
        initial={false}
        animate={
          animationsReady ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 0 }
        }
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        See Portfolio
      </motion.button>

      {/* Social Icons */}
      <motion.div
        className="flex md:gap-6 gap-3 mt-6 md:text-3xl text-xl md:justify-start"
        initial={false}
        animate={
          animationsReady ? { opacity: 1, y: 0 } : { opacity: 0.7, y: 0 }
        }
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <a href="#" className="text-gray-400 hover:text-white transition-all">
          <FaGithub />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-all">
          <FaLinkedin />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-all">
          <FaTwitter />
        </a>
      </motion.div>
    </div>
  );
});

export default HeroSection;
