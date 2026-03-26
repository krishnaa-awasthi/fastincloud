"use client";

import { 
  CheckCircle2,
  ArrowRight,
  Flame, 
  Sparkles, 
  Rocket, 
  Globe, 
  BarChart3, 
  Filter,
  CheckCircle,
  MapPin,
  TrendingUp,
  Database
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import {Footer} from "@/components/Footer"
import {CTABanner} from "@/components/CTABanner";


export default function SmartDataPage() {
  return (
    <div className="bg-[#F8FAFC] text-slate-900 font-sans min-h-screen overflow-hidden">
      <Navbar onBookDemo={() => setIsDemoModalOpen(true)} />

      {/* ================= HERO SECTION (SaaS UI 2026) ================= */}
      <section className="relative pt-24 pb-20 px-8 overflow-hidden z-0">
        {/* Subtle Background Gradients */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Content */}
          <div className="space-y-6 z-10">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              Smart Data That Powers Smarter Decisions – <br className="hidden lg:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">
                Across India & Globally
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Our Smart Data solutions provide highly accurate, verified, and actionable B2B databases to fuel your sales and marketing campaigns. We help you connect with decision-makers, influencers, and key stakeholders across India and global markets, enabling seamless expansion and targeted outreach.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button>
                Request Smart Data Demo
              </Button>
              <Button>
                View Data Samples
              </Button>
            </div>

            {/* Trust Logos */}
            
          </div>

          {/* RIGHT: Dashboard UI Mockup */}
          <div className="relative z-10 hidden lg:block">
            {/* Main Glass Panel */}
            <div className="bg-white/60 backdrop-blur-xl border border-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-5 relative z-10">
              
              {/* Top Nav Mockup */}
              <div className="flex items-center justify-between mb-5 px-1">
                <span className="font-semibold text-sm text-slate-800 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></div> Live Lead Intelligence
                </span>
                <div className="bg-white border border-slate-100 shadow-sm rounded-lg px-3 py-1.5 text-xs text-slate-400 flex items-center gap-2">
                  <Filter className="w-3 h-3"/> Filter campaigns...
                </div>
              </div>

              {/* Data Table Mockup */}
              <div className="bg-white rounded-xl border border-slate-100 overflow-hidden mb-5 shadow-sm">
                <div className="grid grid-cols-12 gap-4 bg-slate-50/80 px-4 py-2.5 text-xs font-semibold text-slate-500 border-b border-slate-100">
                  <div className="col-span-4">Company</div>
                  <div className="col-span-5">Verified Decision-maker</div>
                  <div className="col-span-3">Status</div>
                </div>
                
                {/* Row 1 */}
                <div className="grid grid-cols-12 gap-4 px-4 py-3.5 text-sm items-center border-b border-slate-50">
                  <div className="col-span-4 flex items-center gap-3 font-medium text-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-bold">I</div> 
                    Infosys
                  </div>
                  <div className="col-span-5">
                    <p className="font-semibold text-slate-800">Rohan Sharma - VP Sales</p>
                    <p className="text-xs text-slate-500">India</p>
                  </div>
                  <div className="col-span-3">
                    <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 w-max font-medium">
                      <CheckCircle2 className="w-3 h-3"/> Verified
                    </span>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-12 gap-4 px-4 py-3.5 text-sm items-center">
                  <div className="col-span-4 flex items-center gap-3 font-medium text-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">G</div> 
                    Global Solutions
                  </div>
                  <div className="col-span-5">
                    <p className="font-semibold text-slate-800">Sarah Chen - VP Sales</p>
                    <p className="text-xs text-slate-500">North America</p>
                  </div>
                  <div className="col-span-3">
                    <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 w-max font-medium">
                      <CheckCircle2 className="w-3 h-3"/> Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Mini-Widgets */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm flex flex-col items-center justify-center">
                  <span className="text-xs font-semibold text-slate-500 mb-3">Lead Pipeline</span>
                  <div className="w-full flex items-end justify-center gap-2 h-10">
                    <div className="w-4 bg-blue-200 rounded-t-sm h-4"></div>
                    <div className="w-4 bg-blue-400 rounded-t-sm h-7"></div>
                    <div className="w-4 bg-blue-600 rounded-t-sm h-10"></div>
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm relative overflow-hidden">
                  <span className="text-xs font-semibold text-slate-500 block mb-1">Campaign ROI</span>
                  <span className="text-2xl font-bold text-slate-800">92%</span>
                  <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-teal-100/50 to-transparent border-b-2 border-teal-400"></div>
                </div>
                <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm relative overflow-hidden flex flex-col items-center justify-center">
                  <span className="text-xs font-semibold text-slate-500 block mb-2 relative z-10">Global Network</span>
                  <Globe className="w-8 h-8 text-blue-500/50 relative z-10"/>
                </div>
              </div>
            </div>

            {/* Floating Metric Cards (Absolute Positioned) */}
            <div className="absolute -top-6 right-8 bg-white/90 backdrop-blur-md border border-white p-3.5 rounded-xl shadow-xl flex items-center gap-3 z-20 transition-transform hover:-translate-y-1">
              <div className="p-2 bg-orange-50 rounded-lg"><Flame className="w-5 h-5 text-orange-500" /></div>
              <div>
                <p className="text-sm font-bold text-slate-800">90%+ Data Accuracy</p>
                <p className="text-xs text-slate-500">Regular Validation</p>
              </div>
            </div>

            <div className="absolute top-36 -right-10 bg-white/90 backdrop-blur-md border border-white p-3.5 rounded-xl shadow-xl flex items-center gap-3 z-20 transition-transform hover:-translate-y-1">
              <div className="p-2 bg-yellow-50 rounded-lg"><Sparkles className="w-5 h-5 text-yellow-500" /></div>
              <div>
                <p className="text-sm font-bold text-slate-800">1M+ APAC Contacts</p>
                <p className="text-xs text-slate-500">Verified Emails</p>
              </div>
            </div>

            <div className="absolute bottom-12 -left-12 bg-white/90 backdrop-blur-md border border-white p-3.5 rounded-xl shadow-xl flex items-center gap-3 z-20 transition-transform hover:-translate-y-1">
              <div className="p-2 bg-blue-50 rounded-lg"><Globe className="w-5 h-5 text-blue-600" /></div>
              <div>
                <p className="text-sm font-bold text-slate-800">Global B2B Database</p>
                <p className="text-xs text-slate-500">North America & Europe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GLOBAL DATABASE COVERAGE ================= */}
      <section className="py-20 px-8 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Global <span className="text-blue-500">B2B</span> Database  Coverage</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Expand beyond boundaries with our Global B2B Database. Whether you’re targeting local markets or international clients, we provide region-specific, compliant, and segmented data.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { region: "North America", countries: "USA, Canada", icon: <MapPin className="text-blue-500"/> },
            { region: "Europe", countries: "UK, Germany, France, etc.", icon: <MapPin className="text-blue-500"/> },
            { region: "APAC", countries: "India, UAE, Singapore, Australia", icon: <MapPin className="text-blue-500"/> },
            { region: "Middle East & Africa", countries: "Emerging Markets", icon: <MapPin className="text-blue-500"/> },
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-1">{item.region}</h3>
              <p className="text-sm text-slate-500">{item.countries}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= DATA ACCURACY COMMITMENT ================= */}
      <section className="py-20 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-bold text-slate-900 mb-4"> Data Accuracy <span className="text-blue-500">Commitment</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            This ensures your campaigns reach real, active, and relevant contacts, reducing bounce rates and improving ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto items-center">
          <div className="text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-5xl font-extrabold text-primary colour block mb-2">90%+</span>
            <p className="font-semibold text-slate-800">Verified Accuracy</p>
          </div>

          {[
            { title: "Regular Validation", desc: "Continuous internal checks to weed out decay." },
            { title: "Email & Phone Verification", desc: "Direct pinging and live status updates." },
            { title: "Continuous Database Refresh", desc: "Monthly scrubbing and updates." },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-teal-500" />
                <p className="font-bold text-slate-800">{stat.title}</p>
              </div>
              <p className="text-sm text-slate-500 ml-0 md:ml-7">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MAIN GRID (Existing Content Polished) ================= */}
      <section className="py-20 px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* LEFT COLUMN */}
        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Choose <span className="text-primary colour">MQL Experts</span>?</h2>
            <div className="overflow-hidden border border-slate-200 rounded-xl shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-blue-200 text-slate-700">
                  <tr>
                    <th className="p-4 font-semibold">Feature</th>
                    <th className="p-4 font-semibold text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {[
                    "90%+ Verified Data",
                    "Continuous Data Refresh",
                    "Global Coverage (APAC, NA, EMEA)",
                    "Multi-source Verification",
                    "Dedicated Data Quality Team",
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

        {/* RIGHT COLUMN */}
        <div className="space-y-12">
          
          {/* WHAT WE OFFER */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What We Offer: <span className="text-blue-500 text-3xl">Your Competitive Edge</span></h2>
            <ul className="space-y-4">
              {[
                "Real-time Enrichment & Cleansing",
                "Precise Decision-Maker Contacts",
                "Customizable Segmentation",
                "API & CRM Integration",
                "Intent Signals & Buying Triggers",
                "Flexible Data Delivery Models",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-center p-3 bg-white border border-slate-100 rounded-lg shadow-sm">
                  <div className="bg-blue-50 p-2 rounded-md"><TrendingUp className="text-blue-600 w-4 h-4" /></div>
                  <span className="font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          

          
        </div>
      </section>
      <CTABanner/>
      <Footer />
    </div>
  );
}