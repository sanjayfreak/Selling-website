import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaWhatsapp, FaCode, FaRocket } from "react-icons/fa";

const serif = "'Cormorant Garamond', Georgia, serif";

const steps = [
  { num: "01", Icon: FaWhatsapp, title: "You Contact", desc: "WhatsApp me with your requirements. I respond within 1 hour." },
  { num: "02", Icon: FaCode, title: "I Build", desc: "I craft your stunning website in 48 hours using the latest tech." },
  { num: "03", Icon: FaRocket, title: "You Launch", desc: "Review, approve, and go live. Your online presence starts winning." },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="process" style={{ padding: "100px 64px", background: "#080808" }}>
      <style>{`
        @media (max-width: 768px) {
          .process-section { padding: 72px 20px !important; }
          .process-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .process-connector { display: none !important; }
        }
      `}</style>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 72 }}
        >
          <p style={{ color: "#d4a632", fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 12, fontFamily: serif }}>
            How It Works
          </p>
          <h2 className="display" style={{ fontSize: "clamp(28px,4vw,44px)", color: "#f0ece0", letterSpacing: "0.1em" }}>
            3 SIMPLE STEPS
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ width: 48, height: 1, background: "linear-gradient(90deg,transparent,#d4a632,transparent)", margin: "14px auto 0" }}
          />
        </motion.div>

        <div
          className="process-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 40, position: "relative" }}
        >
          {/* Connector line */}
          <div
            className="process-connector"
            style={{
              position: "absolute", top: 38, left: "20%", right: "20%", height: 1,
              background: "linear-gradient(90deg,transparent,rgba(212,166,50,0.25),transparent)",
            }}
          />

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              style={{ textAlign: "center", position: "relative" }}
            >
              <motion.div
                style={{
                  width: 76, height: 76, borderRadius: "50%", margin: "0 auto 24px",
                  background: "linear-gradient(135deg,#d4a632,#c8941a)", color: "#0d0d0d",
                  display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
                  boxShadow: "0 0 28px rgba(212,166,50,0.3)",
                  position: "relative", zIndex: 1,
                }}
                whileHover={{ scale: 1.1, boxShadow: "0 0 44px rgba(212,166,50,0.55)" }}
              >
                <s.Icon size={20} />
                <span style={{ fontSize: 11, marginTop: 2, fontFamily: serif, fontWeight: 700, letterSpacing: "0.05em" }}>{s.num}</span>
              </motion.div>
              <h3 style={{
                fontSize: 17, color: "#f0ece0", marginBottom: 10,
                fontWeight: 600, letterSpacing: "0.05em",
                textTransform: "uppercase", fontFamily: serif,
              }}>{s.title}</h3>
              <p style={{ fontSize: 13, color: "#887060", lineHeight: 1.85, fontFamily: serif }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}