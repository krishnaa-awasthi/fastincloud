"use client";

import { 
  Target, 
  Mail, 
  Linkedin, 
  FileText, 
  Calendar, 
  HeartHandshake,
  CheckCircle2, 
  BarChart3, 
  Users, 
  Laptop, 
  HeartPulse, 
  Factory, 
  Landmark,
  Zap,
  MessageSquare,
  Settings,
  ArrowRight,
  Filter,
  TrendingUp,
  Megaphone
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import {Footer} from "@/components/Footer"
import { Button } from "@/components/ui/button";
import { DemoModal } from "@/components/DemoModal";
import { useState } from "react";
import { CTABanner } from "@/components/CTABanner";


export default function DemandGenerationPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="bg-[#F8FAFC] text-slate-900 font-sans min-h-screen overflow-hidden">
        
        <Navbar onBookDemo={() => setIsDemoModalOpen(true)} />

      {/* ================= HERO SECTION (Consistent with Smart Data) ================= */}
      <section className="relative pt-24 pb-20 px-8 overflow-hidden z-0">
        {/* Subtle Background Gradients */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Content */}
          <div className="space-y-6 z-10">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              Turn Prospects into Pipeline with <br className="hidden lg:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">
                Targeted Demand Gen
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              We design and execute end-to-end demand generation campaigns that help you attract, engage, and convert high-quality leads into predictable revenue.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
              onClick={() => setIsDemoModalOpen(true)}>
                Generate Leads Now
              </Button>
              <Button
              onClick={() => setIsDemoModalOpen(true)}>
                Book a Strategy Call
              </Button>
            </div>

            </div>

          {/* RIGHT: Campaign Dashboard UI Mockup */}
          <div className="relative z-10 hidden lg:block">
            {/* Main Glass Panel */}
            <div className="bg-white/60 backdrop-blur-xl border border-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-5 relative z-10">
              
              {/* Top Nav Mockup */}
              <div className="flex items-center justify-between mb-5 px-1">
                <span className="font-semibold text-sm text-slate-800 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse"></div> Active Campaigns
                </span>
                <div className="bg-white border border-slate-100 shadow-sm rounded-lg px-3 py-1.5 text-xs text-slate-400 flex items-center gap-2">
                  <Filter className="w-3 h-3"/> Last 30 Days
                </div>
              </div>

              {/* Funnel & Metrics Mockup */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
                  <span className="text-xs font-semibold text-slate-500 mb-3 block">Lead Funnel</span>
                  <div className="space-y-2">
                    <div className="w-full bg-slate-50 rounded text-xs flex justify-between px-2 py-1"><span className="text-slate-500">Targeted</span> <span className="font-bold">12,500</span></div>
                    <div className="w-[80%] bg-blue-50 rounded text-xs flex justify-between px-2 py-1"><span className="text-blue-600">Engaged</span> <span className="font-bold text-blue-700">3,240</span></div>
                    <div className="w-[60%] bg-teal-50 rounded text-xs flex justify-between px-2 py-1"><span className="text-teal-600">MQLs</span> <span className="font-bold text-teal-700">450</span></div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm flex flex-col justify-center relative overflow-hidden">
                  <span className="text-xs font-semibold text-slate-500 block mb-1">Conversion Rate</span>
                  <span className="text-3xl font-bold text-slate-800">14.2%</span>
                  <div className="absolute bottom-0 right-0 p-2 opacity-10">
                    <TrendingUp className="w-16 h-16 text-teal-600" />
                  </div>
                </div>
              </div>

              {/* Campaign Table Mockup */}
              <div className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm">
                <div className="grid grid-cols-12 gap-4 bg-slate-50/80 px-4 py-2.5 text-xs font-semibold text-slate-500 border-b border-slate-100">
                  <div className="col-span-6">Channel</div>
                  <div className="col-span-3">Status</div>
                  <div className="col-span-3 text-right">MQLs</div>
                </div>
                
                <div className="grid grid-cols-12 gap-4 px-4 py-3.5 text-sm items-center border-b border-slate-50">
                  <div className="col-span-6 flex items-center gap-3 font-medium text-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center"><Linkedin className="w-4 h-4"/></div> 
                    LinkedIn Outreach
                  </div>
                  <div className="col-span-3">
                    <span className="bg-emerald-50 text-emerald-600 text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wide">Live</span>
                  </div>
                  <div className="col-span-3 text-right font-semibold text-slate-800">210</div>
                </div>

                <div className="grid grid-cols-12 gap-4 px-4 py-3.5 text-sm items-center">
                  <div className="col-span-6 flex items-center gap-3 font-medium text-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center"><Mail className="w-4 h-4"/></div> 
                    Email Sequence #2
                  </div>
                  <div className="col-span-3">
                    <span className="bg-emerald-50 text-emerald-600 text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wide">Live</span>
                  </div>
                  <div className="col-span-3 text-right font-semibold text-slate-800">185</div>
                </div>
              </div>
            </div>

            {/* Floating Metric Cards (Matches Smart Data style) */}
            <div className="absolute -top-6 right-8 bg-white/90 backdrop-blur-md border border-white p-3.5 rounded-xl shadow-xl flex items-center gap-3 z-20 transition-transform hover:-translate-y-1">
              <div className="p-2 bg-teal-50 rounded-lg"><Target className="w-5 h-5 text-teal-600" /></div>
              <div>
                <p className="text-sm font-bold text-slate-800">High-Quality MQLs</p>
                <p className="text-xs text-slate-500">Ready for Sales</p>
              </div>
            </div>

            <div className="absolute top-36 -right-10 bg-white/90 backdrop-blur-md border border-white p-3.5 rounded-xl shadow-xl flex items-center gap-3 z-20 transition-transform hover:-translate-y-1">
              <div className="p-2 bg-blue-50 rounded-lg"><Megaphone className="w-5 h-5 text-blue-600" /></div>
              <div>
                <p className="text-sm font-bold text-slate-800">Multi-Channel</p>
                <p className="text-xs text-slate-500">Email & LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR APPROACH (Matches Global Database section style) ================= */}
      <section className="py-20 px-8 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Our Approach</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A systematic, multi-channel methodology designed to build a predictable, high-converting pipeline.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
          {/* Subtle connecting line behind items */}
          <div className="hidden md:block absolute top-[40%] left-[10%] w-[80%] h-0.5 bg-slate-100 z-0"></div>

          {[
            { step: "01", title: "Audience Targeting", icon: <Users className="text-blue-500"/> },
            { step: "02", title: "Multi-Channel Campaigns", icon: <Zap className="text-teal-500"/> },
            { step: "03", title: "Lead Qualification", icon: <CheckCircle2 className="text-blue-500"/> },
            { step: "04", title: "Delivery of MQLs", icon: <Target className="text-teal-500"/> },
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center hover:shadow-md transition-shadow relative z-10">
              <div className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">Step {item.step}</div>
              <div className="w-12 h-12 bg-white shadow-sm border border-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-1">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES & WHAT YOU GET (Matches Main Grid style) ================= */}
      <section className="py-20 px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* LEFT COLUMN: Services Included */}
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Services Included</h2>
            <div className="space-y-4">
              {[
                { name: "Email Marketing Campaigns", icon: <Mail className="text-blue-600 w-5 h-5"/> },
                { name: "LinkedIn Outreach", icon: <Linkedin className="text-blue-600 w-5 h-5"/> },
                { name: "Content Syndication", icon: <FileText className="text-teal-600 w-5 h-5"/> },
                { name: "Appointment Generation", icon: <Calendar className="text-blue-600 w-5 h-5"/> },
                { name: "Lead Nurturing", icon: <HeartHandshake className="text-teal-600 w-5 h-5"/> },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                  <div className="bg-blue-50 p-2.5 rounded-lg">{item.icon}</div>
                  <span className="font-semibold text-slate-700 text-lg">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: What You Get */}
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What You Get</h2>
            <div className="overflow-hidden border border-slate-200 rounded-xl shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-blue-200 text-slate-700">
                  <tr>
                    <th className="p-4 font-semibold">Deliverable</th>
                    <th className="p-4 font-semibold text-center">Included</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {[
                    "Marketing Qualified Leads (MQLs)",
                    "Verified Contact Details",
                    "Engagement Insights",
                    "Campaign Performance Reports",
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
          </div>
        </div>

      </section>

      {/* ================= INDUSTRIES COVERED (Matches Department Segmentation style) ================= */}
      <section className="py-20 px-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Industries Covered</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
          {[
            { name: "Technology & SaaS", icon: <Laptop className="w-8 h-8 text-blue-500" /> },
            { name: "Healthcare", icon: <HeartPulse className="w-8 h-8 text-teal-500" /> },
            { name: "Manufacturing", icon: <Factory className="w-8 h-8 text-blue-500" /> },
            { name: "BFSI", icon: <Landmark className="w-8 h-8 text-teal-500" /> },
          ].map((industry, i) => (
            <div key={i} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 flex justify-center">{industry.icon}</div>
              <p className="font-bold text-slate-800">{industry.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY IT WORKS (Matches Data Accuracy style) ================= */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why It Works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {[
            { title: "Data-driven targeting", desc: "We utilize precise intent data and firmographics to hit the right inbox.", icon: <BarChart3 className="text-teal-600"/> },
            { title: "Personalized messaging", desc: "Tailored outreach that speaks directly to your buyer's unique pain points.", icon: <MessageSquare className="text-blue-600"/> },
            { title: "Continuous optimization", desc: "Real-time A/B testing and adjustments to maximize conversion rates.", icon: <Settings className="text-teal-600"/> },
          ].map((feature, i) => (
            <div key={i} className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
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