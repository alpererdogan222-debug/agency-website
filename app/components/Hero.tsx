import { ArrowRight, CheckCircle } from "lucide-react";

const highlights = [
  "Dedicated support & communication",
  "Transparent pricing, no surprises",
  "Fast delivery, real results",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero'ya özgü koyu vignette — animasyon arkadan görünür */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(2,6,20,0.55)_100%)]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/15 backdrop-blur-sm">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            Digital Agency — US Market
          </div>

          <h1 className="text-shadow text-5xl sm:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            We Help Businesses
            <span className="block text-blue-400">Grow Online.</span>
          </h1>

          <p className="text-shadow text-lg text-slate-200 leading-relaxed mb-8 max-w-xl">
            From social media management to full website development — we craft
            digital strategies that turn visitors into loyal customers.
          </p>

          <ul className="flex flex-col sm:flex-row gap-3 sm:gap-8 mb-10">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle size={15} className="text-blue-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-3.5 rounded-xl transition-colors duration-200 text-base shadow-lg shadow-blue-900/50"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3.5 rounded-xl border border-white/20 backdrop-blur-sm transition-colors duration-200 text-base"
            >
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
