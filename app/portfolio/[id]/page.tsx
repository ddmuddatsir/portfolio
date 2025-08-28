import { notFound } from "next/navigation";
import { getProjectById, projects } from "@/data/projects";
import ProjectDetailClient from "@/components/projects/ProjectDetailClient";
import type { ProjectDetailPageProps } from "@/types/portfolio";

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}

export async function generateStaticParams() {
  // Generate static paths for all projects
  return projects.map((project) => ({
    id: project.id,
  }));
}
