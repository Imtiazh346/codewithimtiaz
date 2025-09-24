import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/client";
import {
  allPostsQuery,
  latestPostsQuery,
  categoriesQuery,
} from "@/sanity/queries";

export default async function BlogPage() {
  // Fetch data
  const posts = await client.fetch(allPostsQuery);
  const latestPosts = await client.fetch(latestPostsQuery);
  const categories = await client.fetch(categoriesQuery);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-10">
      {/* Main content */}
      <section className="lg:col-span-3 space-y-10">
        <h1 className="text-4xl font-extrabold mb-6">Blog Posts</h1>

        {/* Post grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post._id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              {post.mainImage && (
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  width={600}
                  height={350}
                  className="h-48 w-full object-cover"
                />
              )}

              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-bold mb-2">
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="hover:text-blue-600"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="text-sm text-gray-500 mb-4">
                  By {post.author?.name || "Unknown"} •{" "}
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>

                <Link
                  href={`/blog/${post.slug.current}`}
                  className="mt-auto text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Sidebar */}
      <aside className="space-y-10">
        {/* Categories */}
        {/* Categories */}
        <div className="bg-purple-100  rounded-xl p-6 shadow">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            Categories
          </h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat._id}>
                {cat.slug?.current ? (
                  <Link
                    href={`/category/${cat.slug.current}`}
                    className="text-gray-700 hover:text-blue-600"
                  >
                    {cat.title}
                  </Link>
                ) : (
                  <span className="text-gray-500">{cat.title}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Latest posts */}
        <div className="bg-purple-100  rounded-xl p-6 shadow">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
            Latest Posts
          </h2>
          <ul className="space-y-4">
            {latestPosts.map((post) => (
              <li key={post._id} className="flex items-start space-x-3">
                {post.mainImage && (
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    width={60}
                    height={60}
                    className="rounded object-cover"
                  />
                )}
                <div>
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="font-medium text-gray-800 hover:text-blue-600"
                  >
                    {post.title}
                  </Link>
                  <p className="text-xs text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
