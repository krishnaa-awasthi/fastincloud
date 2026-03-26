"use client";

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import SmartData from "../pages/SmartData";
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  /* ---------------- Scroll ---------------- */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- Theme ---------------- */
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

  /* ---------------- Hover Logic (FIXED UX) ---------------- */
  const handleMouseEnter = (name: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // smooth delay (key fix)
  };

  /* ---------------- NAV DATA ---------------- */
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    {
      name: "Solutions",
      dropdown: [
        { name: "Smart Database", href:   "/smartdata" },
        { name: "Demand Generation", href: "/#solutions" },
        { name: "Event Audience Outreach", href: "/#solutions" },
        { name: "Surveys & Feedback", href: "/#solutions" },
      ],
    },
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
        <div className="grid grid-cols-3 items-center h-20">

          {/* LOGO */}
          <div className="flex items-center">
            <Link href="/">
              <img
                src="/favicon.png"
                className={`transition-all ${
                  isScrolled ? "h-14" : "h-16"
                }`}
              />
            </Link>
          </div>

          {/* NAV LINKS */}
          <div className="hidden lg:flex justify-center gap-10">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                {/* MAIN LINK */}
                <a
                  href={link.href}
                  onClick={(e) => {
                    if (link.href?.startsWith("#")) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }
                  }}
                  className="text-sm font-medium text-muted-foreground hover:text-primary cursor-pointer"
                >
                  {link.name}
                </a>

                {/* DROPDOWN */}
                {link.dropdown && activeDropdown === link.name && (
                  <div
                    onMouseEnter={() => handleMouseEnter(link.name)}
                    onMouseLeave={handleMouseLeave}
                    className="absolute top-full left-1/2 -translate-x-1/2 translate-y-1 w-64 bg-white dark:bg-black border shadow-lg rounded-md py-2 z-50"
                  >
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-5 py-2 text-sm hover:bg-accent hover:text-primary transition"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="hidden lg:flex justify-end items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 border rounded-full hover:bg-accent"
            >
              {theme === "light" ? <Moon /> : <Sun className="text-yellow-500" />}
            </button>

            <Button onClick={onBookDemo}>Request a Quote</Button>

            <Button
              onClick={() =>
                (window.location.href = "https://datasource.mqlexperts.com")
              }
            >
              User Login
            </Button>
          </div>

          {/* MOBILE */}
          <div className="flex justify-end lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                <a href={link.href} className="block font-medium">
                  {link.name}
                </a>

                {link.dropdown && (
                  <div className="pl-4 mt-2 space-y-2">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block text-sm text-muted-foreground"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}