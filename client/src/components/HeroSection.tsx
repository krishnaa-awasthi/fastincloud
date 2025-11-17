import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@assets/generated_images/Data_network_hero_background_680082e5.png";

interface HeroSectionProps {
  onBookDemo: () => void;
}

export function HeroSection({ onBookDemo }: HeroSectionProps) {
  const handleExploreSolutions = () => {
    const element = document.querySelector("#solutions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 tracking-tight"
          data-testid="text-hero-headline"
        >
          Smart Data.
          <br />
          <span className="text-primary">Smarter Outreach.</span>
          <br />
          Solid Results.
        </h1>
        
        <p
          className="text-lg sm:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          data-testid="text-hero-subtext"
        >
          MQL Experts helps businesses grow through data-driven customer outreach, verified B2B
databases, and qualified appointments that turn conversations into revenue.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={onBookDemo}
            className="bg-gradient-to-r from-primary to-chart-2 hover:opacity-90 text-white px-8 py-6 text-lg min-h-12"
            data-testid="button-get-demo"
          >
            Request a Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleExploreSolutions}
            className="bg-background/80 backdrop-blur-sm px-8 py-6 text-lg min-h-12"
            data-testid="button-explore-solutions"
          >
            Explore Solutions
          </Button>
        </div>
      </div>
    </section>
  );
}
