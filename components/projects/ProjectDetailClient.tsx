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
    completed: "text-green-300 bg-green-950/20 border-green-800/30",
    "in-progress": "text-yellow-300 bg-yellow-950/20 border-yellow-800/30",
    planned: "text-blue-300 bg-blue-950/20 border-blue-800/30",
  };

  const categoryColors = {
    web: "text-cyan-300 bg-cyan-950/20 border-cyan-800/30",
    mobile: "text-purple-300 bg-purple-950/20 border-purple-800/30",
    desktop: "text-orange-300 bg-orange-950/20 border-orange-800/30",
    fullstack: "text-pink-300 bg-pink-950/20 border-pink-800/30",
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="text-gray-600">/</li>
            <li>
              <Link
                href="/#portfolio"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                Portfolio
              </Link>
            </li>
            <li className="text-gray-600">/</li>
            <li className="text-gray-300 font-medium truncate max-w-[200px]">
              {project.title}
            </li>
          </ol>
        </nav>

        {/* Back Button */}
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 transition-colors mb-12 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Status and Category Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span
              className={`px-4 py-2 rounded-xl text-sm font-medium border ${
                statusColors[project.status]
              }`}
            >
              {project.status === "completed"
                ? "Completed"
                : project.status === "in-progress"
                ? "In Progress"
                : "Planned"}
            </span>
            <span
              className={`px-4 py-2 rounded-xl text-sm font-medium border ${
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

          {/* Title and Description */}
          <h1 className="md:text-6xl lg:text-6xl text-5xl font-semibold mb-6 text-gray-100">
            {project.title}
          </h1>

          <p className="md:text-lg lg:text-lg text-base text-gray-400 mb-12 max-w-4xl leading-relaxed">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-950/30 hover:bg-blue-900/40 border border-blue-800/30 hover:border-blue-700/50 text-blue-300 hover:text-blue-200 rounded-xl transition-all duration-300"
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/30 hover:bg-gray-700/40 border border-gray-700/30 hover:border-gray-600/50 text-gray-400 hover:text-gray-300 rounded-xl transition-all duration-300"
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
          className="mb-20"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gray-950/30 border border-gray-800/30 p-8">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={600}
              className="rounded-2xl object-cover w-full h-auto max-h-[600px]"
            />
          </div>
        </motion.div>

        {/* Project Details Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-200">
                Overview
              </h2>
              <p className="text-gray-400 leading-relaxed text-base">
                {project.longDescription}
              </p>
            </motion.div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-200 flex items-center gap-3">
                <User className="w-5 h-5 text-gray-400" />
                My Role
              </h3>
              <p className="text-gray-400">{project.role}</p>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-200">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-gray-800/30 hover:bg-gray-700/40 border border-gray-700/30 hover:border-gray-600/50 text-gray-300 rounded-lg text-sm transition-all duration-300"
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
              <h3 className="text-xl font-semibold mb-6 text-gray-200">
                Key Features
              </h3>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400 text-sm leading-relaxed">
                      {feature}
                    </span>
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
              <h3 className="text-xl font-semibold mb-6 text-gray-200">
                Challenges & Solutions
              </h3>
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="bg-gray-950/30 border border-gray-800/30 p-6 rounded-xl"
                  >
                    <h4 className="text-sm font-medium mb-3 text-red-300 uppercase tracking-wider">
                      Challenge
                    </h4>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {challenge.problem}
                    </p>
                    <h4 className="text-sm font-medium mb-3 text-green-300 uppercase tracking-wider">
                      Solution
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {challenge.solution}
                    </p>
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
            className="mb-20"
          >
            <h3 className="text-xl font-semibold mb-8 text-gray-200">
              Project Gallery
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl overflow-hidden bg-gray-950/30 border border-gray-800/30 p-4 aspect-video"
                >
                  <Image
                    src={image}
                    alt={`${project.title} screenshot ${index + 2}`}
                    fill
                    className="rounded-xl object-cover"
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
          className="text-center py-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-gray-700/50 hover:border-gray-600/50 text-gray-300 hover:text-white rounded-xl transition-all duration-300"
          >
            View More Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
