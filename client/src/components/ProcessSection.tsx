"use client";

import { motion } from "framer-motion";
import { Database, TrendingUp, CheckCircle, Target } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      icon: Database,
      title: "Data Intelligence",
      desc: "Identify and target the right audience using 90%+ accurate B2B data.",
    },
    {
      icon: TrendingUp,
      title: "Campaign Execution",
      desc: "Run multi-channel campaigns across email, LinkedIn, and content.",
    },
    {
      icon: CheckCircle,
      title: "Lead Qualification",
      desc: "Filter and validate engagement to focus on high-intent prospects.",
    },
    {
      icon: Target,
      title: "MQL Delivery",
      desc: "Deliver sales-ready leads with verified contact details.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          How We Generate <span className="text-primary">Pipeline</span>
        </h2>

        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          A structured process designed to consistently deliver high-quality leads that convert.
        </p>

        {/* PROCESS FLOW */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-10">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className="flex items-center">

                {/* STEP */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center max-w-[200px]"
                >
                  {/* Circle */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20 shadow-lg">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 font-semibold text-lg text-foreground">
                    {step.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-sm text-muted-foreground mt-2">
                    {step.desc}
                  </p>
                </motion.div>

                {/* ARROW (except last) */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: 80, opacity: 1 }}
                    transition={{ delay: index * 0.3 + 0.3, duration: 0.4 }}
                    className="hidden md:flex items-center justify-center"
                  >
                    <div className="h-[2px] bg-gradient-to-r from-primary/40 to-primary w-20 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                  </motion.div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}