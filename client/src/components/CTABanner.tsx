import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface CTABannerProps {
  onBookDemo: () => void;
}

export function CTABanner({ onBookDemo }: CTABannerProps) {
  return (
    <section
      className="py-20 bg-gradient-to-r from-primary to-chart-2 relative overflow-hidden"
      data-testid="section-cta-banner"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          data-testid="text-cta-heading"
        >
          Ready to turn data into revenue-driven opportunities?
        </h2>
        <p
          className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          data-testid="text-cta-description"
        >
          Partner with MQL Experts to drive predictable, data-powered growth.
        </p>
        <Button
          size="lg"
          onClick={onBookDemo}
          className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg min-h-12 shadow-xl"
          data-testid="button-cta-demo"
        >
          <Sparkles className="mr-2 w-5 h-5" />
          Book a Free Demo
        </Button>
      </div>
    </section>
  );
}
