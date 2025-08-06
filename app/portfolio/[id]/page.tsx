import { notFound } from "next/navigation";
import { getProjectById } from "@/data/projects";
import ProjectDetailClient from "@/components/projects/ProjectDetailClient";
import { ProjectDetailPageProps } from "@/types/portfolio";

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}

export async function generateStaticParams() {
  // This will generate static paths for all projects
  const projects = await import("@/data/projects").then((m) => m.projects);
  return projects.map((project) => ({
    id: project.id,
  }));
}
