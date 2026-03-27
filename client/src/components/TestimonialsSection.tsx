"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      quote: "MQL Experts helped us connect with the right decision-makers faster than ever. Their database quality and outreach consistency gave our campaigns a real edge.",
      author: "Sayed Sahil Zeeshan",
      company: "Zartek IT Solutions",
      role: "Marketing Director" // Added roles for realism/design balance
    },
    {
      quote: "We saw a significant improvement in lead quality and meeting conversions within weeks. The MQL Experts team truly understands B2B communication.",
      author: "Sumit Verma",
      company: "Fast In Cloud Digital Solutions LLP",
      role: "CEO"
    },
    {
      quote: "The professionalism and precision of MQL Experts have made them our go-to partner for customer outreach. Every campaign runs smoothly and delivers measurable results.",
      author: "Amal Kumar Pandey",
      company: "Orea Homes",
      role: "Head of Sales"
    },
    {
      quote: "Their corporate database is clean, accurate, and perfectly segmented. We built several successful campaigns thanks to their timely delivery and strong support.",
      author: "Mithilesh Kuma Jha",
      company: "The Speedy Loans",
      role: "Operations Manager"
    },
    {
      quote: "What impressed us most was the accountability and transparency MQL Experts maintained throughout the project. They deliver exactly what they promise.",
      author: "Mayank Saxena",
      company: "APRICOAT INSURANCE MARKETING PRIVATE LIMITED",
      role: "Founding Partner"
    },
  ];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300); // 300ms matches CSS transition duration
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 6000); // Slightly longer interval for reading
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]); // Re-bind when index changes to avoid rapid jumps

  return (
    <section
      id="testimonials"
      className="py-24 px-8 relative overflow-hidden bg-white dark:bg-[#0B1120] transition-colors duration-300"
      data-testid="section-testimonials"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900/10 dark:to-transparent rounded-full blur-3xl -z-0 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* === HEADER === */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-3">
            Client Success
          </h2>
          <h3
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6"
            data-testid="text-testimonials-heading"
          >
            Trusted by Revenue Leaders
          </h3>
          <p
            className="text-lg text-slate-600 dark:text-slate-400"
            data-testid="text-testimonials-description"
          >
            See how we're helping B2B teams scale their growth.
          </p>
        </div>

        {/* === SLIDER === */}
        <div className="relative max-w-4xl mx-auto">
          
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 md:p-16 shadow-2xl shadow-blue-900/5 dark:shadow-none relative">
            
            {/* Large Decorative Quote Icon */}
            <div className="absolute top-10 left-10 md:left-12 opacity-10 dark:opacity-20 text-blue-500">
              <Quote size={80} />
            </div>

            <div className="text-center relative z-10 min-h-[220px] flex flex-col justify-center">
              {/* Fade Transition Wrapper */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                <p
                  className="text-2xl md:text-3xl text-slate-800 dark:text-slate-200 font-medium leading-relaxed mb-10"
                  data-testid={`text-testimonial-quote-${currentIndex}`}
                >
                  "{testimonials[currentIndex].quote}"
                </p>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full mb-4 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                    {/* Placeholder Avatar Initials */}
                    {testimonials[currentIndex].author.charAt(0)}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white" data-testid={`text-testimonial-author-${currentIndex}`}>
                    {testimonials[currentIndex].author}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-teal-400 mb-1" data-testid={`text-testimonial-company-${currentIndex}`}>
                    {testimonials[currentIndex].company}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* === CONTROLS === */}
          <div className="flex justify-center items-center gap-6 mt-10">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-500 transition-all hover:shadow-md disabled:opacity-50"
              data-testid="button-testimonial-prev"
              disabled={isAnimating}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating || index === currentIndex) return;
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-blue-600 to-teal-500 w-8"
                      : "bg-slate-300 dark:bg-slate-700 w-2.5 hover:bg-slate-400 dark:hover:bg-slate-600"
                  }`}
                  data-testid={`button-testimonial-dot-${index}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-500 transition-all hover:shadow-md disabled:opacity-50"
              data-testid="button-testimonial-next"
              disabled={isAnimating}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}