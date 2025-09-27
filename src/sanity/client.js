import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-05-01", // stable API date
  useCdn: false, // disable CDN to always get fresh content
  token: process.env.SANITY_API_TOKEN, // optional: only if you need private/draft content
});
