"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {Button} from "@/components/ui/button";
import { CTABanner } from "@/components/CTABanner";
import { DemoModal } from "@/components/DemoModal";
import { useState } from "react";
import { 
  Users, 
  Calendar, 
  Mail, 
  Phone, 
  Database, 
  MonitorPlay, 
  Mic, 
  Presentation, 
  Rocket, 
  UserCheck, 
  Briefcase, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Ticket,
  Filter,
  BarChart3
} from "lucide-react";

export default function EventAudiencePage() {

    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  return (
    <div className="bg-[#F8FAFC] text-slate-900 font-sans min-h-screen overflow-hidden">
        <Navbar onBookDemo={() => setIsDemoModalOpen(true)} />
      {/* ================= HERO SECTION (Consistent SaaS UI) ================= */}
      <section className="relative pt-24 pb-20 px-8 overflow-hidden z-0">
        {/* Subtle Background Gradients */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Content */}
          <div className="space-y-6 z-10">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              Fill Your Events with the <br className="hidden lg:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">
                Right Audience
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Whether it’s a webinar, conference, or corporate event, we help you attract highly relevant attendees who match your target audience and drive meaningful engagement.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
              onClick={() => setIsDemoModalOpen(true)}>
                Get Event Audience
              </Button>
              <Button 
              onClick={() => setIsDemoModalOpen(true)}>
                Plan Your Next Event
              </Button>
            </div>

            </div>

          {/* RIGHT: Event RSVP Dashboard Mockup */}
          <div className="relative z-10 hidden lg:block">
            {/* Main Glass Panel */}
            <div className="bg-white/60 backdrop-blur-xl border border-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-5 relative z-10">
              
              {/* Top Nav Mockup */}
              <div className="flex items-center justify-between mb-5 px-1">
                <span className="font-semibold text-sm text-slate-800 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse"></div> Live RSVP Tracker
                </span>
                <div className="bg-white border border-slate-100 shadow-sm rounded-lg px-3 py-1.5 text-xs text-slate-400 flex items-center gap-2">
                  <Filter className="w-3 h-3"/> Tech Summit 2026
                </div>
              </div>

              {/* Event Metrics Mockup */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm relative overflow-hidden flex flex-col justify-center">
                  <span className="text-xs font-semibold text-slate-500 block mb-1">Total Registrations</span>
                  <span className="text-3xl font-bold text-slate-800">850</span>
                  <div className="absolute bottom-0 right-0 p-2 opacity-10">
                    <Users className="w-16 h-16 text-blue-600" />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
                  <span className="text-xs font-semibold text-slate-500 mb-3 block">Target Audience Mix</span>
                  <div className="space-y-2">
                    <div className="w-[75%] bg-blue-50 rounded text-xs flex justify-between px-2 py-1"><span className="text-blue-600">CXOs/VP</span> <span className="font-bold text-blue-700">65%</span></div>
                    <div className="w-[50%] bg-teal-50 rounded text-xs flex justify-between px-2 py-1"><span className="text-teal-600">Directors</span> <span className="font-bold text-teal-700">25%</span></div>
                    <div className="w-[30%] bg-slate-100 rounded text-xs flex justify-between px-2 py-1"><span className="text-slate-600">Managers</span> <span className="font-bold text-slate-700">10%</span></div>
                  </div>
                </div>
              </div>

              {/* Attendee Table Mockup */}
              <div className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm">
                <div className="grid grid-cols-12 gap-4 bg-slate-50/80 px-4 py-2.5 text-xs font-semibold text-slate-500 border-b border-slate-100">
                  <div className="col-span-6">Attendee Profile</div>
                  <div className="col-span-3">Role</div>
                  <div className="col-span-3 text-right">Status</div>
                </div>
                
                <div className="grid grid-cols-12 gap-4 px-4 py-3.5 text-sm items-center border-b border-slate-50">
                  <div className="col-span-6 flex items-center gap-3 font-medium text-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs">M</div> 
                    <div>
                      <p className="font-semibold">Meera Reddy</p>
                      <p className="text-[10px] text-slate-500">TechCorp India</p>
                    </div>
                  </div>
                  <div className="col-span-3 text-xs text-slate-600">CTO</div>
                  <div className="col-span-3 flex justify-end">
                    <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wide flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3"/> RSVP'd
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4 px-4 py-3.5 text-sm items-center">
                  <div className="col-span-6 flex items-center gap-3 font-medium text-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs">J</div> 
                    <div>
                      <p className="font-semibold">James Wilson</p>
                      <p className="text-[10px] text-slate-500">Global FinServe</p>
                    </div>
                  </div>
                  <div className="col-span-3 text-xs text-slate-600">VP Marketing</div>
                  <div className="col-span-3 flex justify-end">
                    <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wide flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3"/> RSVP'd
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Metric Cards (Matches previous styles) */}
            <div className="absolute -top-6 right-8 bg-white/90 backdrop-blur-md border border-white p-3.5 rounded-xl shadow-xl flex items-center gap-3 z-20 transition-transform hover:-translate-y-1">
              <div className="p-2 bg-teal-50 rounded-lg"><UserCheck className="w-5 h-5 text-teal-600" /></div>
              <div>
                <p className="text-sm font-bold text-slate-800">High Attendance</p>
                <p className="text-xs text-slate-500">Minimized Drop-offs</p>
              </div>
            </div>

            <div className="absolute bottom-16 -left-10 bg-white/90 backdrop-blur-md border border-white p-3.5 rounded-xl shadow-xl flex items-center gap-3 z-20 transition-transform hover:-translate-y-1">
              <div className="p-2 bg-blue-50 rounded-lg"><Briefcase className="w-5 h-5 text-blue-600" /></div>
              <div>
                <p className="text-sm font-bold text-slate-800">Targeted CXOs</p>
                <p className="text-xs text-slate-500">Decision Makers Only</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EVENT TYPES WE SUPPORT (Matches Global Database section style) ================= */}
      <section className="py-20 px-8 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Event Types We Support</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From virtual sessions to large-scale physical conferences, we deliver the right crowd.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { type: "Webinars", icon: <MonitorPlay className="w-6 h-6 text-blue-500"/> },
            { type: "Conferences", icon: <Presentation className="w-6 h-6 text-blue-500"/> },
            { type: "Roundtables", icon: <Mic className="w-6 h-6 text-blue-500"/> },
            { type: "Product Launches", icon: <Rocket className="w-6 h-6 text-blue-500"/> },
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-lg">{item.type}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MAIN GRID: SERVICES & TARGET AUDIENCE (Matches Main Grid style) ================= */}
      <section className="py-20 px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* LEFT COLUMN: Our Services */}
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Services</h2>
            <div className="space-y-4">
              {[
                { name: "Audience Identification", icon: <Users className="text-blue-600 w-5 h-5"/> },
                { name: "Database Curation", icon: <Database className="text-teal-600 w-5 h-5"/> },
                { name: "Email Invitations", icon: <Mail className="text-blue-600 w-5 h-5"/> },
                { name: "RSVP Management", icon: <Ticket className="text-teal-600 w-5 h-5"/> },
                { name: "Tele-calling & Follow-ups", icon: <Phone className="text-blue-600 w-5 h-5"/> },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                  <div className="bg-blue-50 p-2.5 rounded-lg">{item.icon}</div>
                  <span className="font-semibold text-slate-700 text-lg">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Target Audience */}
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Target Audience</h2>
            <div className="overflow-hidden border border-slate-200 rounded-xl shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-blue-200 text-slate-700">
                  <tr>
                    <th className="p-4 font-semibold">Audience Segment</th>
                    <th className="p-4 font-semibold text-center">Verified Targeting</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {[
                    "CXOs & Decision Makers",
                    "Industry Professionals",
                    "Functional Heads (HR, IT, Marketing, etc.)",
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-medium text-slate-700">{row}</td>
                      <td className="p-4 text-center">
                        <CheckCircle2 className="w-5 h-5 text-teal-500 mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Extra visual block consistent with previous right columns */}
            <div className="mt-8 bg-blue-50 border border-blue-100 p-6 rounded-xl text-center">
              <Database className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <p className="font-semibold text-blue-900 mb-1">Custom Audience Built for You</p>
              <p className="text-sm text-blue-700">We don't just blast lists. We curate attendees based on your exact buyer persona and event topic.</p>
            </div>
          </div>
        </div>

      </section>

      {/* ================= KEY BENEFITS (Matches Data Accuracy / Why It Works style) ================= */}
      <section className="py-20 px-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Benefits</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto items-start">
          {[
            { title: "Higher Attendance", desc: "Rigorous follow-ups to ensure registrants actually show up.", icon: <TrendingUp className="text-teal-600"/> },
            { title: "Relevant Audience", desc: "Zero fluff. We only invite prospects who match your ICP.", icon: <UserCheck className="text-blue-600"/> },
            { title: "Better Engagement", desc: "Attendees are primed and interested in your specific topic.", icon: <Mic className="text-teal-600"/> },
            { title: "Improved ROI", desc: "Turn event expenses into measurable pipeline and sales.", icon: <BarChart3 className="text-blue-600"/> },
          ].map((feature, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
                {feature.icon}
              </div>
              <p className="font-bold text-slate-800 mb-2">{feature.title}</p>
              <p className="text-sm text-slate-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

          <CTABanner onBookDemo={() => setIsDemoModalOpen(true)} />

          <Footer/>

          <DemoModal
            open={isDemoModalOpen}  
            onOpenChange={setIsDemoModalOpen}
          />
    </div>
  );
}