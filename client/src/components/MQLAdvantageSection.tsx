"use client";

import { 
  CheckCircle2, 
  XCircle, 
  AlertCircle,
  Database, 
  Globe2, 
  Users, 
  MapPin, 
  Building2, 
  Briefcase, 
  Mail, 
  Phone, 
  Target, 
  Rocket, 
  ShieldCheck, 
  Zap,
  TrendingUp,
  PieChart
} from "lucide-react";

export default function MQLAdvantageSection() {
  return (
    <section className="py-24 px-8 bg-[#F8FAFC] dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-primary color dark:text-primary color uppercase tracking-wider mb-3">
            The MQL Experts Advantage
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
            Why Leading Revenue Teams <br /> Choose Our Data
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We don't just provide lists; we provide actionable intelligence. See how our data quality and segmentation stack up against the rest.
          </p>
        </div>

        {/* ================= 1. COMPARISON TABLE ================= */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden transition-colors">
          <div className="grid md:grid-cols-3">
            {/* Features Column (Hidden on mobile for cleaner look, implied by row layout) */}
            <div className="hidden md:block bg-slate-50 dark:bg-slate-950/50 p-8 border-r border-slate-200 dark:border-slate-800">
              <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-8 invisible">Feature</h4>
              <ul className="space-y-8 text-slate-600 dark:text-slate-400 font-medium">
                <li>Data Accuracy</li>
                <li>Global Database</li>
                <li>Custom Segmentation</li>
                <li>Data Freshness</li>
                <li>Department Targeting</li>
                <li>Support Support</li>
              </ul>
            </div>

            {/* MQL Experts Column (Highlighted) */}
            <div className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-900 p-8 border-r border-slate-200 dark:border-slate-800 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-teal-500"></div>
              <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
                <Rocket className="w-6 h-6 text-blue-600 dark:text-blue-400" /> MQL Experts
              </h4>
              <ul className="space-y-8 text-slate-800 dark:text-slate-200 font-semibold">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-teal-500"/> 90%+ Verified</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-teal-500"/> Available</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-teal-500"/> Yes</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-teal-500"/> Regularly Updated</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-teal-500"/> Full Coverage</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-teal-500"/> Dedicated</li>
              </ul>
            </div>

            {/* Others Column */}
            <div className="p-8 bg-white dark:bg-slate-900">
              <h4 className="text-xl font-bold text-slate-400 dark:text-slate-500 mb-8">Others</h4>
              <ul className="space-y-8 text-slate-500 dark:text-slate-400">
                <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-rose-400"/> 60–70%</li>
                <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-rose-400"/> Limited</li>
                <li className="flex items-center gap-3"><AlertCircle className="w-5 h-5 text-amber-500"/> Limited</li>
                <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-rose-400"/> Outdated</li>
                <li className="flex items-center gap-3"><AlertCircle className="w-5 h-5 text-amber-500"/> Partial</li>
                <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-rose-400"/> Limited</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= 2. BENTO GRID (Offerings, Departments, Fields) ================= */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* What We Offer */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-500" /> What We Offer
            </h4>
            <div className="space-y-4">
              {[
                "Company Database (SMEs to Enterprises)",
                "Contact Database (CXO, Directors, Managers)",
                "Global & India Database Access",
                "Industry-wise Segmentation",
                "Geo-targeted Data (City/State/Country)"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-50 dark:bg-blue-500/10 p-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400"/></div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Department Segmentation */}
          <div className="bg-slate-900 dark:bg-[#0B1120] p-8 rounded-3xl border border-slate-800 shadow-sm relative overflow-hidden transition-colors">
            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl"></div>
            
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2 relative z-10">
              <PieChart className="w-5 h-5 text-teal-400" /> Department Segmentation
            </h4>
            <p className="text-slate-400 mb-6 relative z-10">We provide verified contacts across all major functional heads:</p>
            <div className="flex flex-wrap gap-3 relative z-10">
              {["HR", "Marketing", "Sales", "Finance", "Procurement", "IT"].map((dept, i) => (
                <span key={i} className="bg-slate-800 border border-slate-700 text-slate-200 px-4 py-2 rounded-full text-sm font-semibold hover:bg-slate-700 transition-colors cursor-default">
                  {dept}
                </span>
              ))}
            </div>
          </div>

          {/* Data Fields Available */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-purple-500" /> Data Fields Available
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Company Name", icon: <Building2 className="w-4 h-4 text-slate-400"/> },
                { label: "Contact Name", icon: <Users className="w-4 h-4 text-slate-400"/> },
                { label: "Designation", icon: <Briefcase className="w-4 h-4 text-slate-400"/> },
                { label: "Email ID", icon: <Mail className="w-4 h-4 text-slate-400"/> },
                { label: "Phone Number", icon: <Phone className="w-4 h-4 text-slate-400"/> },
                { label: "Industry", icon: <TrendingUp className="w-4 h-4 text-slate-400"/> },
                { label: "Location", icon: <MapPin className="w-4 h-4 text-slate-400"/> },
              ].map((field, i) => (
                <div key={i} className="flex flex-col gap-1 p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl">
                  {field.icon}
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{field.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ================= 3. USE CASES & WHY CHOOSE US ================= */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Use Cases */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-0"></div>
            <h4 className="text-2xl font-bold mb-8 relative z-10 flex items-center gap-2">
              <Zap className="w-6 h-6 text-blue-200" /> High-Impact Use Cases
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {[
                { title: "Email Marketing", desc: "High-deliverability campaigns.", icon: <Mail className="w-5 h-5"/> },
                { title: "Inside Sales", desc: "Direct dials for cold outreach.", icon: <Phone className="w-5 h-5"/> },
                { title: "Market Expansion", desc: "Cross-border database access.", icon: <Globe2 className="w-5 h-5"/> },
                { title: "ABM Campaigns", desc: "Hyper-targeted account data.", icon: <Target className="w-5 h-5"/> },
              ].map((useCase, i) => (
                <div key={i} className="bg-white/10 border border-white/20 p-5 rounded-2xl backdrop-blur-sm">
                  <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                    {useCase.icon}
                  </div>
                  <h5 className="font-bold text-lg mb-1">{useCase.title}</h5>
                  <p className="text-blue-100 text-sm">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Our Data summary */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-center transition-colors">
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-teal-500" /> The Bottom Line
            </h4>
            <ul className="space-y-5">
              {[
                "90%+ Accuracy Rate Guarantee",
                "Global + India Coverage",
                "Verified & Updated Contacts",
                "Custom Segmentation Capabilities",
                "Fast Delivery Turnaround",
                "Compliance-Focused Data Handling"
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 group-hover:text-white"/>
                  </div>
                  <span className="text-lg font-semibold text-slate-700 dark:text-slate-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}