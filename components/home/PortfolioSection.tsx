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
      <h2 className="md:text-6xl lg:text-6xl text-5xl font-semibold text-center pb-2 mb-16">
        Portfolio
      </h2>
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
            <h3 className="md:text-3xl lg:text-3xl text-3xl font-semibold mb-6">
              {project.title}
            </h3>
            <p className="text-gray-400 md:text-md lg:text-md text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
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

            {/* Action Buttons or Status Label */}
            {project.title === "UG Bangunan Website Profil" ? (
              <div className="mt-2">
                <span className="inline-block px-5 py-2 rounded-lg bg-yellow-900/30 text-yellow-300 text-sm font-semibold border border-yellow-800/30">
                  Not finished yet
                </span>
              </div>
            ) : (
              <div className="flex flex-wrap gap-3">
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
    </section>
  );
}
