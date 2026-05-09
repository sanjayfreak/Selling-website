import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";

const serif = "'Cormorant Garamond', Georgia, serif";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section style={{
      padding: "120px 64px",
      textAlign: "center",
      background: "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(212,166,50,0.08) 0%, transparent 60%), #080808",
      position: "relative",
      overflow: "hidden",
    }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "relative", zIndex: 2, maxWidth: 860, margin: "0 auto" }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={inView ? { opacity: 1, letterSpacing: "0.4em" } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            color: "#d4a632", fontSize: 12, textTransform: "uppercase",
            marginBottom: 28, fontFamily: serif,
          }}
        >
          Limited Slots Available
        </motion.p>

        {/* Heading */}
        <h2
          className="display"
          style={{
            fontSize: "clamp(40px, 6vw, 68px)",
            lineHeight: 1.05, color: "#f0ece0",
            marginBottom: 8, letterSpacing: "0.06em",
          }}
        >
          READY TO GET YOUR
        </h2>
        <h2
          className="display"
          style={{
            fontSize: "clamp(40px, 6vw, 68px)",
            lineHeight: 1.05, marginBottom: 28,
            letterSpacing: "0.06em",
            background: "linear-gradient(90deg,#d4a632,#f5d176,#ffe599,#d4a632)",
            backgroundSize: "300% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 4s linear infinite",
          }}
        >
          WEBSITE?
        </h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            width: 56, height: 1,
            background: "linear-gradient(90deg,transparent,#d4a632,transparent)",
            margin: "0 auto 32px",
          }}
        />

        {/* Subtext */}
        <p style={{
          fontSize: 17, color: "#a08868", lineHeight: 1.9,
          fontFamily: serif, letterSpacing: "0.02em",
          maxWidth: 560, margin: "0 auto 44px",
        }}>
          Don't let a bad website cost you opportunities.
          Let's build something that works for you 24/7.
        </p>

        {/* CTA Button */}
        <motion.a
          href="https://wa.me/918124530116"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            textDecoration: "none",
            background: "linear-gradient(135deg,#d4a632,#c8941a)",
            color: "#0d0d0d", padding: "18px 56px",
            fontSize: 15, letterSpacing: "0.18em", fontWeight: 700,
            textTransform: "uppercase", fontFamily: serif,
            boxShadow: "0 0 36px rgba(212,166,50,0.38)",
          }}
          whileHover={{ scale: 1.04, boxShadow: "0 0 56px rgba(212,166,50,0.65)", y: -3 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaWhatsapp size={20} /> WhatsApp Me Now
        </motion.a>

        {/* Fine print */}
        <p style={{
          marginTop: 22, fontSize: 12, color: "#5a4838",
          letterSpacing: "0.08em", fontFamily: serif,
        }}>
          Free consultation · No hidden charges · Delivery in 48 hours
        </p>
      </motion.div>

      {/* Ambient glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: 700, height: 700, borderRadius: "50%", pointerEvents: "none",
        background: "radial-gradient(circle, rgba(212,166,50,0.06) 0%, transparent 70%)",
        filter: "blur(60px)",
      }} />
    </section>
  );
}