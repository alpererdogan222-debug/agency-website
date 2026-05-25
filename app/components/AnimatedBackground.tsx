export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#04091a]">
      {/* Akan gradient tabanı */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(-45deg, #040d24, #0d2257, #0a0a2e, #1a0a4e, #0d3a6b, #050e1f)",
          backgroundSize: "500% 500%",
          animation: "gradient-flow 10s ease infinite",
        }}
      />

      {/* Orb 1 — sol üst, parlak mavi */}
      <div
        className="hero-orb-1 absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          top: "-100px",
          left: "-80px",
          background: "rgba(37, 99, 235, 0.5)",
          filter: "blur(110px)",
        }}
      />
      {/* Orb 2 — sağ üst, indigo */}
      <div
        className="hero-orb-2 absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          top: "-80px",
          right: "-60px",
          background: "rgba(99, 50, 220, 0.45)",
          filter: "blur(100px)",
        }}
      />
      {/* Orb 3 — orta, açık mavi */}
      <div
        className="hero-orb-3 absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: "35%",
          left: "35%",
          background: "rgba(14, 165, 233, 0.3)",
          filter: "blur(120px)",
        }}
      />
      {/* Orb 4 — sağ alt, mor */}
      <div
        className="hero-orb-4 absolute rounded-full"
        style={{
          width: 450,
          height: 450,
          bottom: "5%",
          right: "5%",
          background: "rgba(147, 51, 234, 0.38)",
          filter: "blur(100px)",
        }}
      />
      {/* Orb 5 — sol alt, koyu mavi */}
      <div
        className="hero-orb-1 absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          bottom: "10%",
          left: "5%",
          background: "rgba(29, 78, 216, 0.35)",
          filter: "blur(90px)",
          animationDelay: "-7s",
        }}
      />

      {/* İnce nokta doku */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
    </div>
  );
}
