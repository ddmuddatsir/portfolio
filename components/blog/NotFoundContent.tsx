"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFoundContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        404 - Post Not Found
      </h1>
      <p className="text-xl text-gray-400 mb-8">
        The blog post you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Link
        href="/blog"
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-colors rounded-lg text-white font-medium"
      >
        Back to Blog
      </Link>
    </motion.div>
  );
}
