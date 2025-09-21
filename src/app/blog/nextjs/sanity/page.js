export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          How to Connect Sanity CMS with Next.js
        </h1>
        <p className="text-gray-500 mt-4">
          📅 September 21, 2025 • ✍️ Imtiaz Hussain
        </p>
      </header>

      {/* Content */}
      <article className="prose prose-lg prose-slate max-w-none">
        <p className="lead text-lg text-gray-700">
          In this tutorial, I’ll guide you step by step on how to connect{" "}
          <strong>Sanity CMS</strong> with a <strong>Next.js</strong> project.
          Sanity lets you manage blog content dynamically instead of hardcoding
          posts.
        </p>

        <h2 className="text-2xl font-bold text-blue-600">🚀 Step 1 – Install Sanity CLI</h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
          <code>npm install -g @sanity/cli</code>
        </pre>

        <h2 className="text-2xl font-bold text-blue-600">📂 Step 2 – Initialize Sanity Project</h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
          <code>npx sanity init --project</code>
        </pre>
        <p>Choose the <strong>blog schema starter</strong> when prompted.</p>

        <h2 className="text-2xl font-bold text-blue-600">📝 Step 3 – Define Blog Schema</h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
          <code>
{`// sanity/schemaTypes/post.js
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'author', type: 'string' },
    { name: 'excerpt', type: 'text' },
    { name: 'content', type: 'array', of: [{ type: 'block' }] },
  ],
}`}
          </code>
        </pre>

        <h2 className="text-2xl font-bold text-blue-600">📦 Step 4 – Install Sanity Client</h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
          <code>npm install next-sanity</code>
        </pre>

        <h2 className="text-2xl font-bold text-blue-600">⚡ Step 5 – Setup Sanity Client</h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
          <code>
{`// lib/sanity.js
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2025-09-21",
  useCdn: true,
});`}
          </code>
        </pre>

        <h2 className="text-2xl font-bold text-blue-600">🏡 Step 6 – Fetch Posts in Homepage</h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
          <code>
{`import { client } from "@/lib/sanity";

async function getPosts() {
  return await client.fetch(\`*[_type == "post"] | order(publishedAt desc){
    title, slug, excerpt, publishedAt, author
  }\`);
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">📌 Latest Posts</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <a
            key={post.slug.current}
            href={\`/blog/\${post.slug.current}\`}
            className="block border p-4 rounded-lg hover:shadow-lg hover:border-blue-500 transition"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-500 text-sm">
              {new Date(post.publishedAt).toDateString()} • By {post.author}
            </p>
            <p className="text-gray-700 mt-2">{post.excerpt}</p>
          </a>
        ))}
      </div>
    </div>
  );
}`}
          </code>
        </pre>

        <h2 className="text-2xl font-bold text-blue-600">🎉 Conclusion</h2>
        <p>
          That’s it! You’ve successfully connected <strong>Sanity CMS</strong>{" "}
          with <strong>Next.js</strong>. Now every time you publish a post in
          Sanity Studio, it appears instantly on your site. 🚀
        </p>
      </article>
    </div>
  );
}
