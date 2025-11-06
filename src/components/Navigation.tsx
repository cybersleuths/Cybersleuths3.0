import { Link } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/teams", label: "Teams" },
    { href: "/resources", label: "Resources" },
    { href: "/partnership", label: "Partnership" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-blue-500/20 bg-background/80 backdrop-blur-md">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* Club Logo Image */}
          <img
            src="/images/logo1.jpg" // <-- Replace with your actual logo path
            alt="Club Logo"
            className="w-10 h-10 rounded-lg object-cover border border-blue-500/30 shadow-sm"
          />
          <span className="font-bold text-xl hidden sm:inline neon-text">CyberSleuths</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-500/10 hover:text-blue-300 text-foreground/80 hover:shadow-lg hover:shadow-blue-500/20"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-blue-500/10 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-blue-500/20 bg-slate-900/50 backdrop-blur-sm">
          <div className="container py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-500/10 hover:text-blue-300 text-foreground/80"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

