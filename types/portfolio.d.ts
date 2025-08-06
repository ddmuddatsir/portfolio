export interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
}

interface ProjectCarouselProps {
  title: string;
  images?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  images?: string[];
  demoUrl?: string;
  sourceCodeUrl?: string;
  role: string;
  challenges: {
    problem: string;
    solution: string;
  }[];
  features: string[];
  status: "completed" | "in-progress" | "planned";
  category: "web" | "mobile" | "desktop" | "fullstack";
}

export interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}
