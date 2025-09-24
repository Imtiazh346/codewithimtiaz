import { client } from "@/sanity/client";
import { categoryPostsQuery } from "@/sanity/queries";
import Link from "next/link";
import Image from "next/image";

export default async function CategoryPage({ params }) {
  const { slug } = params;
  const posts = await client.fetch(categoryPostsQuery, { slug });

  if (!posts || posts.length === 0) {
    return (
      <div className="max-w-6xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-4">No posts found in this category</h1>
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Category: {slug}</h1>
      <div className="grid gap-8 sm:grid-cols-2">
        {posts.map((post) => (
          <article key={post._id} className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
            {post.mainImage && (
              <Image
                src={post.mainImage.asset.url}
                alt={post.title}
                width={600}
                height={350}
                className="h-48 w-full object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">
                <Link href={`/blog/${post.slug.current}`} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
              <Link
                href={`/blog/${post.slug.current}`}
                className="text-blue-600 hover:underline"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
