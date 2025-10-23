import { CheckCircle2 } from "lucide-react";
import dashboardImage from "@assets/generated_images/3D_analytics_dashboard_visualization_6f7beae6.png";

export function WhyChooseUsSection() {
  const benefits = [
    {
      title: "Verified Data Sources",
      description: "Multi-source verification ensures 95%+ accuracy on every contact record",
    },
    {
      title: "Real-Time Accuracy",
      description: "Live data enrichment and validation keeps your database always up-to-date",
    },
    {
      title: "ROI-Driven Strategies",
      description: "Proven methodologies that increase pipeline velocity by an average of 3x",
    },
    {
      title: "Custom Segmentation",
      description: "Advanced filtering by industry, company size, technology stack, and buying intent",
    },
  ];

  return (
    <section
      className="py-20 bg-muted/30"
      data-testid="section-why-choose-us"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={dashboardImage}
              alt="Data Intelligence Dashboard"
              className="rounded-xl shadow-2xl w-full"
              data-testid="img-dashboard"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
              data-testid="text-why-heading"
            >
              Data that drives real decisions
            </h2>
            <p className="text-lg text-muted-foreground mb-8" data-testid="text-why-description">
              Our intelligence platform delivers actionable insights that transform your go-to-market strategy
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4"
                  data-testid={`benefit-${index}`}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-1" data-testid={`text-benefit-title-${index}`}>
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground" data-testid={`text-benefit-desc-${index}`}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
