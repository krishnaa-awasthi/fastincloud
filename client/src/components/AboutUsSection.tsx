"use client";

import React from "react";
import { 
  Eye, 
  Target, 
  Zap, 
  Rocket, 
  Crosshair, 
  Globe2, 
  ShieldCheck, 
  RefreshCw, 
  Headset,
  CheckCircle2
} from "lucide-react";

export function AboutUsSection() {
  return (
    <section id="about" className="py-24 px-8 bg-white dark:bg-[#0B1120] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* === SECTION HEADER === */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-primary color dark:primary color uppercase tracking-wider mb-3">
            About MQL Experts
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
            Driving Growth Through <br className="hidden md:block" />
            <span className="text-primary color dark:primary-color">
              Data & Precision
            </span>
          </h3>
        </div>

        {/* === VISION & MISSION (Split Layout) === */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-10 md:p-12 shadow-sm hover:shadow-lg transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl -z-0 group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Eye className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h4>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                To become a globally trusted growth partner for businesses by delivering high-quality data, scalable demand generation, and impactful audience outreach solutions.
              </p>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                We envision a future where organizations can seamlessly connect with the right audience, expand across markets, and accelerate revenue growth through data-driven strategies.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 dark:from-slate-900 dark:to-[#0a1930] rounded-[2rem] p-10 md:p-12 shadow-xl text-white relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl -z-0"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">
                <Target className="w-8 h-8 text-teal-400" />
              </div>
              <h4 className="text-3xl font-bold text-white mb-4">Our Mission</h4>
              <p className="text-lg text-blue-100 leading-relaxed mb-8">
                To empower businesses with accurate data, targeted outreach, and performance-driven marketing solutions that generate measurable results.
              </p>
              
              <div className="space-y-4">
                {[
                  "Deliver 90%+ accurate and verified B2B data globally",
                  "Enable consistent pipeline growth via multi-channel demand gen",
                  "Help organizations reach the exact right audience for events",
                  "Provide customized, scalable solutions tailored to your goals"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-teal-500/20 p-1 rounded-full shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-teal-400"/>
                    </div>
                    <span className="text-slate-200 font-medium leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* === OUR EDGE (Bento Grid) === */}
        <div className="pt-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-300/10 border border-blue-500 dark:border-blue-900/20 text-teal-700 dark:text-teal-400 text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" /> Our Edge
            </div>
            <h3 className="text-3xl font-bold text-primary color dark:text-blue-500">What Sets MQL Experts Apart</h3>
            <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
              We go beyond just providing data. We deliver end-to-end growth solutions designed to scale your revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: <Rocket className="w-6 h-6 text-blue-500" />, 
                title: "Data + Demand + Reach", 
                desc: "We combine Smart Data, Demand Generation, and Event Outreach to create a complete growth ecosystem."
              },
              { 
                icon: <Crosshair className="w-6 h-6 text-teal-500" />, 
                title: "Precision Targeting", 
                desc: "Advanced segmentation ensures you connect with decision-makers and high-intent prospects."
              },
              { 
                icon: <Globe2 className="w-6 h-6 text-indigo-500" />, 
                title: "Global + India Coverage", 
                desc: "Access region-specific, compliant, and scalable databases across key global markets."
              },
              { 
                icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />, 
                title: "90%+ Data Accuracy", 
                desc: "Robust validation processes ensure high deliverability and better campaign performance."
              },
              { 
                icon: <RefreshCw className="w-6 h-6 text-blue-500" />, 
                title: "Continuous Optimization", 
                desc: "We don’t just deliver leads—we continuously analyze, refine, and improve campaign outcomes."
              },
              { 
                icon: <Headset className="w-6 h-6 text-rose-500" />, 
                title: "Dedicated Support", 
                desc: "A committed team works closely with you to ensure timely delivery and measurable ROI."
              }
            ].map((edge, i) => (
              <div 
                key={i} 
                className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl hover:shadow-md dark:hover:shadow-none dark:hover:bg-slate-800/80 transition-all group"
              >
                <div className="w-12 h-12 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {edge.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{edge.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {edge.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutUsSection;