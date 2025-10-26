import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onBookDemo: () => void;
}

export function Navbar({ onBookDemo }: NavbarProps) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Solutions", href: "#solutions" },
    { name: "Industries", href: "#" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b"
          : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
            <img
              src="/favicon.png"
              alt="MQL Experts Logo"
              className={`object-contain transition-all duration-300 ${
              isScrolled ? "h-14" : "h-16"
              }`}
            />
          </Link>
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className={`relative text-sm font-medium transition-colors hover:text-primary group ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-chart-2 transition-all duration-300 ${
                    location === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              onClick={onBookDemo}
              className="bg-primary hover:bg-primary/90"
              data-testid="button-book-demo"
            >
              Book a Demo
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t" data-testid="mobile-menu">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("#")) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className="block text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                data-testid={`link-mobile-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={() => {
                onBookDemo();
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-primary"
              data-testid="button-mobile-demo"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
