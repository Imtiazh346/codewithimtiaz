// All posts
export const allPostsQuery = `*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  slug,
  mainImage{asset->{url}},
  author->{name},
  publishedAt
}`;

// Latest posts (limit 5)
export const latestPostsQuery = `*[_type == "post"] | order(publishedAt desc)[0..4]{
  _id,
  title,
  slug,
  mainImage{asset->{url}},
  publishedAt
}`;

// Categories
export const categoriesQuery = `*[_type == "category"]{
  _id,
  title,
  slug
}`;
