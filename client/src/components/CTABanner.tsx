"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Zap } from "lucide-react";

interface CTABannerProps {
  onBookDemo: () => void;
}

export function CTABanner({ onBookDemo }: CTABannerProps) {
  return (
    <section
      className="py-24 px-8 bg-[#F8FAFC] dark:bg-[#0B1120] transition-colors duration-300"
      data-testid="section-cta-banner"
    >
      <div className="max-w-6xl mx-auto relative group">
        
        {/* === ATMOSPHERIC GLOW BEHIND THE CARD === */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-[3rem] blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-700"></div>

        {/* === MAIN FLOATING CARD === */}
        <div className="relative bg-slate-900 dark:bg-slate-900 border border-slate-800 rounded-[3rem] p-10 md:p-20 overflow-hidden shadow-2xl text-center">
          
          {/* Abstract Background Elements inside the card */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/30 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-teal-500/20 to-transparent rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

          {/* Dotted Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />

          {/* === CONTENT === */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-teal-300 text-sm font-semibold mb-8 backdrop-blur-sm">
              <Zap className="w-4 h-4" /> Start Scaling Today
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight mb-6"
              data-testid="text-cta-heading"
            >
              Ready to turn data into <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
                revenue-driven
              </span> opportunities?
            </h2>
            
            <p
              className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto"
              data-testid="text-cta-description"
            >
              Partner with MQL Experts to drive predictable, data-powered growth. Stop guessing and start converting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              <Button
                size="lg"
                onClick={onBookDemo}
                className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-50 px-8 py-7 rounded-full text-lg font-bold shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] transition-all group"
                data-testid="button-cta-demo"
              >
                <Sparkles className="mr-2 w-5 h-5 text-blue-600" />
                Request a Free Quote
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border-white/20 px-8 py-7 rounded-full text-lg font-bold backdrop-blur-sm transition-all group"
              >
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <p className="text-sm text-slate-500 mt-6 font-medium">
              Join 500+ leading B2B companies growing with us.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}