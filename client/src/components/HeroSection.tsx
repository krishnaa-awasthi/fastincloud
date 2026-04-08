"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onBookDemo: () => void;
}

// --- Accordion Data ---
const servicesData = [
  {
    id: 1,
    title: 'Smart Data',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    href: "/smart-data",
  },
  {
    id: 2,
    title: 'Demand Generation',
    // Representing growth/marketing
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    href: "/demand-generation",
  },
  {
    id: 3,
    title: 'Event Audience Outreach',
    // Representing events/conferences
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    href: "/eventAudience-outreach",
  },
];

export function HeroSection({ onBookDemo }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* ---------- animated background: trend lines + dots ---------- */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    interface TrendLine {
      points: { x: number; y: number }[];
      color: string;
      alpha: number;
      width: number;
      dashOffset: number;
      speed: number;
      dotPos: number;
      totalLength: number;
      drawProgress: number;
    }

    const buildTrendPoints = (
      startXFrac: number,
      startYFrac: number,
      endXFrac: number,
      endYFrac: number,
      jitter: number
    ) => {
      const w = canvas.width;
      const h = canvas.height;
      const steps = 8;
      const pts: { x: number; y: number }[] = [];
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const x = (startXFrac + (endXFrac - startXFrac) * t) * w;
        const baseY = (startYFrac + (endYFrac - startYFrac) * t) * h;
        const noise = (Math.random() - 0.5) * jitter * h;
        pts.push({ x, y: baseY + noise });
      }
      pts[0] = { x: startXFrac * w, y: startYFrac * h };
      pts[steps] = { x: endXFrac * w, y: endYFrac * h };
      return pts;
    };

    const trendLines: TrendLine[] = [
      { points: buildTrendPoints(0.0, 0.98, 1.0, 0.10, 0.06), color: "59,130,246", alpha: 0.18, width: 1.5, dashOffset: 0, speed: 2.2, dotPos: 0, totalLength: 0, drawProgress: 0 },
      { points: buildTrendPoints(0.0, 0.88, 0.95, 0.22, 0.05), color: "37,99,235",  alpha: 0.13, width: 1.2, dashOffset: 0, speed: 1.8, dotPos: 0, totalLength: 0, drawProgress: 0 },
      { points: buildTrendPoints(0.0, 0.75, 1.0, 0.35, 0.04), color: "96,165,250", alpha: 0.22, width: 2.0, dashOffset: 0, speed: 2.8, dotPos: 0, totalLength: 0, drawProgress: 0 },
      { points: buildTrendPoints(0.05, 1.0, 0.85, 0.05, 0.07), color: "30,64,175",  alpha: 0.10, width: 1.0, dashOffset: 0, speed: 1.5, dotPos: 0, totalLength: 0, drawProgress: 0 },
      { points: buildTrendPoints(0.0, 0.62, 0.90, 0.48, 0.03), color: "147,197,253",alpha: 0.15, width: 1.3, dashOffset: 0, speed: 2.0, dotPos: 0, totalLength: 0, drawProgress: 0 },
    ];

    const pointAtDist = (pts: { x: number; y: number }[], d: number) => {
      let remaining = d;
      for (let i = 1; i < pts.length; i++) {
        const dx = pts[i].x - pts[i - 1].x;
        const dy = pts[i].y - pts[i - 1].y;
        const segLen = Math.sqrt(dx * dx + dy * dy);
        if (remaining <= segLen) {
          const t = remaining / segLen;
          return { x: pts[i - 1].x + dx * t, y: pts[i - 1].y + dy * t };
        }
        remaining -= segLen;
      }
      return pts[pts.length - 1];
    };

    trendLines.forEach((tl) => {
      let len = 0;
      for (let i = 1; i < tl.points.length; i++) {
        const dx = tl.points[i].x - tl.points[i - 1].x;
        const dy = tl.points[i].y - tl.points[i - 1].y;
        len += Math.sqrt(dx * dx + dy * dy);
      }
      tl.totalLength = len;
      tl.dotPos = Math.random() * len;
      tl.drawProgress = Math.random() * 0.4;
    });

    const dots: { x: number; y: number; vx: number; vy: number }[] = Array.from(
      { length: 32 },
      () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
      })
    );

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trendLines.forEach((tl) => {
        if (tl.drawProgress < 1) tl.drawProgress = Math.min(1, tl.drawProgress + 0.003);

        const visibleLength = tl.totalLength * tl.drawProgress;

        ctx.beginPath();
        let accumulated = 0;
        ctx.moveTo(tl.points[0].x, tl.points[0].y);
        let done = false;
        for (let i = 1; i < tl.points.length && !done; i++) {
          const dx = tl.points[i].x - tl.points[i - 1].x;
          const dy = tl.points[i].y - tl.points[i - 1].y;
          const segLen = Math.sqrt(dx * dx + dy * dy);
          if (accumulated + segLen >= visibleLength) {
            const t = (visibleLength - accumulated) / segLen;
            ctx.lineTo(tl.points[i - 1].x + dx * t, tl.points[i - 1].y + dy * t);
            done = true;
          } else {
            ctx.lineTo(tl.points[i].x, tl.points[i].y);
            accumulated += segLen;
          }
        }

        ctx.strokeStyle = `rgba(${tl.color},${tl.alpha})`;
        ctx.lineWidth = tl.width;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.stroke();

        if (tl.drawProgress > 0.3) {
          tl.dotPos = (tl.dotPos + tl.speed) % tl.totalLength;
          const dotD = tl.dotPos % visibleLength;
          const pos = pointAtDist(tl.points, dotD);

          const grd = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 8);
          grd.addColorStop(0, `rgba(${tl.color},0.7)`);
          grd.addColorStop(1, `rgba(${tl.color},0)`);
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 8, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${tl.color},0.9)`;
          ctx.fill();
        }
      });

      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;

        ctx.beginPath();
        ctx.arc(d.x, d.y, 2.0, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59,130,246,0.4)";
        ctx.fill();
      });

      dots.forEach((a, i) => {
        dots.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(59,130,246,${0.09 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50/30 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      
      {/* animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.9 }}
      />

      {/* subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#0891b2 1px, transparent 1px), linear-gradient(90deg, #0891b2 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-6 max-w-xl z-20">

            {/* headline */}
            <h1
              className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight text-gray-900 dark:text-white"
              style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
            >
              Accelerate Your B2B Growth with{" "}
              <span className="block text-primary mt-2">Data, Demand Generation</span>
              <span className="block text-primary">& Event Reach</span>
              <span className="block text-gray-900 dark:text-white mt-2">
                That Drives Real Pipeline
              </span>
            </h1>

            {/* sub-copy */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
             MQL Experts helps businesses generate high-quality leads through 90%+ accurate global data,
             targeted demand generation campaigns, and event audience outreach.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={onBookDemo}
                className="inline-flex items-center gap-2 px-8 py-6 rounded-xl font-bold text-white text-base transition-all duration-200 shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.6)] active:scale-[0.98]"
              >
                Get Verified Leads
              </Button>

              <button
                onClick={onBookDemo}
                className="inline-flex items-center gap-2 px-8 py-6 rounded-xl font-bold text-base border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200 active:scale-[0.98] group"
              >
                Request Sample Data
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* ── RIGHT COLUMN – Interactive Accordion ── */}
          <div className="relative flex justify-center lg:justify-end min-h-[500px]">
            
            {/* glow behind accordion */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-96 h-96 rounded-full bg-cyan-400/20 dark:bg-cyan-500/10 blur-3xl" />
            </div>

            {/* The Accordion Container */}
            <div className="relative z-10 flex flex-row items-center justify-center gap-3 w-full h-[450px] p-2">
              {servicesData.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`
                      relative h-full rounded-3xl overflow-hidden cursor-pointer
                      transition-all duration-700 ease-in-out shrink-0 border border-white/20 dark:border-white/10 shadow-xl
                      ${isActive ? 'w-[200px] sm:w-[280px] md:w-[350px]' : 'w-[50px] sm:w-[70px]'}
                    `}
                  >
                    {/* Background Image */}
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => { 
                        e.currentTarget.onerror = null; 
                        e.currentTarget.src = 'https://placehold.co/400x450/0f172a/ffffff?text=Image'; 
                      }}
                    />
                    
                    {/* Dark overlay for text readability */}
                    <div className={`absolute inset-0 transition-colors duration-500 ${isActive ? 'bg-black/30' : 'bg-black/60 hover:bg-black/40'}`}></div>

                    {/* Gradient Overlay at the bottom for text */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

                    {/* Caption Text */}
                    <a href={item.href} className="absolute inset-0 flex items-end p-4 z-20">
                      <span
                        className={`
                          absolute text-white font-bold whitespace-nowrap
                          transition-all duration-500 ease-in-out
                          ${
                            isActive
                              ? 'bottom-8 left-6 rotate-0 opacity-100 text-2xl' 
                              : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 -rotate-90 opacity-80 text-sm tracking-wider'
                          }
                        `}
                      >
                       {item.title}
                      </span>
                    </a>
                  </div>
                );
              })}
            </div>

            {/* ── floating stat badges (retained from original) ── */}
            
            {/* top-right: 15M+ Verified Contacts */}
            <div className="absolute -top-4 -right-4 lg:-right-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-xl px-5 py-4 border border-slate-100 dark:border-slate-700 flex flex-col items-center min-w-[130px] animate-float-slow z-20">
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white leading-none">
                15M+
              </span>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 text-center mt-1 leading-tight">
                Verified<br />Contacts
              </span>
            </div>

            {/* left: 90% Data Accuracy */}
            <div className="absolute top-1/3 -left-4 lg:-left-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-xl px-5 py-4 border border-slate-100 dark:border-slate-700 min-w-[130px] animate-float-medium z-20">
              <span className="text-2xl font-extrabold text-teal-600 dark:text-teal-400 leading-none">
                90%+
              </span>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 leading-tight">
                Data Accuracy
              </p>
            </div>

            {/* bottom-right: Direct Dial & Email */}
            <div className="absolute -bottom-4 -right-4 lg:-right-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl shadow-xl px-5 py-4 border border-slate-100 dark:border-slate-700 min-w-[130px] animate-float-fast z-20">
              <span className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                Direct Dial<br />&amp; Email
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* float animation keyframes injected via style tag */}
      <style>{`
        @keyframes floatA {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes floatC {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow  { animation: floatA 4.5s ease-in-out infinite; }
        .animate-float-medium { animation: floatB 3.8s ease-in-out infinite 0.6s; }
        .animate-float-fast  { animation: floatC 3.2s ease-in-out infinite 1.1s; }
      `}</style>
    </section>
  );
}