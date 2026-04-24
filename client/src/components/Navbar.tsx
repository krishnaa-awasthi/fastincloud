"use client";

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  ChevronDown,
  ShieldAlert,
  Eye,
  MonitorSmartphone,
  Cloud,
  Server,
  Settings,
  MessageSquare,
  PhoneCall,
  Headset,
  Send,
  Layout,
  RefreshCw,
  Key,
  Cpu
} from "lucide-react";
interface NavbarProps {
  onBookDemo: () => void;
}

// --- Navigation Data Structure ---
const NAV_ITEMS = [
  { id: 1, label: "Home", link: "/" },
  { id: 2, label: "About", link: "#about" },
  {
    id: 3,
    label: "Services",
    subMenus: [
      {
        title: "Cyber Security",
        items: [
          { label: "VAPT", description: "Vulnerability Assessment", icon: ShieldAlert, href: "/vapt" },
          { label: "SOC Services", description: "24/7 Security Operations", icon: Eye, href: "/soc" },
          { label: "Endpoint Security", description: "Device & Network Protection", icon: MonitorSmartphone, href: "/endpoint" },
        ],
      },
      {
        title: "Cloud & Infrastructure",
        items: [
          { label: "Cloud Solutions", description: "Migration & Management", icon: Cloud, href: "/cloud" },
          { label: "IT Hardware & AMC", description: "End-to-end IT support", icon: Server, href: "/hardware" },
          { label: "FMS", description: "Facility Management Services", icon: Settings, href: "/fms" },
        ],
      },
      {
        title: "Marketing Automation",
        items: [
          { label: "WhatsApp Bot", description: "Smart campaign manager", icon: MessageSquare, href: "/whatsapp" },
          { label: "Truecaller Business", description: "Verified caller profile", icon: PhoneCall, href: "/truecaller" },
          { label: "Cloud Telephony", description: "Automated callbacks & analytics", icon: Headset, href: "/telephony" },
          { label: "SMS Gateway", description: "OTP, Marketing & Transactional", icon: Send, href: "/sms" },
        ],
      },
      {
        title: "CADMATE Solutions",
        items: [
          { label: "Familiar UI", description: "Zero learning cost & standard commands", icon: Layout, href: "/cadmate/ui" },
          { label: "High Compatibility", description: "Seamlessly compatible with other CAD", icon: RefreshCw, href: "/cadmate/compatibility" },
          { label: "Perpetual License", description: "Lifetime validity & flexible upgrades", icon: Key, href: "/cadmate/license" },
          { label: "Proprietary Engine", description: "Independent, high performance value", icon: Cpu, href: "/cadmate/performance" },
        ],
      },
    ],
  },
  { id: 4, label: "Case Studies", link: "#case-studies" },
  { id: 5, label: "Contact", link: "#contact" },
];


export function Navbar({ onBookDemo }: NavbarProps) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Force dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <div className="flex items-center shrink-0">
            <Link href="/">
              <div className="cursor-pointer flex items-center gap-2">
                <img src="/favicon.svg" alt="Fast In Cloud" className="h-10 w-30" />
              </div>
            </Link>
          </div>

          {/* DESKTOP NAV (Dropdown Component) */}
          <div className="hidden lg:flex flex-1 justify-center">
            <DesktopDropdownNav navItems={NAV_ITEMS} onNavigate={handleNavClick} />
          </div>

          {/* RIGHT ACTIONS (Desktop Only) */}
          <div className="hidden lg:flex justify-end items-center gap-4 shrink-0">
            <Button
              onClick={onBookDemo}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] rounded-full px-6"
            >
              Request Audit
            </Button>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <div className="flex justify-end lg:hidden shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#050505] border-t border-white/10 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-4 py-6 space-y-4">
            {NAV_ITEMS.map((link) => (
              <div key={link.label}>
                {link.link ? (
                  <Link href={link.link}>
                    <span
                      onClick={(e) => {
                        if (link.link?.startsWith("#")) {
                          e.preventDefault();
                          handleNavClick(link.link);
                        }
                      }}
                      className="block font-medium cursor-pointer py-2 text-white"
                    >
                      {link.label}
                    </span>
                  </Link>
                ) : (
                  <span className="block font-medium py-2 text-white opacity-50 uppercase text-xs tracking-widest mt-4">
                    {link.label}
                  </span>
                )}

                {/* Mobile Submenus */}
                {link.subMenus && (
                  <div className="mt-2 space-y-4 border-l border-white/10 ml-2 pl-4">
                    {link.subMenus.map((sub) => (
                      <div key={sub.title}>
                        <p className="text-cyan-400 text-sm font-semibold mb-2">{sub.title}</p>
                        <div className="space-y-2">
                          {sub.items.map((item) => (
                            <Link key={item.label} href={item.href}>
                              <span className="block py-1 text-sm text-slate-300 cursor-pointer hover:text-white">
                                {item.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-6 mt-6 border-t border-white/10">
              <Button onClick={onBookDemo} className="w-full bg-cyan-500 hover:bg-cyan-600 text-white rounded-full">
                Request Audit
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/* DESKTOP DROPDOWN COMPONENT                         */
/* -------------------------------------------------------------------------- */

function DesktopDropdownNav({ navItems, onNavigate }: { navItems: any[]; onNavigate: (h: string) => void }) {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const [isHover, setIsHover] = useState<number | null>(null);

  const handleHover = (menuLabel: string | null) => {
    setOpenMenu(menuLabel);
  };

  return (
    <ul className="relative flex items-center space-x-1">
      {navItems.map((navItem) => (
        <li
          key={navItem.label}
          className="relative"
          onMouseEnter={() => handleHover(navItem.label)}
          onMouseLeave={() => handleHover(null)}
        >
          {navItem.link ? (
            <Link href={navItem.link}>
              <button
                onClick={(e) => {
                  if (navItem.link.startsWith("#")) {
                    e.preventDefault();
                    onNavigate(navItem.link);
                  }
                }}
                className="text-sm py-2 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 text-slate-300 hover:text-white relative font-medium"
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span className="relative z-10">{navItem.label}</span>
                {(isHover === navItem.id || openMenu === navItem.label) && (
                  <motion.div
                    layoutId="hover-bg"
                    className="absolute inset-0 size-full bg-white/10"
                    style={{ borderRadius: 99 }}
                  />
                )}
              </button>
            </Link>
          ) : (
            <button
              className="text-sm py-2 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 text-slate-300 hover:text-white relative font-medium"
              onMouseEnter={() => setIsHover(navItem.id)}
              onMouseLeave={() => setIsHover(null)}
            >
              <span className="relative z-10">{navItem.label}</span>
              {navItem.subMenus && (
                <ChevronDown
                  className={`relative z-10 h-4 w-4 group-hover:rotate-180 duration-300 transition-transform ${
                    openMenu === navItem.label ? "rotate-180 text-cyan-400" : ""
                  }`}
                />
              )}
              {(isHover === navItem.id || openMenu === navItem.label) && (
                <motion.div
                  layoutId="hover-bg"
                  className="absolute inset-0 size-full bg-white/10"
                  style={{ borderRadius: 99 }}
                />
              )}
            </button>
          )}

          {/* Mega Menu Dropdown */}
          <AnimatePresence>
            {openMenu === navItem.label && navItem.subMenus && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 p-6 shadow-2xl"
                  style={{ borderRadius: 20 }}
                >
                  <div className="w-max shrink-0 flex space-x-12">
                    {navItem.subMenus.map((sub: any) => (
                      <div className="w-64" key={sub.title}>
                        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-cyan-500">
                          {sub.title}
                        </h3>
                        <ul className="space-y-4">
                          {sub.items.map((item: any) => {
                            const Icon = item.icon;
                            return (
                              <li key={item.label}>
                                <Link href={item.href}>
                                  <div className="flex items-start space-x-4 group cursor-pointer p-2 -mx-2 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="border border-white/10 bg-black text-slate-300 rounded-md flex items-center justify-center size-10 shrink-0 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-500 transition-colors duration-300">
                                      <Icon className="h-5 w-5 flex-none" />
                                    </div>
                                    <div className="leading-tight">
                                      <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                        {item.label}
                                      </p>
                                      <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
}