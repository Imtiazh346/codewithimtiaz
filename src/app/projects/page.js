"use client";
import { useState } from "react";
import Link from "next/link";

const projectData = [
  {
    id: 1,
    title: "Reana.pk",
    category: "Shopify",
    description: "Pakistani store for cosmetics & wellness.",
    url: "https://reana.pk/",
    image: "/assets/images/projects/reanapk.png",
  },
  {
    id: 2,
    title: "Musysic",
    category: "Shopify",
    description: "USA-based store for musical instruments.",
    url: "https://www.musysic.com/",
    image: "/assets/images/projects/musysic.png",
  },
  {
    id: 3,
    title: "Leads.edu.pk",
    category: "WordPress",
    description: "Educational institute website.",
    url: "https://leads.edu.pk/",
    image: "/assets/images/projects/leads.png",
  },
  {
    id: 4,
    title: "Firmenity.com",
    category: "Shopify",
    description: "Corporate website with responsive design.",
    url: "https://firmenity.com/",
    image: "/assets/images/projects/firmenity.png",
  },
  {
    id: 5,
    title: "alnasser.pk",
    category: "Shopify",
    description: "Corporate website with responsive design.",
    url: "https://www.alnasser.pk/",
    image: "/assets/images/projects/alnasser.png",
  },
  // Add more projects here
];

const categories = ["All", "WordPress", "Shopify", "Next.js/React"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-200 to-purple-00 text-gray-800 py-16 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-base md:text-xl max-w-2xl mx-auto">
          A collection of projects I've built across multiple platforms. Click
          on a project to view that project.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center space-x-4 my-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full font-medium transition-colors duration-300 ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={project.url}
            className="group bg-white rounded-xl shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-xl"
          >
            <div className="relative h-48 w-full">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
              <span className="inline-block mt-3 px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-800">
                {project.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
