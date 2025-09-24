import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "@/sanity/PortableTextComponents";

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    mainImage{
      asset->{url}
    },
    author->{name},
    publishedAt,
    body
  }
`;

export default async function BlogPost({ params }) {
  const { slug } = params;
  const post = await client.fetch(postQuery, { slug });

  if (!post) return <div>Post not found</div>;

  return (
    <article className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 p-6 prose prose-lg">
      {post.mainImage?.asset?.url && (
        <img
          src={post.mainImage.asset.url}
          alt={post.title}
          className="rounded mb-8"
        />
      )}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <p className="text-gray-500 text-sm mb-6">
        By {post.author?.name} |{" "}
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      {/* FIX: Pass components */}
      <PortableText value={post.body} components={PortableTextComponents} />
    </article>
  );
}
