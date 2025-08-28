"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ImageLightbox from "@/components/portfolio/ImageLightbox";
import Lighting from "@/components/Lighting";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxTitle, setLightboxTitle] = useState("");

  const categories = [
    { id: "all", name: "Semua Project", count: projects.length },
    {
      id: "fullstack",
      name: "Full Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "web",
      name: "Web Development",
      count: projects.filter((p) => p.category === "web").length,
    },
    {
      id: "mobile",
      name: "Mobile",
      count: projects.filter((p) => p.category === "mobile").length,
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const statusColors = {
    completed: "text-green-400 bg-green-400/10",
    "in-progress": "text-yellow-400 bg-yellow-400/10",
    planned: "text-blue-400 bg-blue-400/10",
  };

  const openLightbox = (images: string[], index: number, title: string) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxTitle(title);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Lighting
        starCount={60}
        nebulaOpacity={0.1}
        starAnimRange={{ animY: [-2, 3], animX: [-1, 2] }}
      />

      <div className="relative md:px-24 py-20 min-h-screen text-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-8 text-center mb-16"
          >
            <h1 className="md:text-6xl lg:text-6xl text-5xl font-semibold text-center pb-2">
              Portfolio
            </h1>
            <p className="text-center md:text-md lg:text-md text-sm text-gray-400">
              Building impactful digital solutions
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-white/10 text-white border border-gray-600/50 shadow-lg"
                    : "bg-gray-900/30 hover:bg-gray-800/50 text-gray-400 hover:text-gray-300 border border-gray-800/30 hover:border-gray-700/50"
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-70">
                  ({category.count})
                </span>
              </button>
            ))}
          </motion.div>

          {/* Projects List - Clean Horizontal Layout */}
          <div className="max-w-7xl mx-auto space-y-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col md:flex-row items-stretch gap-6 p-6 bg-gray-950/30 backdrop-blur-sm rounded-2xl border border-gray-800/30 hover:border-gray-700/50 transition-all duration-300 group hover:bg-gray-900/20"
              >
                {/* Project Image - Left Side */}
                <div className="w-full md:w-2/5 lg:w-1/3">
                  <div
                    className="aspect-video overflow-hidden rounded-xl relative cursor-pointer group/img"
                    onClick={() =>
                      openLightbox(
                        project.images ? project.images : [project.image],
                        0,
                        project.title
                      )
                    }
                  >
                    <Image
                      src={project.images ? project.images[0] : project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />

                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md ${
                          statusColors[project.status]
                        }`}
                      >
                        {project.status === "completed"
                          ? "Completed"
                          : project.status === "in-progress"
                          ? "In Progress"
                          : "Planned"}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        Click to view
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Content - Right Side */}
                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-4">
                    {/* Title and Description */}
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-200 group-hover:text-white transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-base leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Role */}
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span className="text-sm text-gray-500">
                        {project.role}
                      </span>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Tech
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 6).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded-md text-xs font-medium border border-gray-700/30 hover:border-gray-600/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 6 && (
                          <span className="px-2 py-1 text-gray-500 text-xs">
                            +{project.technologies.length - 6} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  {project.title === "UG Bangunan Website Profil" ? (
                    <div className="mt-2">
                      <span className="inline-block px-5 py-2 rounded-lg bg-yellow-900/30 text-yellow-300 text-sm font-semibold border border-yellow-800/30">
                        Not finished yet
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <Link
                        href={`/portfolio/${project.id}`}
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-gray-700/50 hover:border-gray-600/50 text-gray-300 hover:text-white rounded-lg text-sm font-medium transition-all duration-300"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-950/30 hover:bg-blue-900/40 border border-blue-800/30 hover:border-blue-700/50 text-blue-300 hover:text-blue-200 rounded-lg text-sm font-medium transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      )}

                      {project.sourceCodeUrl && (
                        <a
                          href={project.sourceCodeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-800/30 hover:bg-gray-700/40 border border-gray-700/30 hover:border-gray-600/50 text-gray-400 hover:text-gray-300 rounded-lg text-sm font-medium transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-400 text-lg">
                Tidak ada project dalam kategori ini.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        projectTitle={lightboxTitle}
      />
    </div>
  );
}
