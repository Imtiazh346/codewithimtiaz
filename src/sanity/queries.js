// Fetch all posts
export const allPostsQuery = `*[_type == "post"]{
  _id,
  title,
  slug,
  author->{name},
  publishedAt,
  mainImage,
  body
} | order(publishedAt desc)`;

// Fetch single post by slug
export const singlePostQuery = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  author->{name},
  publishedAt,
  mainImage,
  body
}`;
