import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "We'll connect within 24 hours.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4 relative" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground">
            Ready to transform your vision into reality?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card
            className="fade-on-scroll opacity-0 glass-effect border-primary/20"
            style={{ animationDelay: "0.2s" }}
          >
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-secondary border-border"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-secondary border-border"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-secondary border-border"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Send Message
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  We'll connect within 24 hours
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div
            className="space-y-8 fade-on-scroll opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    Address
                  </h3>
                  <p className="text-muted-foreground">
                    N1/12 P-1 Gangotri Vihar Colony, Nagwa Lanka, Varanasi
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    Email
                  </h3>
                  <a
                    href="mailto:churistu.mgm.ptv.ltd@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    churistu.mgm.ptv.ltd@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    Phone
                  </h3>
                  <a
                    href="tel:+919129958671"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 91299 58671
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    Website
                  </h3>
                  <p className="text-muted-foreground">www.churistu.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
