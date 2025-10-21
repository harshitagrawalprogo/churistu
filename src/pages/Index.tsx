import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Services />
      <Philosophy />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
