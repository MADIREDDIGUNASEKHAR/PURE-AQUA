import { useState, useEffect, useRef } from "react";
import axios from "axios";

// Inline bottle SVG for product cards
function MiniBottle({ type }) {
  const isSmall = type === "250ml";
  const isEmpty = type.includes("empty");

  return (
    <svg viewBox="0 0 60 160" width="60" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="0" width="16" height="10" rx="3" fill="url(#mcap)" />
      <rect x="24" y="9" width="12" height="8" rx="2" fill="url(#mbody)" />
      <path d="M24,17 Q8,28 8,40 L52,40 Q52,28 36,17 Z" fill="url(#mbody)" />
      <rect x="8" y="38" width="44" height="106" rx="5" fill="url(#mbody)" />
      <ellipse cx="30" cy="144" rx="22" ry="4" fill="url(#mbot)" />
      {!isEmpty && (
        <>
          <rect x="12" y="55" width="36" height="86" rx="4" fill="url(#mwater)" opacity="0.6" />
          <path d="M12,62 Q21,56 30,62 Q39,68 48,62" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
        </>
      )}
      <rect x="13" y="65" width="34" height="50" rx="3" fill="rgba(255,255,255,0.08)" />
      <text x="30" y="86" textAnchor="middle" fontSize="5" fill="rgba(255,255,255,0.8)" fontFamily="serif" fontStyle="italic">Pure</text>
      <text x="30" y="95" textAnchor="middle" fontSize="5" fill="rgba(255,255,255,0.8)" fontFamily="serif" fontStyle="italic">Aqua</text>
      <rect x="11" y="42" width="5" height="98" rx="2" fill="rgba(255,255,255,0.1)" />
      <defs>
        <linearGradient id="mcap" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8B6914" />
          <stop offset="50%" stopColor="#D4A017" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        <linearGradient id="mbody" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(160,210,250,0.5)" />
          <stop offset="50%" stopColor="rgba(200,235,255,0.8)" />
          <stop offset="100%" stopColor="rgba(120,185,235,0.5)" />
        </linearGradient>
        <linearGradient id="mwater" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(0,174,255,0.5)" />
          <stop offset="100%" stopColor="rgba(0,80,180,0.6)" />
        </linearGradient>
        <linearGradient id="mbot" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(150,200,240,0.5)" />
          <stop offset="100%" stopColor="rgba(100,170,220,0.4)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const STATIC_PRODUCTS = [
  { id: 1, name: "Pure Aqua 500ml", type: "Packaged Drinking Water", price: 10, image: "500ml", badge: "Best Seller" },
  { id: 2, name: "Pure Aqua 1 Litre", type: "Packaged Drinking Water", price: 20, image: "1L", badge: "Popular" },
  { id: 3, name: "Empty Bottle 250ml", type: "Empty Water Bottle", price: 5, image: "250ml", badge: null },
  { id: 4, name: "Empty Bottle 500ml", type: "Empty Water Bottle", price: 8, image: "500ml-empty", badge: null },
  { id: 5, name: "Empty Bottle 1 Litre", type: "Empty Water Bottle", price: 12, image: "1L-empty", badge: null },
];

export default function Products() {
  const [products, setProducts] = useState(STATIC_PRODUCTS);
  const [filter, setFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    axios.get("/api/products").then((r) => setProducts(r.data)).catch(() => {});
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const categories = ["All", "Packaged Drinking Water", "Empty Water Bottle"];
  const filtered = filter === "All" ? products : products.filter((p) => p.type === filter);

  return (
    <section id="products" className="water-bg py-24 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="font-script text-aqua-300 text-2xl mb-2">What We Offer</p>
          <h2 className="font-display font-black text-5xl lg:text-6xl text-white mb-4">
            Our <span className="shimmer-text">Products</span>
          </h2>
          <p className="text-white/50 text-base max-w-lg mx-auto">
            From pure drinking water to empty bottles for your convenience — we have it all.
          </p>

          {/* Note */}
          <div className="inline-block glass border border-gold/30 px-5 py-2 rounded-full mt-4">
            <p className="text-gold/80 text-xs">📝 Note: We sell empty bottles only (250ml, 500ml & 1 Litre)</p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-aqua-500 text-white shadow-lg shadow-aqua-900/50"
                  : "glass border border-aqua-500/30 text-aqua-300 hover:border-aqua-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className="reveal product-card glass rounded-3xl p-6 flex flex-col items-center text-center cursor-pointer relative overflow-hidden group"
              style={{ transitionDelay: `${i * 0.08}s` }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Badge */}
              {product.badge && (
                <span className="absolute top-4 right-4 bg-gold/20 border border-gold/50 text-gold text-xs px-2.5 py-1 rounded-full">
                  {product.badge}
                </span>
              )}

              {/* Glow bg on hover */}
              <div className={`absolute inset-0 bg-aqua-500/5 transition-opacity duration-300 ${hoveredId === product.id ? "opacity-100" : "opacity-0"}`} />

              {/* Bottle */}
              <div className={`mb-4 transition-transform duration-500 ${hoveredId === product.id ? "scale-110" : "scale-100"}`}>
                <MiniBottle type={product.image} />
              </div>

              {/* Type */}
              <p className="text-aqua-400 text-xs font-semibold tracking-widest uppercase mb-1">{product.type}</p>

              {/* Name */}
              <h3 className="font-display font-bold text-white text-base mb-3">{product.name}</h3>

              {/* Price */}
              <div className="flex items-center gap-1 mb-4">
                <span className="text-white/40 text-xs">₹</span>
                <span className="gold-shimmer font-display font-black text-2xl">{product.price}</span>
              </div>

              <button
                onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                className="btn-glow w-full bg-aqua-500/20 hover:bg-aqua-500 border border-aqua-400/40 hover:border-aqua-400 text-aqua-300 hover:text-white text-sm font-semibold py-2.5 rounded-xl transition-all duration-300"
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
