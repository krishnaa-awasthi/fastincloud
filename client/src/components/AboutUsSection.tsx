import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eye, Flag, Zap, CheckCircle2 } from "lucide-react";

export function AboutUsSection() {
  const aboutContent = [
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To redefine customer engagement with data, personalization, and measurable results.",
    },
    {
      icon: Flag,
      title: "Our Mission",
      description:
        "To empower organizations to build real relationships with their target audience through scalable, data-driven strategies.",
    },
    {
      icon: Zap,
      title: "Our Edge",
      description: (
        <ul className="list-disc list-inside text-muted-foreground text-base leading-relaxed space-y-1 text-left">
          <li>Smart, verified corporate data</li>
          <li>Omnichannel outreach (calls, email, digital)</li>
          <li>Measurable ROI and analytics</li>
          <li>Scalable solutions for SMEs and enterprises</li>
        </ul>
      ),
    },
  ];

  const reasons = [
    "Accurate Data, Zero Guesswork",
    "Human + Digital Synergy",
    "End-to-End Campaign Management",
    "Scalable & Customizable",
  ];

  return (
    <section
      id="about"
      className="py-20 bg-background"
      aria-labelledby="about-heading"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === About Heading === */}
        <div className="text-center mb-16">
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            About <span className="text-primary">MQL Experts</span>
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            MQL Experts is a Noida, Uttar Pradesh-based customer engagement and
            lead generation firm helping businesses enhance their sales
            pipelines through intelligent outreach. We turn business data into
            opportunity through precision targeting, personalized
            communication, and measurable outcomes.
          </p>
        </div>

        {/* === Vision / Mission / Edge Cards === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {aboutContent.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border-card-border cursor-pointer"
              >
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/10 to-chart-2/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-center">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* === Why Businesses Choose Us === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side: Heading */}
          <div>
            <h3 className="text-3xl sm:text-5xl font-bold text-foreground mb-4 leading-snug">
              Why Businesses Choose{" "}
              <span className="text-primary">MQL Experts</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Businesses choose us because we blend verified data accuracy with
              human insight — ensuring outreach that’s smart, scalable, and
              results-driven from start to finish.
            </p>
          </div>

          {/* Right Side: Bullet Points */}
          <div>
            <ul className="space-y-4">
              {reasons.map((reason, i) => (
                <li
                  key={i}
                  className="flex items-start text-base text-foreground leading-relaxed"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
