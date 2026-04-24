import { useState, useEffect, useRef } from "react";

const STATS = [
  { label: "Litres Purified", value: "10,000+", icon: "💧", color: "from-aqua-400 to-aqua-600" },
  { label: "Happy Families", value: "500+", icon: "👨‍👩‍👧‍👦", color: "from-blue-400 to-blue-600" },
  { label: "Purity Promise", value: "100%", icon: "✨", color: "from-teal-400 to-teal-600" },
  { label: "Home Deliveries", value: "200+", icon: "🚚", color: "from-sky-400 to-sky-600" },
];

export default function Stats() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0a1628 0%, #061020 100%)" }}>
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-full"
            style={{
              top: `${20 * i}%`,
              background: `linear-gradient(90deg, transparent, rgba(0,174,255,${0.05 + i * 0.02}), transparent)`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-strong rounded-3xl p-8 text-center relative overflow-hidden group product-card"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.7s ease ${i * 0.15}s`,
              }}
            >
              {/* Gradient top bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-t-3xl`} />

              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>

              {/* Value */}
              <div className="font-display font-black text-4xl lg:text-5xl text-white mb-2"
                style={{ textShadow: "0 0 30px rgba(0,174,255,0.3)" }}>
                <span className="shimmer-text">{stat.value}</span>
              </div>

              <p className="text-white/50 text-sm font-body tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-16 glass-strong rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-aqua-900/20 via-transparent to-aqua-900/20" />
          <p className="font-script text-aqua-300 text-2xl mb-2 relative">Free Home Delivery Available</p>
          <h3 className="font-display font-black text-3xl lg:text-4xl text-white mb-4 relative">
            Get Pure Water Delivered to Your Door
          </h3>
          <p className="text-white/50 mb-8 max-w-md mx-auto relative">
            Call us now and experience the convenience of home delivery for all our products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
            <a
              href="tel:8328193822"
              className="btn-glow bg-aqua-500 text-white font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300"
            >
              📞 Call Rohith — 8328193822
            </a>
            <a
              href="tel:7981964043"
              className="btn-glow glass border border-aqua-400/50 text-aqua-300 font-semibold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:border-aqua-300 transition-all duration-300"
            >
              📞 Call Tharun — 7981964043
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
