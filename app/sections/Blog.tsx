"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { useInView } from "../hooks/useInView";

const posts = [
  {
    title: "¿Cuánto cuesta una página web profesional en 2026?",
    excerpt: "Guía completa de precios y factores que influyen en el costo de desarrollar tu presencia digital.",
    category: "Desarrollo Web",
    date: "15 Ene 2026",
    readTime: "5 min",
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Chatbots con IA: La revolución del servicio al cliente",
    excerpt: "Cómo los agentes inteligentes están transformando la atención al cliente y aumentando ventas.",
    category: "Inteligencia Artificial",
    date: "10 Ene 2026",
    readTime: "7 min",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "SEO vs Google Ads: ¿Dónde invertir tu presupuesto?",
    excerpt: "Análisis comparativo para decidir la mejor estrategia de marketing digital para tu negocio.",
    category: "Marketing Digital",
    date: "5 Ene 2026",
    readTime: "6 min",
    color: "bg-orange-100 text-orange-700",
  },
];

function BlogCard({ post, index }: { post: typeof posts[0]; index: number }) {
  const { ref, isInView } = useInView(0.15);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-primary-200 hover:shadow-xl transition-all duration-500"
    >
      <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-slate-300">{post.title[0]}</span>
        </div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${post.color}`}>
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 group/link">
          Leer más
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.article>
  );
}

export default function Blog() {
  const { ref: titleRef, isInView: titleInView } = useInView(0.2);

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full mb-4 border border-primary-100">
            Blog
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Conocimiento para{" "}
            <span className="text-gradient">crecer</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Artículos, guías y recursos para mantenerte al día en el mundo digital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <BlogCard key={post.title} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}