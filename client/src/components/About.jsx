import { useEffect, useRef } from "react";

const features = [
  {
    icon: "💧",
    title: "100% Purified & Safe Water",
    desc: "Multi-stage purification ensures every drop is crystal clear and safe for your family.",
  },
  {
    icon: "🔬",
    title: "Advanced Filtration Technology",
    desc: "State-of-the-art filtration removes impurities while retaining essential minerals.",
  },
  {
    icon: "🌿",
    title: "Essential Minerals for Better Health",
    desc: "Naturally balanced mineral content for optimal hydration and wellness.",
  },
  {
    icon: "🛡️",
    title: "Hygienic Packaging for Your Safety",
    desc: "Sealed and tamper-proof packaging ensures purity from plant to your home.",
  },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="water-bg py-24 relative overflow-hidden" ref={ref}>
      {/* Background decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-aqua-500/20 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-aqua-500/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20 reveal">
          <p className="font-script text-aqua-300 text-2xl mb-2">About Us</p>
          <h2 className="font-display font-black text-5xl lg:text-6xl text-white mb-4">
            Pure Water.<br />
            <span className="shimmer-text">Pure Life.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            RK Pure Aqua is built on a simple promise — delivering the purest, most refreshing water
            to every home and family in Chodavaram and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Brand story */}
          <div className="reveal">
            <div className="glass-strong rounded-3xl p-10 relative overflow-hidden">
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-aqua-500/5 rounded-bl-full" />

              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-aqua-500/20 border border-aqua-400/30 flex items-center justify-center">
                  <span className="text-2xl">🏭</span>
                </div>
                <div>
                  <p className="text-white font-display font-bold text-xl">RK Pure Aqua</p>
                  <p className="text-aqua-400 text-sm">Chodavaram, AP 531036</p>
                </div>
              </div>

              <blockquote className="font-script text-aqua-200 text-2xl leading-relaxed mb-6">
                "A Promise of Purity in Every Drop"
              </blockquote>

              <p className="text-white/60 leading-relaxed mb-6">
                Located beside the TVS Showroom in Chodavaram, our state-of-the-art water purification
                plant is committed to providing crystal clear, naturally balanced drinking water to families
                who care about what they consume.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Crystal Clear", "Naturally Balanced", "Trusted by Families"].map((tag) => (
                  <span
                    key={tag}
                    className="glass border border-aqua-400/30 text-aqua-300 text-xs px-4 py-1.5 rounded-full"
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>

              {/* Location */}
              <div className="mt-8 flex items-start gap-3 glass rounded-2xl p-4">
                <span className="text-xl mt-0.5">📍</span>
                <div>
                  <p className="text-white text-sm font-semibold">Venue</p>
                  <p className="text-white/50 text-sm">Beside TVS Showroom, Chodavaram, 531036</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Feature grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="reveal glass rounded-2xl p-6 product-card group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-aqua-500/15 border border-aqua-400/20 flex items-center justify-center mb-4 group-hover:bg-aqua-500/25 transition-all duration-300">
                  <span className="text-2xl">{f.icon}</span>
                </div>
                <h3 className="text-white font-display font-bold text-base mb-2 leading-snug">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
