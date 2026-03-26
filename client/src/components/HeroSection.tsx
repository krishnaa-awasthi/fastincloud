"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onBookDemo: () => void;
}

export function HeroSection({ onBookDemo }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    /* ---- trend line definitions ----
       Each line travels from bottom-left region to top-right region.
       It's a smooth stock-chart style curve built with quadratic bezier segments.
       We animate a "draw" progress [0..1] that extends the visible portion,
       and after fully drawn, a glowing "pulse dot" travels along the path.
    */
    interface TrendLine {
      points: { x: number; y: number }[];   // key waypoints
      color: string;
      alpha: number;
      width: number;
      dashOffset: number;
      speed: number;       // pixels per frame for the travelling dot
      dotPos: number;      // 0..totalLength
      totalLength: number;
      drawProgress: number; // 0..1 reveal animation
    }

    const buildTrendPoints = (
      startXFrac: number,   // 0..1 fraction of canvas width
      startYFrac: number,   // 0..1 fraction of canvas height (1 = bottom)
      endXFrac: number,
      endYFrac: number,
      jitter: number        // adds small mid-point bumps for a chart feel
    ) => {
      const w = canvas.width;
      const h = canvas.height;
      const steps = 8;
      const pts: { x: number; y: number }[] = [];
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        // lerp with a slight upward acceleration (trend bias)
        const x = (startXFrac + (endXFrac - startXFrac) * t) * w;
        const baseY = (startYFrac + (endYFrac - startYFrac) * t) * h;
        // add noise that looks like price fluctuation
        const noise = (Math.random() - 0.5) * jitter * h;
        pts.push({ x, y: baseY + noise });
      }
      // make first/last exact
      pts[0] = { x: startXFrac * w, y: startYFrac * h };
      pts[steps] = { x: endXFrac * w, y: endYFrac * h };
      return pts;
    };

    // 5 trend lines, all going bottom-left → top-right
    const trendLines: TrendLine[] = [
      { points: buildTrendPoints(0.0, 0.98, 1.0, 0.10, 0.06), color: "59,130,246", alpha: 0.18, width: 1.5, dashOffset: 0, speed: 2.2, dotPos: 0, totalLength: 0, drawProgress: 0 },
      { points: buildTrendPoints(0.0, 0.88, 0.95, 0.22, 0.05), color: "37,99,235",  alpha: 0.13, width: 1.2, dashOffset: 0, speed: 1.8, dotPos: 0, totalLength: 0, drawProgress: 0 },
      { points: buildTrendPoints(0.0, 0.75, 1.0, 0.35, 0.04), color: "96,165,250", alpha: 0.22, width: 2.0, dashOffset: 0, speed: 2.8, dotPos: 0, totalLength: 0, drawProgress: 0 },
      { points: buildTrendPoints(0.05, 1.0, 0.85, 0.05, 0.07), color: "30,64,175",  alpha: 0.10, width: 1.0, dashOffset: 0, speed: 1.5, dotPos: 0, totalLength: 0, drawProgress: 0 },
      { points: buildTrendPoints(0.0, 0.62, 0.90, 0.48, 0.03), color: "147,197,253",alpha: 0.15, width: 1.3, dashOffset: 0, speed: 2.0, dotPos: 0, totalLength: 0, drawProgress: 0 },
    ];

    // helper: get point along a polyline at distance d
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

    // compute total lengths
    trendLines.forEach((tl) => {
      let len = 0;
      for (let i = 1; i < tl.points.length; i++) {
        const dx = tl.points[i].x - tl.points[i - 1].x;
        const dy = tl.points[i].y - tl.points[i - 1].y;
        len += Math.sqrt(dx * dx + dy * dy);
      }
      tl.totalLength = len;
      // stagger initial dot positions
      tl.dotPos = Math.random() * len;
      // stagger reveal
      tl.drawProgress = Math.random() * 0.4;
    });

    // dots
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

      /* ==== TREND LINES ==== */
      trendLines.forEach((tl) => {
        // Advance reveal
        if (tl.drawProgress < 1) tl.drawProgress = Math.min(1, tl.drawProgress + 0.003);

        const visibleLength = tl.totalLength * tl.drawProgress;

        // Draw the line up to visibleLength
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
            ctx.lineTo(
              tl.points[i - 1].x + dx * t,
              tl.points[i - 1].y + dy * t
            );
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

        // Glowing travelling dot
        if (tl.drawProgress > 0.3) {
          tl.dotPos = (tl.dotPos + tl.speed) % tl.totalLength;
          // keep dot within visible portion
          const dotD = tl.dotPos % visibleLength;
          const pos = pointAtDist(tl.points, dotD);

          // outer glow
          const grd = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 8);
          grd.addColorStop(0, `rgba(${tl.color},0.7)`);
          grd.addColorStop(1, `rgba(${tl.color},0)`);
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 8, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();

          // core dot
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${tl.color},0.9)`;
          ctx.fill();
        }
      });

      // dots + connections
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

  /* ---------- trusted-by logos ---------- */
  const trustedLogos = [
    { name: "AUTODESK", icon: "A" },
    { name: "Fintech", icon: "F" },
    { name: "Autoopaptic", icon: "⚙" },
    { name: "DecoGuan", icon: "◇" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50/30 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-6 max-w-xl">

            {/* headline */}
            <h1
              className="text-2xl sm:text-3xl font-extrabold leading-[1.08] tracking-tight text-gray-900 dark:text-white"
              style={{ fontFamily: "'Sora', 'DM Sans', sans-serif" }}
            >
              Accelerate Your B2B Growth with{" "}
              <span className="block text-primary text-4xl sm:text-5xl">Data, Demand Generation</span>
              <span className="block text-primary text-4xl sm:text-5xl">& Event Reach</span>
              <span className="block text-gray-900 dark:text-white">
              That Drives Real Pipeline
              </span>
            </h1>

            {/* sub-copy */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
             MQL Experts helps businesses generate high-quality leads through 90%+ accurate global data,
             targeted demand generation campaigns, and event audience outreach.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Button
                onClick={onBookDemo}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white text-sm transition-all duration-200 shadow-lg hover:shadow-cyan-300/40 active:scale-[0.98]"
                
              >
                Get Verified Leads
              </Button>

              <button
                onClick={onBookDemo}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200 active:scale-[0.98]"
              >
                Request Sample Data
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* trusted by */}
            <div className="pt-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                Trusted by
              </p>
              <div className="flex flex-wrap items-center gap-6">
                {trustedLogos.map((logo) => (
                  <div
                    key={logo.name}
                    className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                  >
                    <span className="text-sm font-bold opacity-70">{logo.icon}</span>
                    <span className="text-xs font-semibold tracking-wide">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN – Dashboard Mockup ── */}
          <div className="relative flex justify-center lg:justify-end">
            {/* glow behind card */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 rounded-full bg-cyan-300/20 dark:bg-cyan-500/10 blur-3xl" />
            </div>

            {/* main dashboard card */}
            <div
              className="relative w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-200/80 dark:border-slate-700/60 backdrop-blur-sm"
              style={{ background: "rgba(255,255,255,0.92)" }}
            >
              {/* browser chrome top bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100/80 dark:bg-slate-800/80 border-b border-slate-200/60 dark:border-slate-700/60">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="flex gap-2 text-[10px] font-medium text-slate-500">
                  <span className="px-3 py-0.5 rounded bg-white dark:bg-slate-700 shadow-sm border border-slate-200 dark:border-slate-600">
                    Dashboard
                  </span>
                  <span className="px-3 py-0.5 rounded text-slate-400">Sesh-Tene ▾</span>
                </div>
                <button
                  onClick={onBookDemo}
                  className="text-[10px] px-3 py-1 rounded font-semibold text-white"
                  style={{ background: "linear-gradient(135deg,#06b6d4,#0891b2)" }}
                >
                  Request a Quote
                </button>
              </div>

              {/* sidebar + content */}
              <div className="flex">
                {/* sidebar */}
                <div className="flex flex-col items-center gap-4 px-2.5 py-4 bg-slate-50/80 dark:bg-slate-900/50 border-r border-slate-200/60 dark:border-slate-700/60">
                  {["▣", "≡", "✦", "⚙"].map((icon, i) => (
                    <div
                      key={i}
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs cursor-pointer transition-colors ${
                        i === 0
                          ? "bg-cyan-500 text-white shadow"
                          : "text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                      }`}
                    >
                      {icon}
                    </div>
                  ))}
                </div>

                {/* main content */}
                <div className="flex-1 p-4">
                  {/* title + filter row */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-100">
                      Company Profiles
                    </span>
                    <button className="flex items-center gap-1 text-[10px] text-slate-500 border border-slate-200 dark:border-slate-600 rounded px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                      ⊟ Filters
                    </button>
                  </div>

                  {/* filter chips */}
                  <div className="flex gap-1.5 mb-3 flex-wrap">
                    {["Industry", "SaaS ×", "Fintech ×", "PeaaS ×", "…"].map(
                      (chip, i) => (
                        <span
                          key={i}
                          className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${
                            i === 0
                              ? "text-slate-500 border-slate-300 dark:border-slate-600 bg-transparent"
                              : i < 4
                              ? "text-cyan-700 bg-cyan-50 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-700"
                              : "text-slate-400 border-slate-200 dark:border-slate-700"
                          }`}
                        >
                          {chip}
                        </span>
                      )
                    )}
                    <span className="text-[10px] px-2 py-0.5 rounded-full border text-slate-500 border-slate-300 dark:border-slate-600 ml-auto">
                      Revenue
                    </span>
                    {["$10M–$50M ×", "$10M–$50M ×"].map((r, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-700 font-medium"
                      >
                        {r}
                      </span>
                    ))}
                  </div>

                  {/* column headers */}
                  <div className="grid grid-cols-3 text-[10px] font-semibold text-slate-400 uppercase tracking-wider px-2 mb-1">
                    <span>Profile ↕</span>
                    <span>Contact</span>
                    <span />
                  </div>

                  {/* rows */}
                  {[
                    { name: "Acme Corp", role: "CEO, CTO · Verified", color: "#ef4444" },
                    { name: "Acme Corp", role: "CEO, CTO · Verified", color: "#f59e0b" },
                    { name: "Acme Corp", role: "CEO, CTO · Verified", color: "#10b981" },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 items-center py-2 px-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-b border-slate-100 dark:border-slate-800/50 last:border-0"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm flex-shrink-0"
                          style={{ background: row.color }}
                        >
                          A
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-800 dark:text-slate-100 leading-tight">
                            {row.name}
                          </div>
                          <div className="text-[10px] text-slate-400">{row.role}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {["📞", "☎", "✉"].map((icon, j) => (
                          <button
                            key={j}
                            className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-cyan-100 dark:hover:bg-cyan-900/40 flex items-center justify-center text-[10px] transition-colors"
                          >
                            {icon}
                          </button>
                        ))}
                      </div>
                      <div className="flex justify-end">
                        {i === 1 && (
                          <button className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-xs">
                            ···
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── floating stat badges ── */}
            {/* top-right: 15M+ Verified Contacts */}
            <div
              className="absolute -top-4 -right-4 lg:-right-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl px-4 py-3 border border-slate-100 dark:border-slate-700 flex flex-col items-center min-w-[120px] animate-float-slow"
            >
              <span className="text-xl font-extrabold text-slate-900 dark:text-white leading-none">
                15M+
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 text-center mt-0.5 leading-tight">
                Verified<br />Contacts
              </span>
            </div>

            {/* left: 90% Data Accuracy */}
            <div
              className="absolute top-1/3 -left-4 lg:-left-8 bg-white dark:bg-slate-800 rounded-xl shadow-xl px-4 py-3 border border-slate-100 dark:border-slate-700 min-w-[120px] animate-float-medium"
            >
              <span className="text-xl font-extrabold text-slate-900 dark:text-white leading-none">
                90%
              </span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                Data Accuracy
              </p>
            </div>

            {/* bottom-left: 15M+ Verified */}
            <div
              className="absolute bottom-12 -left-4 lg:-left-8 bg-white dark:bg-slate-800 rounded-xl shadow-xl px-4 py-3 border border-slate-100 dark:border-slate-700 min-w-[110px] animate-float-fast"
            >
              <span className="text-xl font-extrabold text-slate-900 dark:text-white leading-none">
                15M+
              </span>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                Verified
              </p>
            </div>

            {/* bottom-right: Direct Dial & Email */}
            <div
              className="absolute -bottom-4 -right-4 lg:-right-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl px-4 py-3 border border-slate-100 dark:border-slate-700 min-w-[120px] animate-float-slow"
            >
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

