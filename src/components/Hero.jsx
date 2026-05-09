import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", textAlign: "center",
      padding: "120px 24px 80px",
      position: "relative", overflow: "hidden",
    }}>

      {/* ✅ Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0, left: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.35,
        }}
      >
        <source src="/chip.mp4" type="video/mp4" />
      </video>

      {/* ✅ Dark overlay so text stays readable */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 90% 70% at 50% 10%, rgba(212,166,50,0.13) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 85% 85%, rgba(180,100,20,0.08) 0%, transparent 50%), rgba(8,8,8,0.75)",
        zIndex: 1,
      }} />

      {/* All your existing content — just add zIndex 2 */}
      <motion.div
        style={{ position: "relative", zIndex: 2, maxWidth: 780 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.45em" }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            color: "#d4a632", fontSize: 11, textTransform: "uppercase",
            marginBottom: 32, fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 500,
          }}
        >
          Premium Web Design · Chennai
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="display" style={{
            fontSize: "clamp(42px, 7vw, 76px)", lineHeight: 1.05, letterSpacing: "0.04em",
            marginBottom: 0, fontWeight: 700,
            background: "linear-gradient(90deg,#d4a632,#f5d176,#ffe599,#d4a632)",
            backgroundSize: "300% auto",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text", animation: "shimmer 4s linear infinite",
          }}>WEBSITES</h1>

          <h1 className="display" style={{
            fontSize: "clamp(42px, 7vw, 76px)", lineHeight: 1.05, letterSpacing: "0.04em",
            marginBottom: 0, fontWeight: 700, color: "#f0ece0",
          }}>THAT WIN</h1>

          <h1 className="display" style={{
            fontSize: "clamp(42px, 7vw, 76px)", lineHeight: 1.05, letterSpacing: "0.04em",
            marginBottom: 0, fontWeight: 700,
            background: "linear-gradient(90deg,#d4a632,#f5d176,#ffe599,#d4a632)",
            backgroundSize: "300% auto",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundClip: "text", animation: "shimmer 4s linear infinite",
          }}>CLIENTS</h1>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            width: 60, height: 1,
            background: "linear-gradient(90deg, transparent, #d4a632, transparent)",
            margin: "28px auto",
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            fontSize: 15, color: "#a89878", lineHeight: 1.9,
            maxWidth: 460, margin: "0 auto",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 400, letterSpacing: "0.02em",
          }}
        >
          Fast, beautiful, conversion-ready websites for students, gyms &amp; freelancers —{" "}
          <span style={{ color: "#d4a632", fontWeight: 600 }}>starting at just ₹299.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          style={{ marginTop: 40, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}
        >
          <motion.a
            href="/portfolio"
            className="display glow-btn"
            style={{
              background: "linear-gradient(135deg,#d4a632,#c8941a)", color: "#0d0d0d",
              padding: "14px 40px", fontSize: 13, letterSpacing: "0.15em",
              textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10,
              fontWeight: 700,
            }}
            whileHover={{ scale: 1.04, y: -2, boxShadow: "0 8px 40px rgba(212,166,50,0.35)" }}
            whileTap={{ scale: 0.97 }}
          >
            SEE MY WORK <HiArrowDown size={14} />
          </motion.a>

          <motion.a
            href="https://wa.me/918124530116"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "transparent", border: "1px solid rgba(212,166,50,0.35)",
              color: "#d4a632", padding: "14px 32px", fontSize: 13, fontWeight: 600,
              textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
              letterSpacing: "0.08em",
            }}
            whileHover={{ background: "rgba(212,166,50,0.08)", scale: 1.03, borderColor: "rgba(212,166,50,0.7)" }}
            whileTap={{ scale: 0.97 }}
          >
            <FaWhatsapp size={15} /> WHATSAPP ME
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: 600, height: 600, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(212,166,50,0.06) 0%, transparent 70%)",
        filter: "blur(60px)", zIndex: 1,
      }} />

      <motion.div
        style={{
          position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
          color: "#d4a632", fontSize: 18, opacity: 0.6, zIndex: 2,
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <HiArrowDown />
      </motion.div>
    </section>
  );
}