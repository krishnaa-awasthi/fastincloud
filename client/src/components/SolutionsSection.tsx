import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, TrendingUp, Database } from "lucide-react";

export function SolutionsSection() {
  const solutions = [
    {
      icon: Database,
      title: "Smart Data",
      description:
        "Verified B2B contacts across India and global markets, helping you reach decision-makers with high accuracy and relevance.",
    },
    {
      icon: TrendingUp,
      title: "Demand Generation",
      description:
        "Multi-channel campaigns designed to attract, engage, and convert high-quality leads into your sales pipeline.",
    },
    {
      icon: Target,
      title: "Event Audience Outreach",
      description:
        "Targeted audience acquisition to bring the right decision-makers to your webinars, conferences, and events.",
    },
  ];

  return (
    <section
      id="solutions"
      className="py-20 bg-background"
      data-testid="section-solutions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            data-testid="text-solutions-heading"
          >
            Growth Solutions That Drive{" "}
            <span className="text-primary">Results</span>
          </h2>

          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-solutions-description"
          >
            We don’t just provide data—we help you build pipeline and drive revenue.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <Card
                key={index}
                className="hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-lg cursor-pointer border-card-border"
                data-testid={`card-solution-${index}`}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/10 to-chart-2/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  <CardTitle
                    className="text-xl"
                    data-testid={`text-solution-title-${index}`}
                  >
                    {solution.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription
                    className="text-base"
                    data-testid={`text-solution-desc-${index}`}
                  >
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}