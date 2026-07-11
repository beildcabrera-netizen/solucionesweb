"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowUp } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  servicios: [
    { label: "Páginas Web", href: "#servicios" },
    { label: "Sistemas a Medida", href: "#servicios" },
    { label: "Chatbots & IA", href: "#servicios" },
    { label: "Marketing Digital", href: "#servicios" },
    { label: "Branding & Diseño", href: "#servicios" },
  ],
  empresa: [
    { label: "Sobre Nosotros", href: "#" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Blog", href: "#blog" },
    { label: "Trabaja con Nosotros", href: "#" },
  ],
  soporte: [
    { label: "Centro de Ayuda", href: "#" },
    { label: "Política de Privacidad", href: "#" },
    { label: "Términos de Servicio", href: "#" },
    { label: "FAQ", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-600/10 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">SW</span>
              </div>
              <div>
                <span className="font-bold text-xl text-white">Soluciones Web</span>
                <span className="block text-xs text-slate-400">Diseño Web & Marketing Digital</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Transformamos negocios con soluciones digitales innovadoras.
              Desde páginas web hasta sistemas con inteligencia artificial,
              impulsamos tu crecimiento en el mundo digital.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-primary-400 text-sm transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 hover:text-primary-400 text-sm transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">solucionesweeb@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">+591 60709411</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">Cochabamba, Bolivia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Soluciones Web. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Privacidad</Link>
            <Link href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Términos</Link>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
