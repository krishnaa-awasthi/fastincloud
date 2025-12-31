import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";

interface NavbarProps {
  onBookDemo: () => void;
}

export function Navbar({ onBookDemo }: NavbarProps) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  /* ---------------- Scroll Detection ---------------- */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- Theme Handling ---------------- */
  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "light" | "dark") || "light";
    setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  /* ---------------- Navigation ---------------- */
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Solutions", href: "/#solutions" },
    { name: "Resources", href: "/#resources" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= DESKTOP BAR ================= */}
        <div className="grid grid-cols-3 items-center h-20">
          {/* -------- LEFT: LOGO -------- */}
          <div className="flex items-center justify-start">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/favicon.png"
                alt="MQL Experts Logo"
                className={`transition-all duration-300 object-contain ${
                  isScrolled ? "h-14" : "h-16"
                }`}
              />
            </Link>
          </div>

          {/* -------- CENTER: NAV LINKS -------- */}
          <div className="hidden lg:flex justify-center items-center gap-10">
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
                className={`relative text-sm font-medium transition-colors group ${
                  location === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-chart-2 transition-all duration-300 ${
                    location === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* -------- RIGHT: ACTIONS -------- */}
          <div className="hidden lg:flex justify-end items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border hover:bg-accent transition"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-500" />
              )}
            </button>

            <Button
              onClick={onBookDemo}
              className="bg-primary hover:bg-primary/90"
            >
              Request a Quote
            </Button>

            <Button
              onClick={() =>
                (window.location.href = "https://datasource.mqlexperts.com")
              }
              className="bg-primary hover:bg-primary/90"
            >
              User Login
            </Button>
          </div>

          {/* -------- MOBILE TOGGLE -------- */}
          <div className="flex justify-end lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t">
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
                className="block text-base font-medium text-muted-foreground hover:text-primary"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 p-2 border rounded-full"
            >
              {theme === "light" ? <Moon /> : <Sun className="text-yellow-500" />}
              <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
            </button>

            <Button
              onClick={() => {
                onBookDemo();
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-primary"
            >
              Request a Quote
            </Button>

            <Button
              onClick={() =>
                (window.location.href = "https://datasource.mqlexperts.com")
              }
              className="w-full bg-primary"
            >
              User Login
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
