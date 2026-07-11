import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Process from "./sections/Process";
// import Packages from "./sections/Packages";
// import Portfolio from "./sections/Portfolio";
// import Testimonials from "./sections/Testimonials";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      {/* <Packages /> */}
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      <Blog />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}