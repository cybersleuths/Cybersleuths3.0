import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-blue-500/20 bg-slate-900/50 backdrop-blur-sm mt-16">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold neon-text mb-4">CyberSleuths</h3>
            <p className="text-foreground/70 text-sm">
              Empowering the next generation of ethical hackers through learning, collaboration, and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-blue-300 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-foreground/70 hover:text-blue-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/events" className="text-foreground/70 hover:text-blue-300 transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="/teams" className="text-foreground/70 hover:text-blue-300 transition-colors">
                  Teams
                </a>
              </li>
              <li>
                <a href="/resources" className="text-foreground/70 hover:text-blue-300 transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-blue-300 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="info.cyberslueths@bcrec.ac.in"
                  className="text-foreground/70 hover:text-blue-300 transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  info.cyberslueths@bcrec.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-blue-300 mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 transition-all hover:shadow-lg hover:shadow-blue-500/30"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 transition-all hover:shadow-lg hover:shadow-blue-500/30"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 transition-all hover:shadow-lg hover:shadow-blue-500/30"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-500/10 pt-8">
          <p className="text-center text-foreground/60 text-sm">
            © {currentYear} CyberSleuths. All rights reserved. | Empowering ethical hackers worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}

