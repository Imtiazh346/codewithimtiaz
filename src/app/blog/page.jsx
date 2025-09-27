import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/urlFor";
import {
  allPostsQuery,
  latestPostsQuery,
  categoriesQuery,
} from "@/sanity/queries";

export default async function BlogPage() {
  const posts = await client.fetch(allPostsQuery);
  const latestPosts = await client.fetch(latestPostsQuery);
  const categories = await client.fetch(categoriesQuery);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* Main Content */}
          <section className="lg:col-span-2 space-y-12">
            <header className="text-center lg:text-left mb-8">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                Our Blog
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Discover insightful articles, tips, and updates from our journey
                in web development and beyond.
              </p>
            </header>

            {/* Blog Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {posts.map((post) => (
                <article
                  key={post._id}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col transform hover:-translate-y-2 border border-gray-100"
                >
                  {/* Post Image */}
                  {post.mainImage && (
                    <div className="relative h-52 sm:h-60 md:h-64 overflow-hidden">
                      <Image
                        src={urlFor(post.mainImage).width(800).height(400).url()}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  )}

                  {/* Post Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Categories and Date */}
                    <div className="flex items-center justify-between mb-3">
                      {post.categories && post.categories.length > 0 && post.categories[0]?.title && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {post.categories[0].title}
                        </span>
                      )}
                      <div className="text-xs text-gray-400">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold mb-3 leading-tight text-gray-800">
                      {post.slug?.current ? (
                        <Link
                          href={`/blog/${post.slug.current}`}
                          className="hover:text-blue-600 transition-colors duration-200 block"
                        >
                          {post.title}
                        </Link>
                      ) : (
                        <span>{post.title}</span>
                      )}
                    </h2>

                    {/* Author */}
                    {post.author && (
                      <p className="text-sm text-gray-500 mb-4">
                        By {post.author.name}
                      </p>
                    )}

                    {/* Read More */}
                    {post.slug?.current && (
                      <Link
                        href={`/blog/${post.slug.current}`}
                        className="mt-auto inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200"
                      >
                        Read More →
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* No Posts Fallback */}
            {posts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No posts available yet. Stay tuned!
                </p>
              </div>
            )}
          </section>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Latest Posts */}
            {latestPosts.length > 0 && (
              <div className="bg-white p-6 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-700">Latest Posts</h3>
                <ul className="space-y-3">
                  {latestPosts.map((post) =>
                    post.slug?.current ? (
                      <li key={post._id}>
                        <Link
                          href={`/blog/${post.slug.current}`}
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        >
                          {post.title}
                        </Link>
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            )}

            {/* Categories */}
            {categories.length > 0 && (
              <div className="bg-white p-6 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-700">Categories</h3>
                <ul className="space-y-2">
                  {categories
                    .filter((category) => category.slug?.current)
                    .map((category) => (
                      <li key={category._id}>
                        <Link
                          href={`/blog/category/${category.slug.current}`}
                          className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        >
                          {category.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
