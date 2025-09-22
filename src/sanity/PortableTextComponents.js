export const PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <img
        src={value?.asset?.url}
        alt={value.alt || "Blog image"}
        className="rounded-lg my-4"
      />
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold my-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold my-4">{children}</h2>
    ),
    normal: ({ children }) => <p className="my-2 leading-7">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 pl-4 italic">{children}</blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        {children}
      </a>
    ),
  },
};
