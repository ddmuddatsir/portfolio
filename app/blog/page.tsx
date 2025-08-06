import { getAllPosts, getAllCategories } from "@/lib/posts";
import BlogList from "@/components/blog/BlogList";
import BlogHeader from "@/components/blog/BlogHeader";

export default async function BlogPage() {
  // Fetch posts and categories
  const posts = await getAllPosts();
  const categories = await getAllCategories();

  return (
    <div className="min-h-screen text-white pt-32 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <BlogHeader />

        {/* Blog List Component (includes filtering and grid) */}
        <BlogList posts={posts} categories={categories} />
      </div>
    </div>
  );
}
