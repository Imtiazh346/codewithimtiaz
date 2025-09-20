"use client";

import { motion } from "framer-motion";
import { FaShopify, FaWordpressSimple, FaReact } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Who We Are Section */}
      <section className="py-20 container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Career Journey"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-6">Career Journey</h2>

          <p className="mb-4">
            🎓 <span className="font-semibold">October 2022:</span> Completed my
            MSCIT degree and started my professional journey in web development.
          </p>

          <p className="mb-4">
            💼 <span className="font-semibold">Bizsofttech Internship:</span>{" "}
            Gained hands-on experience building practical solutions and
            improving technical skills.
          </p>

          <p className="mb-4">
            🛒 <span className="font-semibold">Raaziq International:</span>{" "}
            Managed Shopify & WordPress projects like{" "}
            <span className="text-blue-500">Reana.pk</span> and{" "}
            <span className="text-blue-500">TheBeautyWorld.com.pk</span>,
            focusing on responsive and optimized e-commerce experiences.
          </p>

          <p className="mb-4">
            🚀 Over the past 15 months, contributed to Shopify stores such as{" "}
            <span className="text-blue-500">Musysic</span>,{" "}
            <span className="text-blue-500">Firmenity</span>, and{" "}
            <span className="text-blue-500">WarriorReplicas</span>, enhancing
            user experience and site performance.
          </p>

          <p className="mb-6">
            💻 Additionally, I have experience with{" "}
            <span className="font-semibold">WordPress</span>,{" "}
            <span className="font-semibold">React</span>, and{" "}
            <span className="font-semibold">Next.js</span> projects, expanding
            my expertise in front-end and full-stack development.
          </p>

          <a
            href="https://wa.link/lzffxr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-center rounded-xl bg-[#25D366] text-white font-semibold shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            WhatsApp
          </a>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-center mb-12">
            What I Do
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
    icon: <FaShopify className="text-4xl text-green-600" />,
    title: "E-commerce Development",
    desc: "Building optimized Shopify stores that drive sales and enhance user experience.",
  },
  {
    icon: <FaWordpressSimple className="text-4xl text-blue-600" />,
    title: "WordPress Expertise",
    desc: "Creating responsive and functional WordPress websites for diverse projects.",
  },
  {
    icon: <FaReact className="text-4xl text-cyan-500" />,
    title: "Modern Web Development",
    desc: "Developing scalable and dynamic applications using React and Next.js.",
  },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-2xl shadow-lg bg-background hover:shadow-2xl hover:-translate-y-2 transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-muted-foreground">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Join Us on This Journey</h2>
          <p className="mb-6 text-lg">
            Be part of our story and help us shape the future of tech.
          </p>
          <button className="px-8 py-3 rounded-xl bg-white text-blue-600 font-semibold shadow-lg hover:scale-105 transition">
            Get Started
          </button>
        </motion.div>
      </section>
    </div>
  );
}
