import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, TrendingUp, Users, Database } from "lucide-react";

export function SolutionsSection() {
  const solutions = [
    {
      icon: Target,
      title: "Smart Corporate Database",
      description: "Delivering verified, segmented B2B data to enable precision-driven marketing and sales decisions.",
      
    },
    {
      icon: TrendingUp,
      title: "Customer Outreach for Events & Leads",
      description: "Helping businesses drive engagement and conversions through tailored outreach strategies.",
    },
    {
      icon: Users,
      title: "Appointment Setting",
      description: "Facilitating meaningful connections between sales teams and high-value decision-makers.",
    },
    {
      icon: Database,
      title: "Surveys & Feedback Campaigns",
      description: "Enabling data-backed insights through targeted surveys and feedback initiatives.",
    },
  ];

  return (
    <section
      id="solutions"
      className="py-20 bg-background"
      data-testid="section-solutions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            data-testid="text-solutions-heading"
          >
            Everything You Need to Reach, <span className="text-primary">Engage</span> & Convert
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-solutions-description"
          >
            Everything you need to build, enrich, and activate your total addressable market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <CardTitle className="text-xl" data-testid={`text-solution-title-${index}`}>
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base" data-testid={`text-solution-desc-${index}`}>
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
