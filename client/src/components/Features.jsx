import { useEffect, useRef } from "react";

const steps = [
  {
    step: "01",
    icon: "🌊",
    title: "Source Water Collection",
    desc: "We carefully source water from verified, clean underground sources ensuring the highest quality input.",
  },
  {
    step: "02",
    icon: "🔬",
    title: "Multi-Stage Filtration",
    desc: "Advanced multi-stage filtration removes sediments, bacteria, and harmful contaminants.",
  },
  {
    step: "03",
    icon: "⚗️",
    title: "Mineral Balancing",
    desc: "Essential minerals are carefully balanced to maintain optimal pH and nutritional value.",
  },
  {
    step: "04",
    icon: "🛡️",
    title: "UV Sterilization",
    desc: "UV sterilization provides the final barrier against any remaining microorganisms.",
  },
  {
    step: "05",
    icon: "🍶",
    title: "Hygienic Bottling",
    desc: "Automated bottling in a controlled clean-room environment ensures zero contamination.",
  },
  {
    step: "06",
    icon: "🚚",
    title: "Home Delivery",
    desc: "Sealed, tamper-proof bottles delivered fresh to your doorstep — free of charge.",
  },
];

export default function Features() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="water-bg py-24 relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-aqua-400"
            style={{
              width: `${(i + 1) * 200}px`,
              height: `${(i + 1) * 200}px`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 1 - i * 0.15,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p className="font-script text-aqua-300 text-2xl mb-2">How We Do It</p>
          <h2 className="font-display font-black text-5xl lg:text-6xl text-white mb-4">
            From Source to <span className="shimmer-text">Your Home</span>
          </h2>
          <p className="text-white/50 text-base max-w-lg mx-auto">
            Every bottle of Pure Aqua goes through a rigorous 6-step purification process.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.step}
              className="reveal glass rounded-3xl p-8 product-card group relative overflow-hidden"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Step number background */}
              <div className="absolute -top-4 -right-4 font-display font-black text-8xl text-aqua-500/5 group-hover:text-aqua-500/10 transition-all duration-500 leading-none select-none">
                {step.step}
              </div>

              {/* Gradient top accent */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-aqua-500/50 to-transparent" />

              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>

              {/* Step label */}
              <p className="text-aqua-400 text-xs font-semibold tracking-widest mb-2">STEP {step.step}</p>

              <h3 className="font-display font-bold text-white text-xl mb-3">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>

              {/* Connector arrow (not on last items) */}
              {i < steps.length - 1 && i % 3 !== 2 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-aqua-500/30 text-xl z-10">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Promise section */}
        <div className="mt-20 reveal">
          <div className="glass-strong rounded-3xl p-12 text-center max-w-3xl mx-auto">
            <div className="text-6xl mb-6">💎</div>
            <h3 className="font-display font-black text-3xl text-white mb-4">
              Our Quality <span className="gold-shimmer">Promise</span>
            </h3>
            <p className="text-white/60 leading-relaxed text-lg mb-8">
              Every bottle of RY Pure Aqua carries our uncompromising commitment to purity.
              We test every batch for over 50 quality parameters before it reaches your hands.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["BIS Certified", "FSSAI Approved", "Lab Tested", "Mineral Balanced"].map((cert) => (
                <div key={cert} className="glass border border-aqua-400/30 px-5 py-2.5 rounded-full">
                  <span className="text-aqua-300 text-sm font-semibold">✓ {cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
