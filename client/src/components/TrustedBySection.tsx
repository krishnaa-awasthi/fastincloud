"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export function TrustedBySection() {
  const logos = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/d/d4/SafeNet_logo.svg", alt: "Safenet Logo" },
    { src: "https://i.ibb.co/TqKHrMpZ/Screenshot-2026-03-28-130509.png", alt: "Sakri Logo" },
    { src: "https://i.ibb.co/21sRMQGv/Screenshot-2026-03-28-130949.png", alt: "Motorola solutions logo" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Trend_Micro_logo.svg/1200px-Trend_Micro_logo.svg.png", alt: "Trend Logo" },
    { src: "https://media.licdn.com/dms/image/v2/C511BAQEotathWzwOjA/company-background_10000/company-background_10000/0/1583923079073/solvate_laboratories_pvtltd_cover?e=2147483647&v=beta&t=yITxzX1ID8OExiZIjhGVeFVEa0SfZi9CZcOet6b8qTs", alt: "solvate logo" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/c/c7/REDINGTON_LOGO.gif?20150608080419", alt: "redingto logo" },
    { src: "https://i.ibb.co/hR3YgJMZ/Screenshot-2025-10-28-103658.png", alt: "cloudway logo" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Ingram_Micro_logo_new.svg", alt: "ingram Logo" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Hitachi_logo.svg/1200px-Hitachi_logo.svg.png?20240210051816", alt: "Hitachi Logo" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/2/21/Thales_Logo.svg", alt: "thelas Logo" },
    { src: "https://i.ibb.co/gM6mrkP6/Screenshot-2025-10-26-200149.png", alt: "impact logo" },
  ];

  return (
    <section
      id="trusted-by"
      className="py-20 bg-white dark:bg-[#0B1120] overflow-hidden transition-colors duration-300 border-y border-slate-100 dark:border-slate-800/50"
      aria-labelledby="trusted-by-heading"
    >
      {/* Required styles for the infinite marquee without touching tailwind.config.js */}
      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infinite-scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
        /* Gradient mask to fade out edges */
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>

      {/* === HEADER === */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold mb-6">
          <ShieldCheck className="w-4 h-4 text-teal-500" /> Trusted Globally
        </div>
        
        <h2
          id="trusted-by-heading"
          className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6"
        >
          Powering Growth for Industry Leaders
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          We partner with innovative global brands to accelerate growth, increase conversions, and amplify outreach performance. 
        </p>
      </div>

      {/* === MARQUEE CONTAINER === */}
      <div className="relative w-full overflow-hidden mask-edges py-4">
        
        {/* We render the array twice within the flex container to create a seamless loop */}
        <div className="animate-infinite-scroll items-center gap-6 px-4">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="flex items-center justify-center w-[200px] h-[90px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md dark:shadow-none transition-all duration-300 shrink-0 group px-6"
              title={logo.alt}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-[45px] max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 mix-blend-multiply dark:mix-blend-normal"
                loading="lazy"
                decoding="async"
                fetchPriority="low" // Fixed the React warning here
              />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default TrustedBySection;