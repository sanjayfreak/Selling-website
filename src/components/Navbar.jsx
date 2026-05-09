import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Services", "Why Me", "Process", "Reviews"];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 56px",
          height: 64,
          background: scrolled ? "rgba(6,6,6,0.98)" : "rgba(8,8,8,0.95)",
          backdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(212,166,50,0.12)",
          transition: "background 0.3s ease",
        }}
      >
        {/* Logo */}
        <motion.span
          className="display"
          style={{
            color: "#d4a632", fontSize: 22, letterSpacing: "0.22em",
            cursor: "default", fontWeight: 700,
          }}
          whileHover={{ letterSpacing: "0.28em", color: "#f5d176" }}
          transition={{ duration: 0.35 }}
        >
         FreakyWebDesigners
        </motion.span>

        {/* Desktop Nav Links */}
        <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
          {links.map((item, i) => (
            <motion.a
              key={item}
              href={"#" + item.toLowerCase().replace(" ", "-")}
              onHoverStart={() => setActiveHover(item)}
              onHoverEnd={() => setActiveHover(null)}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              style={{
                position: "relative",
                color: activeHover === item ? "#f5d176" : "#b89a50",
                textDecoration: "none",
                fontSize: 12,
                letterSpacing: "0.12em",
                fontWeight: 500,
                textTransform: "uppercase",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 14,
                transition: "color 0.2s ease",
                paddingBottom: 4,
              }}
            >
              {item}
              {/* Animated underline */}
              <motion.span
                style={{
                  position: "absolute",
                  bottom: 0, left: 0,
                  height: 1,
                  background: "linear-gradient(90deg, #d4a632, #f5d176)",
                  display: "block",
                }}
                initial={{ width: "0%" }}
                animate={{ width: activeHover === item ? "100%" : "0%" }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            </motion.a>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <motion.a
            href="https://wa.me/918124530116"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "linear-gradient(135deg,#d4a632,#c8941a)",
              color: "#0d0d0d", padding: "9px 22px",
              fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
              textDecoration: "none", textTransform: "uppercase",
            }}
            whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(212,166,50,0.5)" }}
            whileTap={{ scale: 0.97 }}
          >
            <FaWhatsapp size={14} /> Hire Me
          </motion.a>

          {/* Hamburger — shown only on mobile via CSS class */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger-btn"
            style={{
              background: "none", border: "1px solid rgba(212,166,50,0.3)",
              color: "#d4a632", fontSize: 18, cursor: "pointer",
              padding: "6px 8px", display: "none",
            }}
            whileHover={{ borderColor: "#d4a632" }}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed", top: 64, left: 0, right: 0, zIndex: 99,
            background: "rgba(6,6,6,0.99)", padding: "24px 32px",
            borderBottom: "1px solid rgba(212,166,50,0.12)",
            display: "flex", flexDirection: "column", gap: 20,
          }}
        >
          {links.map(item => (
            <a
              key={item}
              href={"#" + item.toLowerCase().replace(" ", "-")}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#b89a50", textDecoration: "none",
                fontSize: 15, letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 500,
              }}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
}