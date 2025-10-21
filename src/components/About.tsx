import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 gradient-bg opacity-20 -z-10" />
      
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 fade-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-primary">CHURISTU</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
        </div>

        <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
          <p className="fade-on-scroll opacity-0" style={{ animationDelay: '0.1s' }}>
            At <span className="text-primary font-semibold">CHURISTU</span>, we combine creativity, technology, and strategic thinking to deliver powerful digital solutions that transform ideas into measurable impact.
          </p>
          
          <p className="fade-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
            Founded to empower businesses through innovation, CHURISTU offers full-stack IT and creative solutions — from web & app development to software engineering and brand design.
          </p>
          
          <p className="fade-on-scroll opacity-0" style={{ animationDelay: '0.3s' }}>
            Our developers, designers, and strategists collaborate to craft tailored experiences that not only look exceptional but perform flawlessly.
          </p>

          <div className="text-center mt-12 fade-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
            <p className="text-2xl md:text-3xl font-semibold text-primary italic">
              Innovation meets Execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
