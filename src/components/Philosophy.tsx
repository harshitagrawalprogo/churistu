import { useEffect, useRef, useState } from "react";

const Philosophy = () => {
  const [text, setText] = useState("");
  const fullText =
    "Innovation meets Execution — Together, let's build the future one innovation at a time.";
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let index = 0;
            const interval = setInterval(() => {
              if (index <= fullText.length) {
                setText(fullText.slice(0, index));
                index++;
              } else {
                clearInterval(interval);
              }
            }, 30);

            return () => clearInterval(interval);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-30" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center">
          <p className="text-3xl md:text-5xl font-bold text-foreground leading-relaxed min-h-[200px] flex items-center justify-center">
            {text}
            <span className="animate-pulse text-primary ml-2">|</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
