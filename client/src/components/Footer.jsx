export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-12 border-t border-white/5" style={{ background: "#061020" }}>
      {/* Animated wave top */}
      <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden">
        <svg viewBox="0 0 1440 48" className="w-full animate-wave" preserveAspectRatio="none">
          <path d="M0,24 C360,48 720,0 1080,24 C1260,36 1350,30 1440,24 L1440,48 L0,48 Z"
            fill="rgba(0,174,255,0.04)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-aqua-400/50 flex items-center justify-center">
                <span className="font-display font-black text-aqua-300 text-sm">RY</span>
              </div>
              <div>
                <p className="font-display font-bold text-white">PURE AQUA</p>
                <p className="text-aqua-400 text-xs tracking-widest">ELEVATED HYDRATION</p>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              A Promise of Purity in Every Drop. Bringing crystal-clear, naturally purified water to your home.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-display font-bold text-sm mb-4 tracking-wider">QUICK LINKS</h4>
            <div className="space-y-2">
              {["Home", "About", "Products", "Features", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-white/40 hover:text-aqua-300 text-sm transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-bold text-sm mb-4 tracking-wider">CONTACT</h4>
            <div className="space-y-3">
              <div>
                <p className="text-aqua-400 text-xs">Rohith</p>
                <a href="tel:8328193822" className="text-white/60 hover:text-aqua-300 transition-colors text-sm">
                  8328193822
                </a>
              </div>
              <div>
                <p className="text-aqua-400 text-xs">Tharun</p>
                <a href="tel:7981964043" className="text-white/60 hover:text-aqua-300 transition-colors text-sm">
                  7981964043
                </a>
              </div>
              <div>
                <p className="text-aqua-400 text-xs">Location</p>
                <p className="text-white/40 text-sm">Beside TVS Showroom,<br />Chodavaram, AP 531036</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © 2025 RY Pure Aqua. All rights reserved.
          </p>
          <p className="text-aqua-400/50 text-xs tracking-widest">
            PURE WATER. PURE LIFE. PURE AQUA. 💧
          </p>
        </div>
      </div>
    </footer>
  );
}
