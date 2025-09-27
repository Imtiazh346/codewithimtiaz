import Image from "next/image";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "@/sanity/PortableTextComponents";
import { urlFor } from "@/sanity/urlFor";

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    mainImage,
    author->{name},
    publishedAt,
    body
  }
`;

export default async function BlogPost({ params }) {
  const { slug } = params;
  const post = await client.fetch(postQuery, { slug });

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-700">
          Post not found
        </h2>
        <p className="text-gray-500 mt-2">
          The post you’re looking for doesn’t exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-12 prose prose-lg">
      {/* Featured Image */}
      {post.mainImage && (
        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={urlFor(post.mainImage).width(1200).url()}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
        {post.title}
      </h1>

      {/* Author & Date */}
      <p className="text-gray-500 text-sm mb-8">
        By <span className="font-medium">{post.author?.name}</span> |{" "}
        {new Date(post.publishedAt).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      {/* Content */}
      <div className="prose prose-blue max-w-none">
        <PortableText value={post.body} components={PortableTextComponents} />
      </div>
    </article>
  );
}
