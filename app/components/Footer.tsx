export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950/80 backdrop-blur-sm border-t border-white/8 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-black text-white text-xl tracking-tight">Sagework</span>
              <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-blue-400 text-blue-400 font-black text-[10px] leading-none">
                &lt;/&gt;
              </div>
              <span className="font-black text-slate-400 text-xl tracking-tight">Digital</span>
            </div>
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
          © {year} SageworkDigital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
