"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BlogListProps } from "@/types/blog";

export default function BlogList({ posts, categories }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <>
      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap gap-4 justify-center mb-12"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full transition-all ${
              selectedCategory === category
                ? "bg-indigo-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Blog Posts Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredPosts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-all cursor-pointer group"
          >
            <Link
              href={`/blog/${post.slug}`}
              prefetch={true}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                  <span>{getReadingTime(post.content)} min read</span>
                </div>

                <h2 className="text-xl font-semibold group-hover:text-indigo-400 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="text-xs text-gray-500">
                  {new Date(post.date).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>

      {/* No posts message */}
      {filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-gray-400 text-lg">
            No posts found in {selectedCategory} category.
          </p>
        </motion.div>
      )}
    </>
  );
}

// Helper function to calculate reading time
function getReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes}`;
}
