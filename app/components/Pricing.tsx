"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const socialPlans = [
  {
    name: "Creator",
    price: "$25",
    period: "/month",
    description: "Studio-quality social media management for one channel — everything you need to start posting.",
    features: [
      "Social media management (1 account)",
      "Private workspace",
      "No watermark",
      "4K resolution videos",
      "Permanent video storage",
    ],
    cta: "Get Started",
    highlighted: true,
    badge: "Best Value",
  },
  {
    name: "Custom",
    price: "Custom",
    period: "",
    description: "Need something more? Tell us your requirements and we'll price the plan accordingly.",
    features: [
      "Multiple social accounts",
      "Tailored content & video strategy",
      "Custom deliverables & volume",
      "Pricing based on your needs",
      "Dedicated account manager",
    ],
    cta: "Let's Talk",
    highlighted: false,
  },
];

const websitePlans = [
  {
    name: "Landing Page",
    price: "$299",
    period: "one-time",
    description: "A clean, high-converting landing page to showcase your business.",
    features: [
      "1 page custom website",
      "Mobile-first responsive design",
      "SEO optimization",
      "Contact form integration",
      "Fast loading & optimized",
      "2 rounds of revisions",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Business Website",
    price: "$599",
    period: "one-time",
    description: "A full professional website that builds trust and drives conversions.",
    features: [
      "Up to 3 custom pages",
      "Unique brand-aligned design",
      "SEO optimization",
      "Contact form + integrations",
      "Speed & performance tuning",
      "3 rounds of revisions",
    ],
    cta: "Build My Site",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Premium / Custom",
    price: "Custom",
    period: "",
    description: "Complex projects, e-commerce, or full custom web applications.",
    features: [
      "Unlimited pages & features",
      "E-commerce or custom app",
      "CMS / dashboard integration",
      "Priority delivery",
      "1 month of post-launch support",
      "Dedicated project manager",
    ],
    cta: "Let's Talk",
    highlighted: false,
  },
];

const maintenancePlan = {
  name: "Hosting & Maintenance",
  price: "$99",
  period: "/month",
  description:
    "Keep your site running, secure, and up to date — we handle all the technical details so you can focus on your business.",
  technical: [
    "Vercel hosting (site stays live)",
    "SSL certificate (auto-renewed)",
    "Uptime monitoring & instant alerts",
    "Monthly content update (1 change)",
    "Contact form health check",
    "Speed & performance review",
    "Backup via GitHub repository",
  ],
  seo: [
    "Google Search Console monitoring",
    "Monthly SEO performance report",
    "Keyword & traffic insights",
  ],
  support: [
    "Email support (48h response)",
    "Emergency fix within 24h",
  ],
};

type Tab = "social" | "website" | "maintenance";

function PlanCard({ plan }: { plan: (typeof socialPlans)[number] }) {
  return (
    <div
      className={`relative rounded-2xl border p-8 transition-all hover:shadow-lg ${
        plan.highlighted
          ? "bg-blue-600/80 border-blue-400/60 shadow-xl shadow-blue-900/40 scale-[1.02] backdrop-blur-sm"
          : "bg-white/8 border-white/10 backdrop-blur-sm hover:shadow-blue-900/30"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-black px-4 py-1.5 rounded-full whitespace-nowrap">
          {plan.badge}
        </span>
      )}

      <p className={`text-sm font-bold uppercase tracking-wider mb-2 ${plan.highlighted ? "text-blue-200" : "text-slate-400"}`}>
        {plan.name}
      </p>
      <div className="flex items-end gap-1.5 mb-1">
        <span className={`text-4xl font-black ${plan.highlighted ? "text-white" : "text-white"}`}>
          {plan.price}
        </span>
        {plan.period && (
          <span className={`text-sm mb-1.5 ${plan.highlighted ? "text-blue-200" : "text-slate-400"}`}>
            {plan.period}
          </span>
        )}
      </div>
      <p className={`text-sm mb-7 ${plan.highlighted ? "text-blue-100" : "text-slate-400"}`}>
        {plan.description}
      </p>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <CheckCircle2
              size={15}
              className={`mt-0.5 shrink-0 ${plan.highlighted ? "text-blue-200" : "text-blue-400"}`}
            />
            <span className={plan.highlighted ? "text-blue-50" : "text-slate-300"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`w-full flex items-center justify-center gap-2 font-bold py-3 rounded-xl transition-colors duration-200 text-sm ${
          plan.highlighted
            ? "bg-white text-blue-700 hover:bg-blue-50"
            : "bg-blue-500/80 hover:bg-blue-500 text-white backdrop-blur-sm"
        }`}
      >
        {plan.cta}
        <ArrowRight size={15} />
      </a>
    </div>
  );
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<Tab>("website");
  const plans = activeTab === "social" ? socialPlans : websitePlans;

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-shadow text-blue-300 font-semibold text-sm uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-shadow text-4xl font-black text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-shadow text-slate-200 max-w-xl mx-auto">
            No hidden fees. No long-term contracts. Choose the service you need
            — or reach out for a bundled custom quote.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/8 backdrop-blur-sm rounded-xl p-1 gap-1 border border-white/10 flex-wrap justify-center">
            <button
              onClick={() => setActiveTab("website")}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                activeTab === "website"
                  ? "bg-blue-500 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Website Development
            </button>
            <button
              onClick={() => setActiveTab("social")}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                activeTab === "social"
                  ? "bg-blue-500 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Social Media
            </button>
            <button
              onClick={() => setActiveTab("maintenance")}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                activeTab === "maintenance"
                  ? "bg-blue-500 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Hosting & Maintenance
            </button>
          </div>
        </div>

        {activeTab === "maintenance" ? (
          <div className="max-w-3xl mx-auto">
            <div className="relative rounded-2xl border border-blue-400/60 bg-white/8 backdrop-blur-sm p-10 shadow-xl shadow-blue-900/30">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-black px-4 py-1.5 rounded-full whitespace-nowrap">
                Add-On Service
              </span>

              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                    {maintenancePlan.name}
                  </p>
                  <div className="flex items-end gap-1.5">
                    <span className="text-5xl font-black text-white">{maintenancePlan.price}</span>
                    <span className="text-sm mb-2 text-slate-400">{maintenancePlan.period}</span>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm"
                >
                  Get Started <ArrowRight size={15} />
                </a>
              </div>

              <p className="text-slate-300 text-sm mb-8">{maintenancePlan.description}</p>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-4">Technical</p>
                  <ul className="space-y-3">
                    {maintenancePlan.technical.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-blue-400" />
                        <span className="text-slate-300">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-8">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-4">SEO</p>
                    <ul className="space-y-3">
                      {maintenancePlan.seo.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-blue-400" />
                          <span className="text-slate-300">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-4">Support</p>
                    <ul className="space-y-3">
                      {maintenancePlan.support.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-blue-400" />
                          <span className="text-slate-300">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`grid gap-6 items-start ${
              plans.length === 2
                ? "md:grid-cols-2 max-w-3xl mx-auto"
                : "md:grid-cols-3"
            }`}
          >
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        )}

        <p className="text-shadow text-center text-slate-300 text-sm mt-8">
          Not sure which plan is right for you?{" "}
          <a href="#contact" className="text-blue-300 hover:underline font-medium">
            Contact us for a free consultation.
          </a>
        </p>
      </div>
    </section>
  );
}
