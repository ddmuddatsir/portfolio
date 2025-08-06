"use client";

import { motion } from "framer-motion";
import { format, parseISO } from "date-fns";
import { BlogPostHeaderProps } from "@/types/blog";

export default function BlogPostHeader({
  title,
  category,
  author,
  date,
  readTime,
}: BlogPostHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-10"
    >
      <div className="mb-4">
        <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
          {category}
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        {title}
      </h1>

      <div className="text-gray-400 flex flex-wrap gap-4 items-center text-sm">
        <div>
          By <span className="text-indigo-400">{author}</span>
        </div>
        <div>•</div>
        <div>{format(parseISO(date), "MMMM d, yyyy")}</div>
        <div>•</div>
        <div>{readTime} min read</div>
      </div>
    </motion.header>
  );
}
