import { useState, useEffect } from "react";

export default function Navbar({ theme = "dark", onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isLight = theme === "light";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Products", "Features", "Contact"];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3 shadow-lg shadow-black/30" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("home")}>
          <div className="relative">
            <div className="w-10 h-10 rounded-full border-2 border-aqua-400 flex items-center justify-center animate-pulse2">
              <span className="font-display font-black text-aqua-300 text-sm">RK</span>
            </div>
            <div className="absolute -inset-1 rounded-full border border-aqua-400/30 animate-ping" style={{ animationDuration: "3s" }}></div>
          </div>
          <div>
            <p className="font-display font-bold text-white text-lg leading-none">PURE AQUA</p>
            <p className="text-aqua-400 text-xs font-body tracking-widest">ELEVATED HYDRATION</p>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="nav-link text-white/80 hover:text-aqua-300 text-sm font-body font-medium tracking-wide transition-colors duration-300"
            >
              {item}
            </button>
          ))}

          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            title={isLight ? "Switch to dark mode" : "Switch to light mode"}
            className={`relative w-14 h-7 rounded-full transition-all duration-500 flex items-center px-1 flex-shrink-0 ${
              isLight
                ? "bg-amber-300 border border-amber-400"
                : "bg-navy-light border border-aqua-500/40"
            }`}
          >
            <span
              className={`absolute w-5 h-5 rounded-full flex items-center justify-center text-xs transition-all duration-500 shadow-md ${
                isLight
                  ? "translate-x-7 bg-white"
                  : "translate-x-0 bg-aqua-500"
              }`}
            >
              {isLight ? "☀️" : "🌙"}
            </span>
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="btn-glow bg-aqua-500 hover:bg-aqua-400 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300"
          >
            Order Now
          </button>
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-3">
          {/* Mobile theme toggle */}
          <button
            onClick={onToggleTheme}
            className={`w-12 h-6 rounded-full transition-all duration-500 flex items-center px-0.5 ${
              isLight ? "bg-amber-300" : "bg-navy-light border border-aqua-500/40"
            }`}
          >
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-xs transition-all duration-500 shadow ${
                isLight ? "translate-x-6 bg-white" : "translate-x-0 bg-aqua-500"
              }`}
            >
              {isLight ? "☀️" : "🌙"}
            </span>
          </button>

          {/* Burger */}
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`w-6 h-0.5 bg-aqua-300 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-aqua-300 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-aqua-300 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden glass border-t border-aqua-500/20 overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-white/80 hover:text-aqua-300 text-sm font-body font-medium tracking-wide text-left transition-colors duration-300"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="btn-glow bg-aqua-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full w-full mt-2"
          >
            Order Now
          </button>
        </div>
      </div>
    </nav>
  );
}
