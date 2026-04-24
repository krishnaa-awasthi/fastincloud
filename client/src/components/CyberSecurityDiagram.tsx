import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const hexSize = 90; // flat-to-flat radius in px
const hexW = hexSize * 2;
const hexH = Math.sqrt(3) * hexSize;

function Hexagon({
  label,
  color,
  textColor = "#fff",
  size = hexSize,
  center = false,
}: {
  label: string;
  color: string;
  textColor?: string;
  size?: number;
  center?: boolean;
}) {
  const w = size * 2;
  const h = Math.sqrt(3) * size;
  const pts = [
    [w / 2, 0],
    [w, h * 0.25],
    [w, h * 0.75],
    [w / 2, h],
    [0, h * 0.75],
    [0, h * 0.25],
  ]
    .map(([x, y]) => `${x},${y}`)
    .join(" ");

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      style={{ display: "block", overflow: "visible" }}
      className="drop-shadow-2xl hover:scale-105 transition-transform duration-300"
    >
      {/* Neon Glow Filter */}
      <defs>
        <filter id={`glow-${label.replace(/\s+/g, "")}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Hexagon Shape */}
      <polygon 
        points={pts} 
        fill="#0A0A0A" 
        stroke={color} 
        strokeWidth={center ? 4 : 2} 
        filter={center ? `url(#glow-${label.replace(/\s+/g, "")})` : "none"}
      />
      
      {/* Inner subtle glow for non-center */}
      {!center && (
        <polygon 
          points={pts} 
          fill={color} 
          opacity="0.05"
        />
      )}

      {/* Text Label */}
      <text
        x={w / 2}
        y={h / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fill={textColor}
        fontSize={center ? 14 : 16}
        fontWeight="700"
        fontFamily="'Inter', sans-serif"
        letterSpacing="0.05em"
        style={{ userSelect: "none" }}
      >
        {center ? (
          <>
            <tspan x={w / 2} dy="-0.8em" fontSize={12} fill="#06b6d4" fontWeight="800">
              CORE
            </tspan>
            <tspan x={w / 2} dy="1.6em">
              {label}
            </tspan>
          </>
        ) : (
          label
        )}
      </text>
    </svg>
  );
}

function Pill({
  label,
  color,
}: {
  label: string;
  color: string;
}) {
  return (
    <div
      style={{
        background: "rgba(10, 10, 10, 0.8)",
        backdropFilter: "blur(8px)",
        border: `1px solid rgba(255, 255, 255, 0.1)`,
        borderLeft: `3px solid ${color}`,
        color: "#cbd5e1", // slate-300
        borderRadius: "8px",
        padding: "8px 16px",
        fontSize: "13px",
        fontWeight: 600,
        fontFamily: "'Inter', sans-serif",
        whiteSpace: "nowrap",
        letterSpacing: "0.02em",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.5)",
      }}
      className="hover:text-white hover:bg-white/5 transition-colors duration-300"
    >
      {label}
    </div>
  );
}

// Tech/Cyber Neon Colors
const CYAN = "#06b6d4";
const BLUE = "#3b82f6";
const PURPLE = "#a855f7";
const EMERALD = "#10b981";
const AMBER = "#f59e0b";
const ROSE = "#f43f5e";
const CENTER_COLOR = "#06b6d4";

export function CyberSecurityDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          once: true,
        },
      });

      // 1. Pop the central "Fast in Cloud" hex first
      tl.fromTo(
        ".hex-center",
        { opacity: 0, scale: 0, rotation: -30 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.6, ease: "back.out(1.7)" }
      );

      // 2. Pop the surrounding hexes radiating outward
      tl.fromTo(
        ".hex-node",
        { opacity: 0, scale: 0.5 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.5, 
          stagger: 0.1, 
          ease: "back.out(1.5)" 
        },
        "-=0.2"
      );

      // 3. Slide and fade the pills out from their parent hexes
      const pills = gsap.utils.toArray<HTMLElement>(".pill-group");
      tl.fromTo(
        pills,
        { opacity: 0, x: (i) => (i % 2 === 0 ? 30 : -30) },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.6, 
          stagger: 0.05, 
          ease: "power3.out" 
        },
        "-=0.2"
      );
    },
    { scope: containerRef }
  );

  const CW = 170; // cell width
  const CH = 148; // cell height

  // Row heights
  const R0 = 0;
  const R1 = CH * 0.88;
  const R2 = CH * 1.76;

  // Col centers
  const C0 = 0;
  const C1 = CW;
  const C2 = CW * 2;

  // Layout math
  const hexPositions = {
    endpoint:    { cx: C1 + CW / 2, cy: R0 },
    network:     { cx: C2 + CW / 2, cy: R0 },
    cloud:       { cx: C0 + CW / 2, cy: R1 },
    center:      { cx: C1 + CW / 2, cy: R1 },
    data:        { cx: C2 + CW / 2, cy: R1 },
    users:       { cx: C1 + CW / 2 - CW * 0.5 + 10, cy: R2 + 4 },
    application: { cx: C2 + CW / 2 + CW * 0.5 - 10, cy: R2 + 4 },
  };

  const containerW = 660;
  const containerH = R2 + CH + 20;
  const HS = 82; // hex size
  const HH = Math.sqrt(3) * HS;

  return (
    <div
      ref={containerRef}
      className="w-full overflow-x-auto py-16 hide-scrollbar"
    >
      <div
        style={{
          position: "relative",
          width: containerW,
          margin: "0 auto",
          height: containerH + 20,
        }}
      >
        {/* ── HEXAGONS ── */}

        <div className="hex-node" style={{ position: "absolute", left: hexPositions.endpoint.cx - HS, top: hexPositions.endpoint.cy }}>
          <Hexagon label="Endpoint" color={CYAN} size={HS} />
        </div>

        <div className="hex-node" style={{ position: "absolute", left: hexPositions.network.cx - HS, top: hexPositions.network.cy }}>
          <Hexagon label="Network" color={BLUE} size={HS} />
        </div>

        <div className="hex-node" style={{ position: "absolute", left: hexPositions.cloud.cx - HS, top: hexPositions.cloud.cy }}>
          <Hexagon label="Cloud" color={PURPLE} size={HS} />
        </div>

        <div className="hex-center z-10" style={{ position: "absolute", left: hexPositions.center.cx - HS, top: hexPositions.center.cy }}>
          <Hexagon label="Fast In Cloud" color={CENTER_COLOR} textColor="#fff" size={HS} center />
        </div>

        <div className="hex-node" style={{ position: "absolute", left: hexPositions.data.cx - HS, top: hexPositions.data.cy }}>
          <Hexagon label="Data" color={EMERALD} size={HS} />
        </div>

        <div className="hex-node" style={{ position: "absolute", left: hexPositions.users.cx - HS, top: hexPositions.users.cy }}>
          <Hexagon label="Users" color={AMBER} size={HS} />
        </div>

        <div className="hex-node" style={{ position: "absolute", left: hexPositions.application.cx - HS, top: hexPositions.application.cy }}>
          <Hexagon label="Application" color={ROSE} size={HS} />
        </div>

        {/* ── PILL GROUPS ── */}

        {/* Endpoint pills (Left) */}
        <div className="pill-group flex flex-col gap-2.5 absolute z-20" style={{ left: hexPositions.endpoint.cx - HS - 148, top: hexPositions.endpoint.cy + HH * 0.15 }}>
          <Pill label="AV / EDR / XDR" color={CYAN} />
          <Pill label="DLP / Encryption" color={CYAN} />
          <Pill label="MDM" color={CYAN} />
        </div>

        {/* Network pills (Right) */}
        <div className="pill-group flex flex-col gap-2.5 absolute z-20" style={{ left: hexPositions.network.cx + HS + 8, top: hexPositions.network.cy + HH * 0.1 }}>
          <Pill label="Firewall" color={BLUE} />
          <Pill label="HIDS / HIPS" color={BLUE} />
          <Pill label="ZTNA" color={BLUE} />
        </div>

        {/* Cloud pills (Left) */}
        <div className="pill-group flex flex-col gap-2.5 absolute z-20" style={{ left: hexPositions.cloud.cx - HS - 110, top: hexPositions.cloud.cy + HH * 0.15 }}>
          <Pill label="CASB" color={PURPLE} />
          <Pill label="CSPM" color={PURPLE} />
          <Pill label="ASM" color={PURPLE} />
        </div>

        {/* Data pills (Right) */}
        <div className="pill-group flex flex-col gap-2.5 absolute z-20" style={{ left: hexPositions.data.cx + HS + 8, top: hexPositions.data.cy + HH * 0.15 }}>
          <Pill label="DLP" color={EMERALD} />
          <Pill label="Encryption" color={EMERALD} />
          <Pill label="IRM / DRM" color={EMERALD} />
        </div>

        {/* Users pills (Left) */}
        <div className="pill-group flex flex-col gap-2.5 absolute z-20" style={{ left: hexPositions.users.cx - HS - 130, top: hexPositions.users.cy + HH * 0.15 }}>
          <Pill label="IAM / PAM" color={AMBER} />
          <Pill label="Email" color={AMBER} />
          <Pill label="UBA" color={AMBER} />
        </div>

        {/* Application pills (Right) */}
        <div className="pill-group flex flex-col gap-2.5 absolute z-20" style={{ left: hexPositions.application.cx + HS + 8, top: hexPositions.application.cy + HH * 0.15 }}>
          <Pill label="WAF" color={ROSE} />
          <Pill label="CDN" color={ROSE} />
          <Pill label="Threat Intel" color={ROSE} />
        </div>

      </div>
    </div>
  );
}