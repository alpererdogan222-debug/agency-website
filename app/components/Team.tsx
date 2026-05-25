import { Link2, AtSign } from "lucide-react";

const team = [
  {
    name: "[Name 1]",
    role: "Co-Founder & Lead Developer",
    bio: "Passionate about building fast, beautiful websites that drive real business results. Specializes in modern web technologies and conversion-focused design.",
    initials: "N1",
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    name: "[Name 2]",
    role: "Co-Founder & Social Media Strategist",
    bio: "Expert in growing brands on social media with data-driven content strategies. Helps businesses build loyal audiences and turn followers into customers.",
    initials: "N2",
    gradient: "from-indigo-500 to-blue-800",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Our Team
          </p>
          <h2 className="text-4xl font-black text-white mb-4">
            Meet the People Behind the Work
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            We&apos;re a lean, focused duo who take your business as seriously as our own.
            Every project is handled by us — no outsourcing, no middlemen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-blue-900/30 transition-all"
            >
              <div className={`h-48 bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                <div className="w-24 h-24 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center">
                  <span className="text-white text-3xl font-black">{member.initials}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-0.5">{member.name}</h3>
                <p className="text-blue-400 text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>

                <div className="flex gap-3 mt-5">
                  <a
                    href="#"
                    className="p-2 rounded-lg bg-white/8 hover:bg-blue-500/20 text-slate-400 hover:text-blue-400 transition-colors"
                    aria-label="Website"
                  >
                    <Link2 size={16} />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-lg bg-white/8 hover:bg-blue-500/20 text-slate-400 hover:text-blue-400 transition-colors"
                    aria-label="Social"
                  >
                    <AtSign size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="shrink-0 w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <span className="text-blue-400 text-xl font-black">!</span>
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Why Work With Us?</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Unlike big agencies, you always talk directly to the person doing the work. No account managers, no
                miscommunication — just fast, high-quality delivery and honest advice that puts your business first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
