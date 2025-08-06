import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compareDesc, parseISO } from "date-fns";
import { Post } from "@/types/post";

const postsDirectory = path.join(process.cwd(), "content/blog");

/**
 * Get all blog posts with their metadata
 */
export async function getAllPosts(): Promise<Post[]> {
  // Get filenames under /content/blog
  const filenames = fs.readdirSync(postsDirectory);

  const allPostsData = filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => {
      // Remove ".mdx" from filename to get slug
      const slug = filename.replace(/\.mdx$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        title: data.title,
        date: data.date,
        category: data.category,
        author: data.author,
        excerpt: data.excerpt,
        content,
      } as Post;
    });

  // Sort posts by date in descending order (newest first)
  return allPostsData.sort((a, b) =>
    compareDesc(parseISO(a.date), parseISO(b.date))
  );
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Parse markdown file
    const { data, content } = matter(fileContents);

    // Return post data
    return {
      slug,
      title: data.title,
      date: data.date,
      category: data.category,
      author: data.author,
      excerpt: data.excerpt,
      content,
    } as Post;
  } catch (error) {
    console.error(`Error reading post with slug: ${slug}`, error);
    return null;
  }
}

/**
 * Get all unique categories from blog posts
 */
export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  const categories = new Set<string>();

  // Add "All" category as the first option
  categories.add("All");

  // Add categories from all posts
  posts.forEach((post) => {
    if (post.category) {
      categories.add(post.category);
    }
  });

  return Array.from(categories);
}
