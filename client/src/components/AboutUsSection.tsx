import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { 
  History, 
  Target, 
  CheckCircle2,
  Milestone,
  Zap,
  TrendingUp,
  Users,
  LineChart,
  Calendar,
  Search,
  Rocket
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const timelineData = [
  {
    date: "November 2017",
    title: "Inception",
    desc: "Incepted with focus in cyber security in a niche market.",
  },
  {
    date: "April 2018",
    title: "First Client & Operations",
    desc: "Started actual operations with our first client acquisition in the same month, who is still retained with complete satisfaction.",
  },
  {
    date: "June 2018",
    title: "Microsoft Partnership",
    desc: "Signed Microsoft partnership for licenses and cloud services.",
  },
  {
    date: "March 2019",
    title: "100+ Customers",
    desc: "Achieved a milestone of billing to more than 100 customers across India.",
  },
  {
    date: "March 2020",
    title: "Rapid Growth",
    desc: "Achieved a staggering CAGR of 150%.",
  },
  {
    date: "June 2022",
    title: "TTSL Partnership",
    desc: "Signed partnership MoU with TTSL and achieved Growth partner level in just 1 year of partnership.",
  },
];

// Nodes mapped to the layout in your screenshot
const networkNodes = [
  { id: 1, label: "B2B Marketing & Sales", icon: TrendingUp, x: 15, y: 20 },
  { id: 2, label: "Recruitment", icon: Users, x: 50, y: 10 },
  { id: 3, label: "Finance", icon: LineChart, x: 85, y: 20 },
  { id: 4, label: "Event Marketing", icon: Calendar, x: 85, y: 80 },
  { id: 5, label: "Research", icon: Search, x: 50, y: 90 },
  { id: 6, label: "Go to Market", icon: Rocket, x: 15, y: 80 },
];

export function AboutUsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Timeline Draw Animation
    gsap.to(lineRef.current, {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".timeline-container",
        start: "top 50%",
        end: "bottom 50%",
        scrub: 1,
      },
    });

    const items = gsap.utils.toArray<HTMLElement>(".timeline-item");
    items.forEach((item, i) => {
      const isLeft = i % 2 === 0;
      const card = item.querySelector(".timeline-card");
      const dot = item.querySelector(".timeline-dot");

      gsap.set(card, { opacity: 0, x: isLeft ? -50 : 50 });
      gsap.set(dot, { scale: 0, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(dot, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" })
        .to(card, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, "-=0.2");
    });

    // 2. Network Hub Animation (Pop Effects)
    const tlNet = gsap.timeline({
      scrollTrigger: {
        trigger: networkRef.current,
        start: "top 60%", // Triggers when the top of the network hits 60% of viewport
        toggleActions: "play none none reverse",
      }
    });

    // Animate the center core first
    tlNet.fromTo(".net-center", 
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.5)" }
    );

    // Fade in the connecting lines
    tlNet.fromTo(".net-line", 
      { opacity: 0 },
      { opacity: 0.4, duration: 0.5, stagger: 0.1, ease: "power2.inOut" },
      "-=0.2"
    );

    // Pop the outer nodes in sequentially
    tlNet.fromTo(".net-node", 
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" },
      "-=0.4"
    );

  }, { scope: sectionRef });

  return (
    <section id="about" ref={sectionRef} className="bg-[#050505] overflow-x-clip">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. HEADER & STORY/MISSION CARDS                               */}
      {/* ------------------------------------------------------------- */}
      <div className="py-24 px-4 sm:px-8 max-w-7xl mx-auto space-y-24">
        
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-xs font-bold text-cyan-500 uppercase tracking-[0.2em] mb-4">
            About Fast In Cloud
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Transform Your Business With <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Managed & Digital Solutions
            </span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="relative flex flex-col bg-[#0A0A0A] border border-white/10 rounded-2xl p-10 hover:bg-[#0f0f0f] transition-all duration-300 group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-14 h-14 bg-black border border-white/10 rounded-xl flex items-center justify-center mb-8 group-hover:border-cyan-500/50 transition-colors">
              <History className="w-6 h-6 text-cyan-400" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Our Background</h4>
            <div className="space-y-4 text-slate-400 leading-relaxed font-medium">
              <p>
                Fast in Cloud started its operations in 2018 to provide cutting edge technology solutions for small and medium-sized businesses to large enterprises. 
              </p>
              <p>
                Our mission from the very first day has been to cultivate professional relationships with our clients to provide effective and reliable information technology solutions for their needs.
              </p>
              <p>
                Our offering spans from software licensing and procurement to Cloud Solutions, IT Security, Cyber Security and every aspect of cloud-first advisory, delivery and managed solutions.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col bg-[#0A0A0A] border border-white/10 rounded-2xl p-10 hover:bg-[#0f0f0f] transition-all duration-300 group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-14 h-14 bg-black border border-white/10 rounded-xl flex items-center justify-center mb-8 group-hover:border-cyan-500/50 transition-colors">
              <Target className="w-6 h-6 text-cyan-400" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Our Mission</h4>
            <p className="text-slate-400 leading-relaxed font-medium mb-8">
              We empower organizations by eliminating technical overhead, ensuring you can focus on scaling your business securely and efficiently.
            </p>
            <div className="space-y-5 mt-auto">
              {[
                "Provide cutting edge technology solutions for SMBs to large enterprises",
                "Ensure a Security-First approach with built-in protection",
                "Deliver Automated & Hassle-Free Migrations with zero downtime",
                "Maintain industry-leading GDPR, DPDP, and IT Act compliance"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500"/>
                  </div>
                  <span className="text-slate-300 font-medium leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 2. OUR STORY TIMELINE                                         */}
        {/* ------------------------------------------------------------- */}
        <div className="pt-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Milestone className="w-4 h-4" /> Company Timeline
            </div>
            <h3 className="text-3xl font-bold text-white tracking-tight">Our Journey So Far</h3>
          </div>

          <div className="timeline-container relative max-w-5xl mx-auto py-10">
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 rounded-full" />
            <div 
              ref={lineRef}
              className="absolute left-[20px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-cyan-400 to-blue-600 shadow-[0_0_15px_rgba(34,211,238,0.5)] -translate-x-1/2 h-0 rounded-full z-0" 
            />

            <div className="flex flex-col gap-12 md:gap-20">
              {timelineData.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={index} className="timeline-item relative flex items-center md:justify-between w-full">
                    <div className="timeline-dot hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#050505] border-4 border-cyan-500 items-center justify-center z-10 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                      <div className="w-2.5 h-2.5 bg-white rounded-full" />
                    </div>
                    <div className="timeline-dot md:hidden absolute left-[20px] -translate-x-1/2 w-6 h-6 rounded-full bg-[#050505] border-[3px] border-cyan-500 z-10 shadow-[0_0_15px_rgba(34,211,238,0.4)]" />

                    {isLeft ? null : <div className="hidden md:block w-5/12" />}

                    <div className={`timeline-card w-full md:w-5/12 pl-12 md:pl-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="relative flex flex-col bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-[#0f0f0f] transition-colors group overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="text-cyan-400 font-bold tracking-widest text-sm mb-2 uppercase">{item.date}</span>
                        <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                        <p className="text-slate-400 font-medium text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    {isLeft ? <div className="hidden md:block w-5/12" /> : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default AboutUsSection;