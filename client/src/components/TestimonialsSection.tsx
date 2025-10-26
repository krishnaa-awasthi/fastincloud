import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "MQL Experts helped us connect with the right decision-makers faster than ever. Their database quality and outreach consistency gave our campaigns a real edge.",
      author: "Sayed Sahil Zeeshan",
      company: "Zartek IT Solutions",
      
    },
    {
      quote: "We saw a significant improvement in lead quality and meeting conversions within weeks. The MQL Experts team truly understands B2B communication.",
      author: "Sumit Verma",
      company: "Fast In Cloud Digital Solutions LLP",
    },
    {
      quote: "The professionalism and precision of MQL Experts have made them our go-to partner for customer outreach. Every campaign runs smoothly and delivers measurable results.",
      author: "Amal Kumar Pandey",
      company: "Orea Homes",
    },
    {
      quote: "Their corporate database is clean, accurate, and perfectly segmented. We built several successful campaigns thanks to their timely delivery and strong support.", 
      author: "Mithilesh Kuma Jha",
      company: "The Speedy Loans",
    },
    {
      quote: "What impressed us most was the accountability and transparency MQL Experts maintained throughout the project. They deliver exactly what they promise.",
      author: "Mayank Saxena",
      company: "APRICOAT INSURANCE MARKETING PRIVATE LIMITED",
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
                  
                  <h3 className="font-semibold text-lg text-foreground" data-testid={`text-testimonial-author-${currentIndex}`}>
                    {testimonials[currentIndex].author}
                  </h3>
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
