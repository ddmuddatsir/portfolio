"use client";

import { BlogPostContentProps } from "@/types/blog";
import { motion } from "framer-motion";

export default function BlogPostContent({ children }: BlogPostContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="prose prose-lg prose-invert max-w-none"
    >
      {children}
    </motion.div>
  );
}
