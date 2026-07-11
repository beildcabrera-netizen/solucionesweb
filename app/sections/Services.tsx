"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Settings,
  Bot,
  Megaphone,
  Palette,
  ArrowRight,
  Check,
} from "lucide-react";
import { useInView } from "../hooks/useInView";
import { Carousel } from "../components/ui/Carousel";

const services = [
  {
    icon: Globe,
    title: "Páginas Web",
    description: "Landing pages, sitios corporativos y e-commerce con diseño profesional, responsive y optimizado para conversiones.",
    features: ["Diseño personalizado", "Responsive 100%", "SEO on-page", "Integración WhatsApp"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Settings,
    title: "Sistemas a Medida",
    description: "Software administrativo, ERP, CRM y plataformas internas adaptadas 100% a los procesos de tu empresa.",
    features: ["Análisis de procesos", "Roles de usuario", "Panel seguro", "Escalable"],
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Bot,
    title: "Chatbots & IA",
    description: "Agentes inteligentes 24/7 para WhatsApp, web y redes sociales. Atienden, venden y resuelven incidencias automáticamente.",
    features: ["IA entrenada", "Multicanal", "24/7 automático", "Análisis de conversaciones"],
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description: "Estrategias de SEO, Google Ads, gestión de redes sociales y email marketing enfocadas en resultados medibles.",
    features: ["SEO avanzado", "Google Ads", "Redes sociales", "Email marketing"],
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Palette,
    title: "Branding & Diseño",
    description: "Identidad visual completa: logos, paletas de color, material publicitario y diseño UX/UI profesional.",
    features: ["Logo profesional", "Manual de marca", "Diseño UX/UI", "Material publicitario"],
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
  },
];

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <div className="group relative h-full">
      <div className="relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-slate-900/10 hover:-translate-y-2 h-full">
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}
          style={{ transform: "scale(1.02)" }}
        />

        <div
          className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <service.icon className={`w-7 h-7 ${service.iconColor}`} />
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        <ul className="space-y-2 mb-6">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
              <Check className="w-4 h-4 text-green-500 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 group/link"
        >
          Solicitar información
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const { ref: titleRef, isInView: titleInView } = useInView(0.2);

  return (
    <section id="servicios" className="section-padding bg-slate-50/50">
      <div className="container-custom">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full mb-4 border border-primary-100">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Soluciones digitales{" "}
            <span className="text-gradient">completas</span>{" "}
            para tu negocio
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Desde una simple landing page hasta sistemas empresariales con inteligencia artificial.
            Tenemos la solución perfecta para cada etapa de tu crecimiento.
          </p>
        </motion.div>

        <Carousel
          autoPlay
          autoPlayInterval={4000}
          showArrows
          showDots
          className="px-6 md:px-10"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </Carousel>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 mb-4">¿No encuentras lo que buscas?</p>
          <a href="#contacto" className="btn-primary inline-flex">
            Hablemos de tu proyecto
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}