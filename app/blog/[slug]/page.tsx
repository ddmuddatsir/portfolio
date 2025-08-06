import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogPostContent from "@/components/blog/BlogPostContent";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const readTime = Math.ceil(post.content.split(/\s+/).length / 200);

  return (
    <div className="min-h-screen text-white pt-32 px-4 md:px-8 lg:px-16">
      <article className="max-w-3xl mx-auto">
        <BlogPostHeader
          title={post.title}
          category={post.category}
          author={post.author}
          date={post.date}
          readTime={readTime}
        />

        <BlogPostContent>
          <MDXRemote source={post.content} />
        </BlogPostContent>
      </article>
    </div>
  );
}
