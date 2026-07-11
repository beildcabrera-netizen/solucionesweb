"use client";

import { motion } from "framer-motion";
import { Search, Code2, Rocket, LineChart, ArrowRight } from "lucide-react";
import { useInView } from "../hooks/useInView";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico Digital",
    description: "Analizamos tu negocio, competencia y objetivos. Identificamos oportunidades de crecimiento y definimos el alcance del proyecto. Sin costo.",
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    number: "02",
    icon: Code2,
    title: "Propuesta Estratégica",
    description: "Te presentamos un plan detallado con alcance, tiempos, inversión y métricas de éxito. Todo claro desde el primer día.",
    color: "bg-violet-500",
    lightColor: "bg-violet-50",
    textColor: "text-violet-600",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Desarrollo Ágil",
    description: "Construimos en ciclos cortos con validación continua. Avanzas viendo resultados cada semana. Sin sorpresas, sin retrasos.",
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Lanzamiento & Crecimiento",
    description: "Tu proyecto online + nosotros acompañándote a escalar. Medimos resultados, iteramos y optimizamos constantemente.",
    color: "bg-amber-500",
    lightColor: "bg-amber-50",
    textColor: "text-amber-600",
  },
];

function ProcessStep({ step, index }: { step: typeof steps[0]; index: number }) {
  const { ref, isInView } = useInView(0.2);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className={`relative flex flex-col lg:flex-row items-center gap-8 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
        <div className={`inline-flex items-center gap-3 mb-4 ${isEven ? "lg:flex-row-reverse" : ""}`}>
          <span className={`w-12 h-12 ${step.lightColor} rounded-xl flex items-center justify-center`}>
            <step.icon className={`w-6 h-6 ${step.textColor}`} />
          </span>
          <span className="text-5xl font-bold text-slate-200">{step.number}</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
        <p className="text-slate-600 leading-relaxed max-w-md mx-auto lg:mx-0">
          {step.description}
        </p>
      </div>

      <div className="hidden lg:flex flex-col items-center shrink-0">
        <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center shadow-lg shadow-slate-900/10`}>
          <span className="text-white font-bold text-xl">{step.number}</span>
        </div>
        {index < steps.length - 1 && (
          <div className="w-0.5 h-24 bg-gradient-to-b from-slate-300 to-transparent mt-4" />
        )}
      </div>

      <div className="flex-1 hidden lg:block" />
    </motion.div>
  );
}

export default function Process() {
  const { ref: titleRef, isInView: titleInView } = useInView(0.2);

  return (
    <section id="proceso" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full mb-4 border border-primary-100">
            Cómo Trabajamos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Un proceso claro,{" "}
            <span className="text-gradient">sin sorpresas</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            No somos una agencia más. Trabajamos como un equipo técnico integrado contigo, 
            alineado con tus prioridades de negocio y con foco en resultados medibles.
          </p>
        </motion.div>

        <div className="space-y-16 lg:space-y-0">
          {steps.map((step, index) => (
            <ProcessStep key={step.number} step={step} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <a href="#contacto" className="btn-primary inline-flex">
            Inicia tu diagnóstico gratuito
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}