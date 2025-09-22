import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/client";   
import { allPostsQuery } from "@/sanity/queries";  

export default async function BlogPage() {
  const posts = await client.fetch(allPostsQuery);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post._id} className="border-b pb-4">
            {post.mainImage && (
              <Image
                src={post.mainImage.asset.url}
                alt={post.title}
                width={800}
                height={400}
                className="mb-4 rounded"
              />
            )}
            <h2 className="text-2xl font-semibold">
              <Link href={`/blog/${post.slug.current}`}>
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              By {post.author?.name} |{" "}
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <Link
              href={`/blog/${post.slug.current}`}
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
