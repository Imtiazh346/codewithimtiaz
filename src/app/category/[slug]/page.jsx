import { client } from "@/sanity/client";
import { categoryPostsQuery, categoriesQuery } from "@/sanity/queries";
import Link from "next/link";
import Image from "next/image";

// Properly closed function
export async function generateStaticParams() {
  const categories = await client.fetch(categoriesQuery);

  return categories
    .filter(cat => cat.slug?.current)
    .map(cat => ({
      slug: cat.slug.current
    }));
}

export default async function CategoryPage({ params }) {
  const { slug } = params;
  const posts = await client.fetch(categoryPostsQuery, { slug });

  const formattedCategory = slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  if (!posts || posts.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent mb-6">
              No Posts Found
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
              Sorry, there are no posts in the "{formattedCategory}" category yet. Check back soon!
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-200"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {formattedCategory}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest insights and stories in the {formattedCategory.toLowerCase()} category. Dive into expert tips, trends, and more.
          </p>
        </header>

        {/* Post grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post._id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col transform hover:-translate-y-2 border border-gray-100"
            >
              {post.mainImage?.asset?.url && (
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
                  {post.categories?.length > 0 && post.categories[0]?.title && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {post.categories[0].title}
                    </span>
                  )}
                  <div className="text-xs text-gray-400">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-3 leading-tight">
                  {post.slug?.current ? (
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="text-gray-900 hover:text-blue-600 transition-colors duration-200 block"
                    >
                      {post.title}
                    </Link>
                  ) : (
                    <span>{post.title}</span>
                  )}
                </h2>

                {post.author?.name && (
                  <p className="text-sm text-gray-500 mb-4">
                    By {post.author.name}
                  </p>
                )}

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

        {/* Back to Blog link */}
        <div className="text-center mt-16">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-200"
          >
            ← View All Categories
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
