export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Blog Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          How to Connect Nodemailer with Next.js Contact Form
        </h1>
        <p className="text-gray-500 text-sm">
          📅 September 21, 2025 • ✍️ By <span className="font-medium">Imtiaz Hussain</span>
        </p>
      </header>

      {/* Blog Content */}
      <article className="prose prose-lg prose-blue max-w-none">
        <p>
          In this tutorial, I’ll show you step by step how to connect a{" "}
          <strong>contact form in Next.js</strong> with Gmail using{" "}
          <code>Nodemailer</code>.
        </p>

        <h2>Step 1 – Install Nodemailer</h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
          <code>npm install nodemailer</code>
        </pre>

        <h2>Step 2 – Create .env.local</h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
          <code>
{`GMAIL_USER=yourgmail@gmail.com
GMAIL_PASS=yourapppassword`}
          </code>
        </pre>
        <p>
          ⚠️ <strong>GMAIL_PASS</strong> must be a{" "}
          <span className="text-red-600 font-semibold">Google App Password</span>, 
          not your normal Gmail password.
        </p>

        <h2>Step 3 – Create API Route</h2>
        <pre className="bg-gray-900 text-blue-200 p-4 rounded-lg overflow-x-auto text-sm">
          <code>
{`// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: \`New message from \${name}\`,
      text: \`Name: \${name}\\nEmail: \${email}\\nMessage: \${message}\`,
    });

    return new Response(JSON.stringify({ success: true, message: "Message sent!" }), { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ success: false, message: "Failed to send." }), { status: 500 });
  }
}`}
          </code>
        </pre>

        <h2>Step 4 – Contact Form UI</h2>
        <pre className="bg-gray-900 text-yellow-200 p-4 rounded-lg overflow-x-auto text-sm">
          <code>
{`"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" placeholder="Your Name" className="w-full border p-2 rounded"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

      <input type="email" placeholder="Your Email" className="w-full border p-2 rounded"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

      <textarea placeholder="Your Message" className="w-full border p-2 rounded"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })} />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Send
      </button>

      <p>{status}</p>
    </form>
  );
}`}
          </code>
        </pre>

        <h2>Step 5 – Restart Server</h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
          <code>npm run dev</code>
        </pre>

        <p>
          ✅ Now try filling your form → you’ll receive an email directly in your
          Gmail inbox!
        </p>

        <h2>Conclusion</h2>
        <p>
          That’s it! You’ve successfully connected a contact form in Next.js
          with Gmail using Nodemailer. 🎉
        </p>
      </article>
    </div>
  );
}
