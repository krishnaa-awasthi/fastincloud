import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ShieldCheck, Cloud, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroSectionProps {
  onBookDemo?: () => void;
}

const slides = [
  {
    id: 1,
    tag: "CYBER SECURITY",
    title: "Secure Your Business Before Threats Strike",
    sub: "Protect your systems with enterprise-grade endpoint, network, and cloud security.",
    cta: "Get Security Audit",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80",
    icon: ShieldCheck,
  },
  {
    id: 2,
    tag: "CLOUD & IT INFRASTRUCTURE",
    title: "Scale Faster with Smart Cloud Solutions",
    sub: "End-to-end IT hardware, FMS support, and seamless cloud migrations.",
    cta: "Explore Solutions",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
    icon: Cloud,
  },
  {
    id: 3,
    tag: "MARKETING AUTOMATION",
    title: "Turn Conversations into Conversions",
    sub: "Automate engagement with WhatsApp bots, Truecaller Business, and Cloud Telephony.",
    cta: "Boost Your Sales",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80",
    icon: MessageSquare,
  },
];

export function HeroSection({ onBookDemo }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const loaderTextRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // --- 1. Premium 3-Second Preloader Animation ---
      const tlLoader = gsap.timeline();

      // Progress bar fills over 2.5 seconds
      tlLoader.to(progressBarRef.current, {
        width: "100%",
        duration: 2.2,
        ease: "power2.inOut",
      });

      // Fade out text, then slide loader up
      tlLoader
        .to(loaderTextRef.current, { opacity: 0, duration: 0.4 }, "-=0.4")
        .to(loaderRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
        })
        // Animate the first slide's content in after loader disappears
        .from(
          ".slide-content-0",
          {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.3"
        );

      // --- 2. Horizontal Scroll Trigger Animation ---
      const slider = sliderRef.current;
      if (!slider) return;

      const totalSlides = slides.length;

      // CORRECTED: Calculate exact horizontal translation instead of percentage
      const getScrollAmount = () => -(slider.scrollWidth - window.innerWidth);

      gsap.to(slider, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (totalSlides - 1), // Snaps perfectly to each slide
          // The end distance matches the exact width we are scrolling
          end: () => `+=${slider.scrollWidth - window.innerWidth}`, 
          invalidateOnRefresh: true, // Recalculates on window resize
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <>
      {/* PRELOADER */}
      <div
        ref={loaderRef}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
      >
        <div ref={loaderTextRef} className="flex flex-col items-center gap-6">
          <img src="/loader_img.png" alt="fic_logo" />
          {/* Progress Bar Container */}
          <div className="h-[2px] w-64 overflow-hidden rounded-full bg-white/10">
            <div
              ref={progressBarRef}
              className="h-full w-0 bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
            />
          </div>
        </div>
      </div>

      {/* HERO SECTION CONTAINER */}
      <section
        ref={containerRef}
        className="relative h-screen w-full overflow-hidden bg-[#050505] text-white"
      >
        {/* Horizontal Slider Wrapper */}
        <div
          ref={sliderRef}
          className="flex h-full w-[300vw]" // 300vw because we have 3 slides
        >
          {slides.map((slide, index) => {
            const Icon = slide.icon;

            return (
              <div
                key={slide.id}
                className="relative flex h-full w-screen items-center justify-start px-6 sm:px-12 lg:px-24"
              >
                {/* Background Image with Dark Gradient Overlays */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
                  />
                  {/* Heavy dark gradient from left and bottom to ensure enterprise text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 max-w-4xl">
                  {/* Trust Badge */}
                  <div
                    className={`slide-content-${index} mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md`}
                  >
                    <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    <span className="text-xs font-semibold tracking-wide text-slate-300">
                      TRUSTED IT & CYBERSECURITY PARTNER SINCE 2018
                    </span>
                  </div>

                  {/* Tag / Category */}
                  <div
                    className={`slide-content-${index} mb-4 flex items-center gap-3 text-cyan-400`}
                  >
                    <Icon className="h-6 w-6" />
                    <span className="text-sm font-bold tracking-widest uppercase">
                      {slide.tag}
                    </span>
                  </div>

                  {/* Main Headline */}
                  <h2
                    className={`slide-content-${index} text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-cyan-400 drop-shadow-lg`}
                  >
                    {slide.title}
                  </h2>

                  {/* Subheading */}
                  <p
                    className={`slide-content-${index} mt-6 max-w-2xl text-lg sm:text-xl font-medium leading-relaxed text-slate-300`}
                  >
                    {slide.sub}
                  </p>

                  {/* CTAs */}
                  <div
                    className={`slide-content-${index} mt-10 flex flex-wrap items-center gap-5`}
                  >
                    <Button
                      onClick={onBookDemo}
                      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-white px-8 py-6 text-base font-bold text-black transition-all hover:scale-[1.02] hover:bg-slate-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] active:scale-95"
                    >
                      {slide.cta}
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                    
                    <button
                      onClick={onBookDemo}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-black/20 px-8 py-6 text-base font-semibold text-white backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-white/5 hover:text-cyan-400 active:scale-95"
                    >
                      View Case Studies
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}