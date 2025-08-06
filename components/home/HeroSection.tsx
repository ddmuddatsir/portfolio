import { memo } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface HeroSectionProps {
  onScrollToPortfolio: () => void;
}

const HeroSection = memo(function HeroSection({
  onScrollToPortfolio,
}: HeroSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }} // Reduced from 0.8
      className="my-48 text-left"
    >
      <h1 className="md:text-8xl lg:text-8xl text-4xl font-extrabold bg-gradient-to-r text-white text-transparent bg-clip-text drop-shadow-lg">
        Here`s Muddatsir
      </h1>
      <p className="text-gray-white mt-6 max-w-3xl md:text-md lg:text-md text-sm leading-relaxed">
        Building Fast, Scalable Digital Experiences & Enthusiastic about React,
        Next.js, and TypeScript, I create responsive and high-performance
        applications. With a background in Business Management and have skill in
        multimedia, I bring a unique touch to design and user experience.
      </p>

      {/* CTA Button */}
      <button
        onClick={onScrollToPortfolio}
        className="mt-6 md:px-6 px-3 py-2 md:py-3 bg-indigo-700 rounded-lg text-white md:text-lg text-sm font-semibold shadow-md hover:bg-indigo-900 transition-all"
      >
        Lihat Portofolio
      </button>

      {/* Social Icons */}
      <div className="flex md:gap-6 gap-3 mt-6 md:text-3xl text-xl md:justify-start">
        <a href="#" className="text-gray-400 hover:text-white transition-all">
          <FaGithub />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-all">
          <FaLinkedin />
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-all">
          <FaTwitter />
        </a>
      </div>
    </motion.div>
  );
});

export default HeroSection;
