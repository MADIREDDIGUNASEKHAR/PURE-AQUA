import { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("pureaqua-theme") || "dark"
  );

  useEffect(() => {
    localStorage.setItem("pureaqua-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div data-theme={theme} className="min-h-screen">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Products />
      <Stats />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
