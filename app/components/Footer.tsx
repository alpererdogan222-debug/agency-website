export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950/80 backdrop-blur-sm border-t border-white/8 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-black text-xl tracking-tight mb-1">[Agency Name]</p>
            <p className="text-sm">Digital Growth Agency</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#team" className="hover:text-white transition-colors">About Us</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <a
            href="mailto:alpererdogan222@gmail.com"
            className="text-sm hover:text-white transition-colors"
          >
            alpererdogan222@gmail.com
          </a>
        </div>

        <div className="border-t border-white/8 mt-8 pt-8 text-center text-xs text-slate-600">
          © {year} [Agency Name]. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
