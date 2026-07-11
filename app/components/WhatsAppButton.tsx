"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/59160709411"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 bg-[#25D366] text-white rounded-full shadow-2xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-shadow duration-300 group"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#25D366]" />
      </div>
      <span className="font-semibold text-sm hidden sm:inline">Chatea con nosotros</span>
      <span className="absolute -top-2 -right-2 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]" />
      </span>
    </motion.a>
  );
}
