import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import ProjectCarousel from "../ProjectCarousel";
import { projects as projectsData } from "@/data/projects";

export default function PortfolioSection() {
  const projects = projectsData.slice(0, 4); // Tampilkan 4 project pertama

  const renderProjectImage = (
    project: (typeof projectsData)[0],
    index: number
  ) => {
    if (project.title === "PenjualinCRM Website") {
      return <ProjectCarousel title={project.title} />;
    } else if (project.title === "E-Commerce Marketin") {
      return <ProjectCarousel title={project.title} images={project.images} />;
    } else if (project.title === "Catetin Mobile First App") {
      return (
        <div className="w-[165px] md:w-[220px] mx-auto">
          {" "}
          {/* 25% smaller on mobile: 220 * 0.75 = 165 */}
          <Image
            src={project.image}
            alt={project.title}
            width={220}
            height={180}
            priority={index === 0}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            className="bg-white object-cover rounded-xl w-full h-auto"
          />
        </div>
      );
    } else if (project.title === "UG Bangunan Website Profil") {
      return (
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={400}
          priority={index === 1}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          className="bg-white object-cover rounded-xl mx-auto"
        />
      );
    } else {
      return (
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={300}
          className="bg-white object-cover rounded-xl mx-auto"
        />
      );
    }
  };

  return (
    <section id="portfolio" className="w-full mb-24">
      <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`flex flex-col md:flex-row md:mb-20 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } items-center gap-10 p-5 mb-12 rounded-2xl shadow-lg transition-all hover:shadow-2xl`}
        >
          {renderProjectImage(project, index)}

          <div className="flex-1">
            <h3 className="md:text-3xl text-2xl font-semibold mb-6">
              {project.title}
            </h3>
            <p className="text-gray-400 md:text-lg text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-6">
              {project.technologies.slice(0, 6).map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-indigo-500 text-white px-4 py-2 md:text-md text-xs rounded-full shadow-md"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 6 && (
                <span className="text-gray-400 px-4 py-2 md:text-md text-xs">
                  +{project.technologies.length - 6} more
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/portfolio/${project.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all transform hover:scale-105"
              >
                View Details
                <ArrowRight className="w-4 h-4" />
              </Link>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all"
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
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
