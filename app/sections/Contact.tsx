"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { useInView } from "../hooks/useInView";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "solucionesweeb@gmail.com",
    href: "mailto:solucionesweeb@gmail.com",
  },
  {
    icon: Phone,
    label: "Teléfono / WhatsApp",
    value: "+591 60709411",
    href: "https://wa.me/59160709411",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Cochabamba, Bolivia",
    href: "#",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun - Vie: 9:00 - 18:00",
    href: "#",
  },
];

export default function Contact() {
  const { ref: titleRef, isInView: titleInView } = useInView(0.2);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Error al enviar el mensaje");
      }

      setIsSubmitted(true);
      setFormState({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar el mensaje");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section-padding bg-slate-50/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 text-sm font-semibold rounded-full mb-4 border border-primary-100">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            ¿Listo para{" "}
            <span className="text-gradient">digitalizar tu negocio?</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Cuéntanos sobre tu proyecto. Responderemos en menos de 2 horas con una
            propuesta personalizada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Información de contacto</h3>
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                      <item.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">{item.label}</div>
                      <div className="text-slate-900 font-medium group-hover:text-primary-600 transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="w-6 h-6" />
                <span className="font-semibold">Respuesta garantizada</span>
              </div>
              <p className="text-sm text-white/80">
                Te respondemos en menos de 2 horas en horario laboral.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Mensaje enviado!</h3>
                  <p className="text-slate-600">Te contactaremos pronto.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Nombre completo</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        placeholder="Tu nombre"
                        value={formState.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        placeholder="tu@email.com"
                        value={formState.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Teléfono</label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        placeholder="+591 77777777"
                        value={formState.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Servicio de interés</label>
                      <select
                        name="service"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
                        value={formState.service}
                        onChange={handleChange}
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="web">Página Web</option>
                        <option value="sistema">Sistema a Medida</option>
                        <option value="chatbot">Chatbot & IA</option>
                        <option value="marketing">Marketing Digital</option>
                        <option value="branding">Branding & Diseño</option>
                        <option value="other">Otro / No estoy seguro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Cuéntanos sobre tu proyecto</label>
                    <textarea
                      rows={4}
                      name="message"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                      placeholder="¿Qué necesitas? ¿Cuáles son tus objetivos?"
                      value={formState.message}
                      onChange={handleChange}
                    />
                  </div>

                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl">
                      {error}
                    </div>
                  )}

                  <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center disabled:opacity-60">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar mensaje
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    Al enviar, aceptas nuestra política de privacidad. No compartimos tus datos.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
