import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#0f172a] py-12 text-slate-300 overflow-hidden font-inter">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About</h3>
          <p>
            CodeWithImtiaz shares tutorials, tips, and guides on Next.js, Shopify, WordPress, HTML, CSS, and website optimization.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-primary transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition">Blog</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-bold mb-4">Categories</h3>
          <ul>
            <li><Link href="/category/shopify" className="hover:text-primary transition">Shopify</Link></li>
            <li><Link href="/category/wordpress" className="hover:text-primary transition">WordPress</Link></li>
            <li><Link href="/category/html" className="hover:text-primary transition">HTML</Link></li>
            <li><Link href="/category/css" className="hover:text-primary transition">CSS</Link></li>
            <li><Link href="/category/speed" className="hover:text-primary transition">Speed Optimization</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Me</h3>
          <div className="flex flex-col space-x-4">
            <Link href="#" className="hover:text-primary transition">YouTube</Link>
            <Link href="#" className="hover:text-primary transition">Facebook</Link>
            <Link href="#" className="hover:text-primary transition">LinkedIn</Link>
            <Link href="#" className="hover:text-primary transition">GitHub</Link>
            <Link href="#" className="hover:text-primary transition">Instagram</Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} CodeWithImtiaz. All rights reserved.
      </div>
    </footer>
  );
}
