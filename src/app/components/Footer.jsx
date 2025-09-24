import {
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 py-12 text-gray-300 overflow-hidden font-inter">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">About</h3>
          <p>
            CodeWithImtiaz shares tutorials, tips, and guides on Next.js,
            Shopify, WordPress, HTML, CSS, and website optimization.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-primary transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition">Contact</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary transition">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Categories</h3>
          <ul className="space-y-2">
            <li><Link href="/category/shopify" className="hover:text-primary transition">Shopify</Link></li>
            <li><Link href="/category/wordpress" className="hover:text-primary transition">WordPress</Link></li>
            <li><Link href="/category/html" className="hover:text-primary transition">HTML</Link></li>
            <li><Link href="/category/css" className="hover:text-primary transition">CSS</Link></li>
            <li><Link href="/category/speed" className="hover:text-primary transition">Speed Optimization</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Follow Me</h3>
          <div className="flex flex-col space-y-3">
            <a
              href="https://www.youtube.com/@thecodewithimtiaz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-sky-400 transition duration-200"
            >
              <FaYoutube className="h-5 w-5" /> YouTube
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61578384899968"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-sky-400 transition duration-200"
            >
              <FaFacebookF className="h-5 w-5" /> Facebook
            </a>

            <a
              href="https://www.instagram.com/code_with_imtiaz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-sky-400 transition duration-200"
            >
              <FaInstagram className="h-5 w-5" /> Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/dev-imtiaz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-sky-400 transition duration-200"
            >
              <FaLinkedinIn className="h-5 w-5" /> LinkedIn
            </a>

            <a
              href="https://github.com/Imtiazh346"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-sky-400 transition duration-200"
            >
              <FaGithub className="h-5 w-5" /> GitHub
            </a>
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
