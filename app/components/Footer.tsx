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

          <div className="flex flex-col items-center sm:items-end gap-2">
            <a
              href="mailto:alper@sageworkdigital.com"
              className="text-sm hover:text-white transition-colors"
            >
              alper@sageworkdigital.com
            </a>
            <a
              href="https://www.instagram.com/sageworkdigital/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-pink-400 transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
              @sageworkdigital
            </a>
          </div>
        </div>

        <div className="border-t border-white/8 mt-8 pt-8 text-center text-xs text-slate-600">
          © {year} SageworkDigital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
