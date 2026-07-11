import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soluciones Web | Diseño Web & Marketing Digital",
  description: "Transformamos tu negocio con páginas web profesionales, sistemas a medida, chatbots con IA y marketing digital. +50 proyectos entregados. Cotiza gratis.",
  keywords: ["diseño web", "marketing digital", "chatbots", "sistemas web", "desarrollo web", "SEO", "redes sociales"],
  authors: [{ name: "Soluciones Web" }],
  openGraph: {
    title: "Soluciones Web | Diseño Web & Marketing Digital",
    description: "Transformamos tu negocio con soluciones digitales profesionales.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}