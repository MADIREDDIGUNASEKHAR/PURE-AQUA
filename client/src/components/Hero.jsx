import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────
   Improved Water Bottle SVG
   Each size gets unique gradient IDs so two
   bottles on the same page don't conflict.
───────────────────────────────────────── */
function BottleSVG({ size = "large", className = "" }) {
  const id = size;
  const isLarge = size === "large";
  const W = isLarge ? 160 : 112;
  const H = isLarge ? 420 : 295;

  /* Rib positions in a 120×320 viewBox */
  const ribs = isLarge ? [110, 126, 248, 264] : [110, 126, 248, 264];

  return (
    <svg
      viewBox="0 0 120 320"
      width={W}
      height={H}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gold cap */}
        <linearGradient id={`cap-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#7a5118" />
          <stop offset="30%"  stopColor="#d4a017" />
          <stop offset="60%"  stopColor="#f0d050" />
          <stop offset="100%" stopColor="#8b6410" />
        </linearGradient>

        {/* Clear plastic body — more opaque than before */}
        <linearGradient id={`body-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="rgba(140,205,255,0.60)" />
          <stop offset="22%"  stopColor="rgba(215,242,255,0.92)" />
          <stop offset="55%"  stopColor="rgba(225,246,255,0.95)" />
          <stop offset="82%"  stopColor="rgba(170,220,255,0.78)" />
          <stop offset="100%" stopColor="rgba(110,180,240,0.58)" />
        </linearGradient>

        {/* Water fill */}
        <linearGradient id={`water-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(30,165,255,0.78)" />
          <stop offset="55%"  stopColor="rgba(0,105,225,0.88)" />
          <stop offset="100%" stopColor="rgba(0,55,185,0.95)" />
        </linearGradient>

        {/* Bottom dome */}
        <linearGradient id={`bot-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(0,90,210,0.72)" />
          <stop offset="100%" stopColor="rgba(0,45,150,0.92)" />
        </linearGradient>

        {/* Highlight strip */}
        <linearGradient id={`hi-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.68)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.00)" />
        </linearGradient>

        {/* White label */}
        <linearGradient id={`lbl-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.97)" />
          <stop offset="100%" stopColor="rgba(232,246,255,0.93)" />
        </linearGradient>
      </defs>

      {/* ── Cap ── */}
      <rect x="38" y="2" width="44" height="24" rx="7" fill={`url(#cap-${id})`} />
      {/* Cap ring lines */}
      <line x1="38" y1="10" x2="82" y2="10" stroke="rgba(255,255,255,0.30)" strokeWidth="1" />
      <line x1="38" y1="17" x2="82" y2="17" stroke="rgba(0,0,0,0.12)"       strokeWidth="1" />

      {/* ── Neck ── */}
      <rect x="43" y="24" width="34" height="18" rx="3" fill={`url(#body-${id})`} />

      {/* ── Shoulder ── */}
      <path d="M43,40 Q22,56 20,80 L100,80 Q98,56 77,40 Z" fill={`url(#body-${id})`} />

      {/* ── Body ── */}
      <rect x="20" y="78" width="80" height="212" rx="9" fill={`url(#body-${id})`} />

      {/* ── Bottom dome ── */}
      <ellipse cx="60" cy="290" rx="40" ry="7" fill={`url(#bot-${id})`} />

      {/* ── Horizontal ribs (texture) ── */}
      {ribs.map((y) => (
        <rect key={y} x="20" y={y} width="80" height="2.5" rx="1.2"
          fill="rgba(0,70,180,0.13)" />
      ))}

      {/* ── Water fill ── */}
      <rect x="24" y="98" width="72" height="185" rx="7" fill={`url(#water-${id})`} />

      {/* Water surface wave */}
      <path d="M24,106 Q42,99 60,106 Q78,113 96,106"
        fill="none" stroke="rgba(255,255,255,0.70)" strokeWidth="1.8" />

      {/* ── Label background ── */}
      <rect x="26" y="132" width="68" height="100" rx="7"
        fill={`url(#lbl-${id})`} />
      <rect x="27" y="133" width="66" height="98" rx="6"
        fill="none" stroke="rgba(0,100,180,0.22)" strokeWidth="0.6" />

      {/* Label text */}
      <text x="60" y="157" textAnchor="middle" fontSize="10"
        fill="#003d80" fontFamily="Georgia,serif" fontStyle="italic" fontWeight="bold">
        Pure
      </text>
      <text x="60" y="171" textAnchor="middle" fontSize="10"
        fill="#003d80" fontFamily="Georgia,serif" fontStyle="italic" fontWeight="bold">
        Aqua
      </text>
      <text x="60" y="183" textAnchor="middle" fontSize="5.5"
        fill="#0060a0" fontFamily="Arial,sans-serif" letterSpacing="1.8">
        SOLUTION
      </text>

      {/* RK logo circle */}
      <circle cx="60" cy="204" r="11" fill="none" stroke="rgba(0,90,170,0.40)" strokeWidth="1" />
      <text x="60" y="208" textAnchor="middle" fontSize="7.5"
        fill="#0060a0" fontFamily="Georgia,serif" fontWeight="bold">
        RK
      </text>

      {/* ── Highlight strip ── */}
      <rect x="24" y="80" width="11" height="206" rx="4"
        fill={`url(#hi-${id})`} opacity="0.65" />

      {/* Shine streak */}
      <path d="M54,85 L47,135" stroke="rgba(255,255,255,0.55)"
        strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/* Small decorative water drop */
function WaterDrop({ className = "", style = {} }) {
  return (
    <svg viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg"
      className={className} style={style}>
      <defs>
        <linearGradient id="dropG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#80daff" />
          <stop offset="100%" stopColor="#0070aa" />
        </linearGradient>
      </defs>
      <path d="M12 2C12 2 2 14 2 20C2 26 6.5 30 12 30C17.5 30 22 26 22 20C22 14 12 2 12 2Z"
        fill="url(#dropG)" />
      <path d="M8 20C8 17 10 15 12 13" stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/* Expanding ripple ring */
function Ripple({ delay = 0, size = 160 }) {
  return (
    <div
      className="absolute rounded-full border border-aqua-400/25 animate-ripple pointer-events-none"
      style={{
        width: size,
        height: size,
        animationDelay: `${delay}s`,
        animationDuration: "3.2s",
      }}
    />
  );
}

/* ─────────────────────────────────────────
   Main Hero Section
───────────────────────────────────────── */
export default function Hero() {
  const particlesRef = useRef(null);

  /* Floating bubble particles */
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    const spawn = () => {
      const el = document.createElement("div");
      const s = Math.random() * 18 + 4;
      el.style.cssText = `
        position:absolute;
        width:${s}px; height:${s}px;
        border-radius:50%;
        background:radial-gradient(circle at 30% 30%,
          rgba(255,255,255,0.28), rgba(0,174,255,0.08));
        border:1px solid rgba(0,174,255,0.28);
        left:${Math.random() * 100}%;
        bottom:-30px;
        animation:floatParticle ${Math.random() * 8 + 7}s linear forwards;
        pointer-events:none;
      `;
      container.appendChild(el);
      setTimeout(() => el.remove(), 15000);
    };

    const id = setInterval(spawn, 900);
    return () => clearInterval(id);
  }, []);

  /* Floating drop config */
  const floatingDrops = [
    { top: "8%",  left: "-8%",  delay: "0s",   size: 20 },
    { top: "28%", right: "-6%", delay: "1.2s",  size: 15 },
    { top: "55%", left: "-14%", delay: "2.1s",  size: 12 },
    { top: "72%", right: "-4%", delay: "0.7s",  size: 18 },
    { top: "15%", right: "10%", delay: "1.8s",  size: 10 },
  ];

  return (
    <section
      id="home"
      className="water-bg min-h-screen flex items-center relative overflow-hidden pt-24"
    >
      {/* Bubble particle layer */}
      <div ref={particlesRef}
        className="absolute inset-0 pointer-events-none overflow-hidden z-0" />

      {/* Slow-spinning decorative rings */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full
        border border-aqua-500/10 animate-spin-slow" />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full
        border border-aqua-400/15 animate-spin-slow"
        style={{ animationDirection: "reverse" }} />

      {/* Ambient glow orbs */}
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full
        bg-aqua-500/5 blur-3xl animate-pulse2" />
      <div className="absolute bottom-20 left-20 w-60 h-60 rounded-full
        bg-aqua-600/8 blur-3xl animate-pulse2" style={{ animationDelay: "2s" }} />

      {/* ════════════════════ CONTENT ROW ════════════════════ */}
      <div className="max-w-7xl mx-auto px-6 py-16
        flex flex-col lg:flex-row items-center gap-12 lg:gap-16
        relative z-10 w-full">

        {/* ── Left: Text ── */}
        <div className="flex-1 text-center lg:text-left">

          {/* Grand opening badge */}
          <div className="inline-flex items-center gap-2 glass border border-gold/40
            px-4 py-2 rounded-full mb-8 animate-drop-in">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">
              Grand Opening — April 24th, 2025
            </span>
          </div>

          {/* Script subtitle */}
          <p className="font-script text-aqua-300 text-3xl mb-2"
            style={{ animation: "slideUp 0.7s ease 0.15s both" }}>
            You're Invited to
          </p>

          {/* Main heading */}
          <h1 className="font-display font-black text-6xl lg:text-8xl leading-none mb-4"
            style={{ animation: "slideUp 0.8s ease 0.3s both" }}>
            <span className="text-white">PURE</span>{" "}
            <span className="shimmer-text">AQUA</span>
          </h1>

          {/* Tagline divider */}
          <div className="flex items-center gap-3 justify-center lg:justify-start mb-6"
            style={{ animation: "slideUp 0.8s ease 0.4s both" }}>
            <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-aqua-500/50" />
            <p className="text-aqua-300/80 text-sm tracking-[0.3em] uppercase font-body font-medium">
              Elevated Hydration, Naturally Purified
            </p>
            <div className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-aqua-500/50" />
          </div>

          {/* Description */}
          <p className="text-white/60 text-lg font-body leading-relaxed
            max-w-md mx-auto lg:mx-0 mb-10"
            style={{ animation: "slideUp 0.8s ease 0.5s both" }}>
            Join us as we take the first step towards a healthier &amp; hydrated tomorrow.
            Pure water. Pure life. Pure Aqua.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            style={{ animation: "slideUp 0.8s ease 0.65s both" }}>
            <button
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              className="btn-glow bg-aqua-500 hover:bg-aqua-400 text-white font-semibold
                px-8 py-4 rounded-full text-base transition-all duration-300
                shadow-lg shadow-aqua-900/50"
            >
              🚰 Order Now — Free Delivery
            </button>
            <button
              onClick={() => document.getElementById("products").scrollIntoView({ behavior: "smooth" })}
              className="btn-glow glass border border-aqua-500/50 text-aqua-300 font-semibold
                px-8 py-4 rounded-full text-base hover:border-aqua-400 transition-all duration-300"
            >
              View Products
            </button>
          </div>

          {/* Info pills */}
          <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start"
            style={{ animation: "slideUp 0.8s ease 0.8s both" }}>
            {["📅 24th April", "⏰ 10:30 AM", "📍 Chodavaram, 531036"].map((item) => (
              <span key={item}
                className="glass text-white/70 text-xs px-3 py-1.5 rounded-full border border-white/10">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: Bottle Scene ── */}
        <div className="flex-1 flex justify-center items-center relative min-h-[480px]">

          {/* Radial glow backdrop */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[360px] h-[360px] rounded-full
              bg-gradient-to-br from-aqua-500/18 via-aqua-600/8 to-transparent blur-2xl" />
          </div>

          {/* Ripple rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Ripple size={140} delay={0}   />
            <Ripple size={220} delay={1.1} />
            <Ripple size={300} delay={2.2} />
          </div>

          {/* Glowing platform / podium */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2
            w-72 h-10 bg-aqua-400/30 blur-2xl rounded-full" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2
            w-52 h-5 bg-aqua-300/20 blur-xl rounded-full" />

          {/* Bottles */}
          <div className="flex items-end gap-10 lg:gap-14 relative z-10">

            {/* 500 ml bottle — slightly shorter, offset left */}
            <div className="flex flex-col items-center gap-3"
              style={{ animation: "slideUp 0.9s ease 0.45s both", marginBottom: "18px" }}>
              <BottleSVG size="small" className="bottle-glow-sm" />
              <div className="glass px-4 py-1.5 rounded-full border border-aqua-400/35 backdrop-blur-sm">
                <span className="text-aqua-300 text-xs font-body tracking-widest">500 ml</span>
              </div>
            </div>

            {/* 1 Litre bottle — tallest, center */}
            <div className="flex flex-col items-center gap-3"
              style={{ animation: "slideUp 0.9s ease 0.2s both" }}>
              <BottleSVG size="large" className="bottle-glow" />
              <div className="glass px-4 py-1.5 rounded-full border border-aqua-400/35 backdrop-blur-sm">
                <span className="text-aqua-300 text-xs font-body tracking-widest">1 Litre</span>
              </div>
            </div>
          </div>

          {/* Floating water drops */}
          {floatingDrops.map((d, i) => (
            <WaterDrop
              key={i}
              className="absolute animate-float opacity-75"
              style={{
                top: d.top,
                left: d.left,
                right: d.right,
                width: d.size,
                height: d.size * 1.33,
                animationDelay: d.delay,
                animationDuration: `${5 + i * 1.2}s`,
              }}
            />
          ))}

          {/* Small splash bubbles around bottles */}
          {[
            { size: 8,  top: "30%", left: "18%", delay: "0.3s" },
            { size: 5,  top: "22%", right: "20%",delay: "1.5s" },
            { size: 6,  top: "68%", left: "14%", delay: "0.9s" },
            { size: 10, top: "60%", right: "16%",delay: "2s"   },
            { size: 7,  top: "45%", left: "5%",  delay: "1.2s" },
          ].map((b, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-aqua-400/40 animate-float"
              style={{
                width: b.size,
                height: b.size,
                top: b.top,
                left: b.left,
                right: b.right,
                background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.35), rgba(0,174,255,0.12))",
                animationDelay: b.delay,
                animationDuration: `${4 + i * 0.8}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Bottom wave decoration ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg viewBox="0 0 1440 100" className="absolute bottom-0 w-full animate-wave"
          preserveAspectRatio="none">
          <path d="M0,50 C360,100 720,0 1080,50 C1260,75 1350,60 1440,50 L1440,100 L0,100 Z"
            fill="rgba(0,174,255,0.07)" />
        </svg>
        <svg viewBox="0 0 1440 100"
          className="absolute bottom-0 w-full animate-wave-slow"
          style={{ animationDelay: "-4s", opacity: 0.55 }}
          preserveAspectRatio="none">
          <path d="M0,60 C480,20 960,80 1440,40 L1440,100 L0,100 Z"
            fill="rgba(0,100,200,0.05)" />
        </svg>
      </div>
    </section>
  );
}
