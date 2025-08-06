"use client";

import { motion } from "framer-motion";

export default function BlogHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog</h1>
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
        Thoughts, tutorials, and insights about web development, technology, and
        more.
      </p>
    </motion.div>
  );
}
