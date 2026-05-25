import Image from "next/image";

const team = [
  {
    name: "Alper Erdoğan",
    role: "Co-Founder & Lead Developer",
    bio: "Passionate about building fast, beautiful websites that drive real business results. Specializes in modern web technologies and conversion-focused design.",
    photo: "/founder-1.jpg",
  },
  {
    name: "Barış Kırlı",
    role: "Co-Founder & Social Media Strategist",
    bio: "Expert in growing brands on social media with data-driven content strategies. Helps businesses build loyal audiences and turn followers into customers.",
    photo: "/founder-2.jpg",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-shadow text-blue-300 font-semibold text-sm uppercase tracking-widest mb-3">
            Our Team
          </p>
          <h2 className="text-shadow text-4xl font-black text-white mb-4">
            Meet the People Behind the Work
          </h2>
          <p className="text-shadow text-slate-200 max-w-xl mx-auto">
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
              {/* Fotoğraf — her iki kart aynı kare yüksekliğinde */}
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-0.5">{member.name}</h3>
                <p className="text-blue-300 text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-slate-200 text-sm leading-relaxed">{member.bio}</p>
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
