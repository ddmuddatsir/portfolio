"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight, Filter } from "lucide-react";
import { projects } from "@/data/projects";
import ImageLightbox from "@/components/portfolio/ImageLightbox";

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
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Koleksi project yang telah saya kerjakan, mulai dari web application
            hingga mobile app. Setiap project mencerminkan dedikasi saya dalam
            menciptakan solusi teknologi yang inovatif.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-300"
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-70">
                ({category.count})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects List - Centered Layout */}
        <div className="max-w-6xl mx-auto space-y-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              } items-center gap-8 p-8 bg-gray-900/30 backdrop-blur-sm rounded-3xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 group hover:bg-gray-900/50`}
            >
              {/* Project Images - Multiple Images Layout */}
              <div className="relative w-full lg:w-1/2">
                {project.images && project.images.length > 1 ? (
                  <div className="grid grid-cols-2 gap-3">
                    {/* Main large image */}
                    <div 
                      className="col-span-2 aspect-video overflow-hidden rounded-2xl relative group/img cursor-pointer"
                      onClick={() => openLightbox(project.images!, 0, project.title)}
                    >
                      <Image
                        src={project.images[0]}
                        alt={`${project.title} - Main`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 right-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${statusColors[project.status]}`}
                        >
                          {project.status === "completed"
                            ? "Completed"
                            : project.status === "in-progress"
                              ? "In Progress"
                              : "Planned"}
                        </span>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">Click to view gallery</span>
                      </div>
                    </div>
                    
                    {/* Secondary images */}
                    {project.images.slice(1, 3).map((image, imgIndex) => (
                      <div 
                        key={imgIndex} 
                        className="aspect-video overflow-hidden rounded-xl relative group/img cursor-pointer"
                        onClick={() => openLightbox(project.images!, imgIndex + 1, project.title)}
                      >
                        <Image
                          src={image}
                          alt={`${project.title} - ${imgIndex + 2}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay for additional images count */}
                        {imgIndex === 1 && project.images && project.images.length > 3 && (
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                            <span className="text-white font-semibold text-lg">
                              +{project.images.length - 3}
                            </span>
                          </div>
                        )}
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white text-sm font-medium">Click to view</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Fallback untuk project dengan 1 gambar
                  <div 
                    className="aspect-video overflow-hidden rounded-2xl relative cursor-pointer group/img"
                    onClick={() => openLightbox([project.image], 0, project.title)}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm ${statusColors[project.status]}`}
                      >
                        {project.status === "completed"
                          ? "Completed"
                          : project.status === "in-progress"
                            ? "In Progress"
                            : "Planned"}
                      </span>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">Click to view</span>
                    </div>
                  </div>
                )}
                
                {/* Overlay with quick actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 rounded-2xl">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all transform hover:scale-105"
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
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all transform hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Role */}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {project.role}
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gray-800/80 text-gray-300 rounded-lg text-sm font-medium border border-gray-700/50 hover:border-gray-600/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Main Action */}
                <div className="pt-4">
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all transform hover:scale-105 font-semibold text-lg group/btn"
                  >
                    View Project Details
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
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
