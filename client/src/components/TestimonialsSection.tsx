import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import testimonial1 from "@assets/generated_images/Executive_testimonial_photo_1_c6ca384a.png";
import testimonial2 from "@assets/generated_images/Executive_testimonial_photo_2_5c896962.png";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "MQL Experts transformed our lead generation process. We went from chasing cold leads to engaging with prospects who are already interested in our solutions. Our close rate has never been higher.",
      author: "Michael Chen",
      role: "VP of Sales",
      company: "TechFlow Solutions",
      avatar: testimonial1,
    },
    {
      quote: "The data quality is exceptional. Every contact is verified, enriched, and comes with behavioral insights that help us personalize our outreach. It's like having a research team dedicated to each prospect.",
      author: "Sarah Martinez",
      role: "Chief Marketing Officer",
      company: "CloudScale",
      avatar: testimonial2,
    },
    {
      quote: "ROI was immediate. Within the first month, we identified $2M in pipeline opportunities we would have missed. The platform pays for itself many times over.",
      author: "David Thompson",
      role: "Head of Business Development",
      company: "DataSync Enterprise",
      avatar: testimonial1,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-20 bg-gradient-to-br from-primary/5 via-chart-2/5 to-primary/5"
      data-testid="section-testimonials"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            data-testid="text-testimonials-heading"
          >
            Trusted by Revenue Leaders
          </h2>
          <p
            className="text-lg text-muted-foreground"
            data-testid="text-testimonials-description"
          >
            See what industry experts say about working with us
          </p>
        </div>

        <div className="relative">
          <Card className="border-card-border shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <svg
                  className="w-12 h-12 text-primary/20 mx-auto mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p
                  className="text-xl md:text-2xl text-foreground mb-8 italic leading-relaxed"
                  data-testid={`text-testimonial-quote-${currentIndex}`}
                >
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex flex-col items-center">
                  <Avatar className="w-20 h-20 mb-4">
                    <AvatarImage
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].author}
                    />
                    <AvatarFallback>
                      {testimonials[currentIndex].author.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg text-foreground" data-testid={`text-testimonial-author-${currentIndex}`}>
                    {testimonials[currentIndex].author}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`text-testimonial-role-${currentIndex}`}>
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-primary font-medium" data-testid={`text-testimonial-company-${currentIndex}`}>
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={previousTestimonial}
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30"
                  }`}
                  data-testid={`button-testimonial-dot-${index}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
