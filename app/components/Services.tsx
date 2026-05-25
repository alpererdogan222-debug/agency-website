import { Share2, Globe, TrendingUp, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "We create, schedule, and manage your social media presence across all major platforms — so you can focus on running your business.",
    features: [
      "Content creation & design",
      "Post scheduling & automation",
      "Audience growth strategy",
      "Monthly analytics reports",
    ],
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/15",
    cardBorder: "border-white/10",
    featured: false,
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "We build fast, modern, and professional websites that represent your brand and convert visitors into customers.",
    features: [
      "Custom design tailored to your brand",
      "Mobile-first & fully responsive",
      "SEO-optimized from day one",
      "Fast loading, secure & reliable",
    ],
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/15",
    cardBorder: "border-blue-400/30",
    featured: true,
  },
  {
    icon: TrendingUp,
    title: "Website Optimization",
    description:
      "Already have a website but it's underperforming? We audit, refactor, and boost your site's speed, SEO, and conversion rate.",
    features: [
      "Performance & speed audit",
      "SEO improvements & metadata",
      "UX/UI refresh & redesign",
      "Conversion rate optimization",
    ],
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
    cardBorder: "border-white/10",
    featured: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-4xl font-black text-white mb-4">
            Services Built for Business Growth
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Every service we offer is designed with one goal: getting you more
            visibility, more leads, and more revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`relative rounded-2xl border p-7 backdrop-blur-sm transition-all hover:shadow-lg hover:shadow-blue-900/30 bg-white/5 ${service.cardBorder} ${
                  service.featured ? "ring-1 ring-blue-400/50" : ""
                }`}
              >
                {service.featured && (
                  <span className="absolute -top-3 left-6 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <div className={`inline-flex p-3 rounded-xl mb-5 ${service.iconBg}`}>
                  <Icon size={24} className={service.iconColor} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 size={15} className="text-blue-400 mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
