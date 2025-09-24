// All posts with category references
export const allPostsQuery = `*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  slug,
  mainImage{
    asset->{url}
  },
  author->{name, slug},
  categories[]->{_id, title, slug},
  publishedAt
}`;

// Latest posts (limit 5)
export const latestPostsQuery = `*[_type == "post"] | order(publishedAt desc)[0..4]{
  _id,
  title,
  slug,
  mainImage{
    asset->{url}
  },
  publishedAt
}`;

// Categories with post counts
export const categoriesQuery = `*[_type == "category"]{
  _id,
  title,
  slug,
  "postCount": count(*[_type == "post" && references(^._id)])
}`;

// Posts by category slug
export const categoryPostsQuery = `*[_type == "post" && $slug in categories[]->slug.current] | order(publishedAt desc){
  _id,
  title,
  slug,
  mainImage{
    asset->{url}
  },
  author->{name},
  publishedAt
}`;
