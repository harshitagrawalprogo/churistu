import { useEffect, useRef } from "react";
import {
  Globe,
  Smartphone,
  Settings,
  Palette,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Elegant, scalable, and user-centric experiences.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Elegant, scalable, and user-centric experiences.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Elegant, scalable, and user-centric experiences.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "High-performance Android & iOS apps.",
  },
  {
    icon: Settings,
    title: "Custom Software Solutions",
    description: "Secure, smart, and scalable tools.",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description: "Visual identities that stand out and communicate.",
  },
  {
    icon: Lightbulb,
    title: "IT Consultation",
    description:
      "Expert guidance in digital transformation & system integration.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "SEO, social, and performance marketing that deliver ROI.",
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 px-4 relative" ref={sectionRef}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 fade-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your digital needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="fade-on-scroll opacity-0 glass-effect hover:scale-105 transition-all duration-300 group cursor-pointer border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6 inline-block p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
