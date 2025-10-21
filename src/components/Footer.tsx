import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border relative">
      <div className="absolute inset-0 gradient-bg opacity-10" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">CHURISTU</h3>
            <p className="text-muted-foreground">
              Transforming visions into digital reality through innovation and
              execution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">
              Connect With Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-foreground" />
              </a>
              <a
                href="#"
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              ></a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} CHURISTU Management and Development
            Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
