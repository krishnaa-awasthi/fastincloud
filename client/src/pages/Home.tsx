import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustedBySection } from "@/components/TrustedBySection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { DemoModal } from "@/components/DemoModal";
import AboutUsSection from "@/components/AboutUsSection";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sectionIds = [
      'section-hero',
      'section-about-us',
      'section-trusted-by',
      'section-solutions',
      'section-why-choose-us',
      'section-case-studies',
      'section-testimonials',
      'section-cta-banner'
    ];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onBookDemo={() => setIsDemoModalOpen(true)} />
      
      <main>
        <div
          id="section-hero"
          className={`transition-opacity duration-1000 ${
            isVisible["section-hero"] ? "opacity-100" : "opacity-0"
          }`}
        >
          <HeroSection onBookDemo={() => setIsDemoModalOpen(true)} />
        </div>

        <div
          id="section-about-us"
          className={`transition-all duration-1000 transform ${
            isVisible["section-about-us"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <AboutUsSection/>
        </div>

        <div
          id="section-trusted-by"
          className={`transition-all duration-1000 transform ${
            isVisible["section-trusted-by"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <TrustedBySection />
        </div>

        <div
          id="section-solutions"
          className={`transition-all duration-1000 transform ${
            isVisible["section-solutions"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <SolutionsSection />
        </div>

        <div
          id="section-why-choose-us"
          className={`transition-all duration-1000 transform ${
            isVisible["section-why-choose-us"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <ProcessSection />
        </div>

        <div
          id="section-case-studies"
          className={`transition-all duration-1000 transform ${
            isVisible["section-case-studies"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <CaseStudiesSection />
        </div>

        <div
          id="section-testimonials"
          className={`transition-all duration-1000 transform ${
            isVisible["section-testimonials"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <TestimonialsSection />
        </div>

        <div
          id="section-cta-banner"
          className={`transition-all duration-1000 transform ${
            isVisible["section-cta-banner"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <CTABanner onBookDemo={() => setIsDemoModalOpen(true)} />
        </div>

        <Footer />
      </main>

      <DemoModal
        open={isDemoModalOpen}
        onOpenChange={setIsDemoModalOpen}
      />
    </div>
  );
}
