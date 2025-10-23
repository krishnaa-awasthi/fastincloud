import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import caseStudy1 from "@assets/generated_images/Case_study_analytics_image_0ac0cebe.png";
import caseStudy2 from "@assets/generated_images/Case_study_sales_image_4ab08c73.png";
import caseStudy3 from "@assets/generated_images/Case_study_profiling_image_c997a0cc.png";

export function CaseStudiesSection() {
  const caseStudies = [
    {
      image: caseStudy1,
      category: "Analytics",
      title: "How TechFlow Increased Pipeline by 250% with Data-Driven Insights",
      excerpt: "Discover how our sales intelligence platform helped TechFlow identify high-intent buyers and accelerate their sales cycle.",
    },
    {
      image: caseStudy2,
      category: "Lead Generation",
      title: "From 500 to 5,000 Qualified Leads in 90 Days",
      excerpt: "Learn how CloudScale leveraged our lead generation engine to 10x their outbound capacity while maintaining quality.",
    },
    {
      image: caseStudy3,
      category: "Customer Profiling",
      title: "Precision Targeting Delivers 40% Higher Conversion Rates",
      excerpt: "See how DataSync used advanced segmentation to target ideal customers and dramatically improve conversion metrics.",
    },
  ];

  return (
    <section
      id="resources"
      className="py-20 bg-background"
      data-testid="section-case-studies"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            data-testid="text-case-studies-heading"
          >
            Success Stories & Insights
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-case-studies-description"
          >
            Real results from companies that transformed their B2B pipeline with MQL Experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-xl cursor-pointer border-card-border"
              data-testid={`card-case-study-${index}`}
            >
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    data-testid={`img-case-study-${index}`}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <Badge
                  variant="secondary"
                  className="mb-3 bg-primary/10 text-primary hover:bg-primary/20"
                  data-testid={`badge-category-${index}`}
                >
                  {study.category}
                </Badge>
                <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2" data-testid={`text-case-study-title-${index}`}>
                  {study.title}
                </h3>
                <p className="text-muted-foreground line-clamp-3" data-testid={`text-case-study-excerpt-${index}`}>
                  {study.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="px-8"
            data-testid="button-view-insights"
          >
            View All Insights
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
