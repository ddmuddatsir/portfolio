"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  User,
  CheckCircle,
} from "lucide-react";
import { Project } from "@/types/portfolio";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({
  project,
}: ProjectDetailClientProps) {
  const statusColors = {
    completed: "text-green-400 bg-green-400/10",
    "in-progress": "text-yellow-400 bg-yellow-400/10",
    planned: "text-blue-400 bg-blue-400/10",
  };

  const categoryColors = {
    web: "text-cyan-400 bg-cyan-400/10",
    mobile: "text-purple-400 bg-purple-400/10",
    desktop: "text-orange-400 bg-orange-400/10",
    fullstack: "text-pink-400 bg-pink-400/10",
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Portfolio
        </Link>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                statusColors[project.status]
              }`}
            >
              {project.status === "completed"
                ? "Selesai"
                : project.status === "in-progress"
                ? "Dalam Pengerjaan"
                : "Direncanakan"}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                categoryColors[project.category]
              }`}
            >
              {project.category === "fullstack"
                ? "Full Stack"
                : project.category === "web"
                ? "Web Development"
                : project.category === "mobile"
                ? "Mobile Development"
                : "Desktop Development"}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            {project.title}
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-3xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.sourceCodeUrl && (
              <a
                href={project.sourceCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            )}
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden bg-gray-900 p-4 md:p-8 flex justify-center">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={500}
              className="rounded-xl object-contain max-w-full max-h-[500px] w-auto h-auto"
            />
          </div>
        </motion.div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                {project.longDescription}
              </p>
            </motion.div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                My Role
              </h3>
              <p className="text-gray-300">{project.role}</p>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Challenges & Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className="text-2xl font-bold mb-6">
                Challenges & Solutions
              </h3>
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="bg-gray-900/50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-3 text-red-400">
                      Challenge:
                    </h4>
                    <p className="text-gray-300 mb-4">{challenge.problem}</p>
                    <h4 className="text-lg font-semibold mb-3 text-green-400">
                      Solution:
                    </h4>
                    <p className="text-gray-300">{challenge.solution}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Additional Images */}
        {project.images && project.images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-6">Project Screenshots</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative rounded-xl overflow-hidden bg-gray-900 p-4 flex justify-center items-center min-h-[200px]"
                >
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 2}`}
                    width={400}
                    height={300}
                    className="rounded-lg object-contain max-w-full max-h-[250px] w-auto h-auto"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Back to Portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center py-16"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all transform hover:scale-105"
          >
            View More Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
