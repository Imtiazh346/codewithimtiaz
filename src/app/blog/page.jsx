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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main content */}
          <section className="lg:col-span-2 space-y-12">
            <header className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-600 bg-clip-text mb-4">
                Blog Posts
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Discover insightful articles, tips, and updates from our journey
                in web development and beyond.
              </p>
            </header>

            {/* Post grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {posts.map((post) => (
                <article
                  key={post._id}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col transform hover:-translate-y-2 border border-gray-100"
                >
                  {post.mainImage && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.mainImage.asset.url}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      {post.categories && post.categories.length > 0 && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {post.categories[0].title}
                        </span>
                      )}
                      <div className="text-xs text-gray-400">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                    </div>

                    <h2 className="text-xl font-bold mb-3 leading-tight">
                      <Link
                        href={`/blog/${post.slug.current}`}
                        className="text-gray-900 hover:text-blue-600 transition-colors duration-200 block"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    {post.author && (
                      <p className="text-sm text-gray-500 mb-4">
                        By {post.author.name}
                      </p>
                    )}

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
                  </div>
                </article>
              ))}
            </div>

            {posts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No posts available yet. Stay tuned!
                </p>
              </div>
            )}
          </section>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8 self-start sticky top-8">
            {/* Categories */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 overflow-hidden relative">
              {/* Soft gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-purple-50/40 -z-10"></div>

              {/* Heading */}
              <h2 className="text-2xl font-extrabold mb-5 text-gray-900 relative z-10 border-b border-blue-100/50 pb-3 flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
                Categories
              </h2>

              {/* Category List */}
              <ul className="space-y-3 relative z-10">
                {categories.map((cat) => (
                  <li key={cat._id} className="group">
                    {cat.slug?.current ? (
                      <Link
                        href={`/category/${cat.slug.current}`}
                        className="flex items-center justify-between text-gray-700 hover:text-blue-700 font-medium transition-all duration-300 py-2 px-3 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-lg transform hover:scale-[1.02]"
                      >
                        <span className="truncate">{cat.title}</span>
                        <svg
                          className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ml-2 text-blue-600"
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
                    ) : (
                      <span className="text-gray-400 block py-2 px-3 font-medium">
                        {cat.title}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest posts */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 overflow-hidden relative">
              {/* Soft gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/40 to-indigo-50/40 -z-10"></div>

              {/* Heading */}
              <h2 className="text-2xl font-extrabold mb-6 text-gray-900 relative z-10 border-b border-purple-100/50 pb-3 flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Latest Posts
              </h2>

              {/* Posts List */}
              <ul className="space-y-5 relative z-10">
                {latestPosts.map((post) => (
                  <li key={post._id} className="group">
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="block p-3 rounded-2xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-purple-200"
                    >
                      <h3 className="font-semibold text-gray-800 group-hover:text-purple-700 transition-colors text-base leading-snug mb-1 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs text-gray-500 tracking-wide">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
