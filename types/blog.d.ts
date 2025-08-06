import { Post } from "@/lib/posts";
import { ReactNode } from "react";

interface BlogListProps {
  posts: Post[];
  categories: string[];
}

interface BlogPostContentProps {
  children: ReactNode;
}

interface BlogPostHeaderProps {
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
}
