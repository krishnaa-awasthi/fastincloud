"use client";

import { useState } from "react";
import { Link } from "wouter";
import { 
  Target, 
  TrendingUp, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  Users, 
  Zap 
} from "lucide-react";

export function SolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const solutions = [
    {
      id: "smart-data",
      icon: Database,
      title: "Smart Data",
      shortDesc: "Verified B2B contacts & intelligence.",
      fullDesc: "Fuel your sales pipeline with highly accurate, human-verified B2B contact data. We provide deep firmographic and intent data so you reach the right decision-makers at exactly the right time.",
      href: "/smart-data",
      themeColor: "text-blue-500",
      activeBg: "bg-blue-50 dark:bg-blue-500/10",
      activeBorder: "border-blue-500",
      gradient: "from-blue-600 to-indigo-800",
      features: ["90%+ Verified Accuracy", "Global & India Coverage", "Custom Segmentation"],
      metricIcon: <Globe2 className="w-8 h-8 text-blue-300" />,
      metricValue: "50M+",
      metricLabel: "Verified B2B Contacts"
    },
    {
      id: "demand-generation",
      icon: TrendingUp,
      title: "Demand Generation",
      shortDesc: "Multi-channel campaigns that convert.",
      fullDesc: "Stop waiting for inbound. We design and execute end-to-end outbound campaigns across Email, LinkedIn, and Tele-calling to deliver Marketing Qualified Leads (MQLs) directly to your sales team.",
      href: "/demand-generation",
      themeColor: "text-teal-500",
      activeBg: "bg-teal-50 dark:bg-teal-500/10",
      activeBorder: "border-teal-500",
      gradient: "from-teal-600 to-emerald-800",
      features: ["Multi-Channel Outreach", "Personalized Messaging", "Predictable Pipeline"],
      metricIcon: <Zap className="w-8 h-8 text-teal-300" />,
      metricValue: "3x",
      metricLabel: "Average ROI Increase"
    },
    {
      id: "event-outreach",
      icon: Target,
      title: "Event Audience Outreach",
      shortDesc: "Fill your events with decision-makers.",
      fullDesc: "Whether it’s a webinar, roundtable, or physical conference, we handle the heavy lifting of audience acquisition. We target and secure RSVPs from the exact ICP you want in the room.",
      href: "/eventAudience-outreach",
      themeColor: "text-purple-500",
      activeBg: "bg-purple-50 dark:bg-purple-500/10",
      activeBorder: "border-purple-500",
      gradient: "from-purple-600 to-indigo-900",
      features: ["CXO & Director Targeting", "RSVP Management", "Post-Event Follow-ups"],
      metricIcon: <Users className="w-8 h-8 text-purple-300" />,
      metricValue: "85%",
      metricLabel: "Avg. Attendance Rate"
    },
  ];

  return (
    <section
      id="solutions"
      className="py-24 px-8 bg-[#F8FAFC] dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* === HEADER === */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
            Our Core Offerings
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
            Growth Solutions That <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-nlue-200">
              Drive Results
            </span>
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We don’t just provide data—we help you build predictable pipeline and drive scalable revenue across every touchpoint.
          </p>
        </div>

        {/* === INTERACTIVE SHOWCASE LAYOUT === */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Interactive Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              const isActive = activeIndex === index;

              return (
                <div
                  key={solution.id}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border-2 ${
                    isActive 
                      ? `${solution.activeBorder} ${solution.activeBg} bg-white shadow-lg` 
                      : `border-transparent hover:bg-slate-100 dark:hover:bg-slate-900/50 opacity-60 hover:opacity-100`
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-white dark:bg-slate-800 shadow-sm' : 'bg-slate-200 dark:bg-slate-800'
                    }`}>
                      <Icon className={`w-6 h-6 ${isActive ? solution.themeColor : 'text-slate-500 dark:text-slate-400'}`} />
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold transition-colors ${
                        isActive ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'
                      }`}>
                        {solution.title}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        {solution.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Dynamic Showcase Panel */}
          <div className="lg:col-span-7">
            <div className={`relative rounded-[2.5rem] overflow-hidden transition-all duration-500 bg-gradient-to-br ${solutions[activeIndex].gradient} p-10 md:p-12 shadow-2xl text-white min-h-[450px] flex flex-col`}>
              
              {/* Abstract Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/20 rounded-full blur-3xl -z-0"></div>

              <div className="relative z-10 flex-grow">
                {/* Dynamic Content */}
                <h4 className="text-3xl font-bold mb-4">
                  {solutions[activeIndex].title}
                </h4>
                <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                  {solutions[activeIndex].fullDesc}
                </p>

                {/* Features List */}
                <div className="space-y-4 mb-10">
                  {solutions[activeIndex].features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="bg-white/20 p-1 rounded-full shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-white"/>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Metric & CTA */}
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-white/20 mt-auto">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm">
                    {solutions[activeIndex].metricIcon}
                  </div>
                  <div>
                    <p className="text-2xl font-bold leading-none">{solutions[activeIndex].metricValue}</p>
                    <p className="text-sm text-white/70 mt-1">{solutions[activeIndex].metricLabel}</p>
                  </div>
                </div>

                <Link href={solutions[activeIndex].href}>
                  <button className="bg-white text-slate-900 hover:bg-slate-50 px-6 py-3.5 rounded-full font-bold transition-all flex items-center gap-2 shrink-0">
                    Explore Solution <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}