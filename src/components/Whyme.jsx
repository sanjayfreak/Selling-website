import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaMobileAlt, FaTrophy } from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

const serif = "'Cormorant Garamond', Georgia, serif";

const reasons = [
  { Icon: BsLightningChargeFill, title: "48hr Delivery", desc: "Your website delivered in 2 days or less. No long waits, no excuses." },
  { Icon: FaMobileAlt, title: "Mobile-First", desc: "Every site looks stunning on phones, tablets and desktops." },
  { Icon: RiMoneyRupeeCircleFill, title: "Unbeatable Price", desc: "Agency quality at Indian budget prices. Zero compromise on quality." },
  { Icon: FaTrophy, title: "100% Professional", desc: "Clean code, SEO-ready, and built to impress anyone who sees it." },
];

export default function WhyMe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="why-me" style={{ padding: "100px 64px", background: "linear-gradient(180deg,#080808,#0c0a06,#080808)" }}>
      <style>{`
        @media (max-width: 768px) {
          .whyme-section { padding: 72px 20px !important; }
          .whyme-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .whyme-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <p style={{ color: "#d4a632", fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 12, fontFamily: serif }}>
            Why Choose Me
          </p>
          <h2 className="display" style={{ fontSize: "clamp(28px,4vw,44px)", color: "#f0ece0", letterSpacing: "0.1em" }}>
            THE DIFFERENCE
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ width: 48, height: 1, background: "linear-gradient(90deg,transparent,#d4a632,transparent)", margin: "14px auto 0" }}
          />
        </motion.div>

        <div
          className="whyme-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}
        >
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8, borderColor: "rgba(212,166,50,0.45)", background: "rgba(212,166,50,0.06)" }}
              style={{
                background: "rgba(212,166,50,0.03)", border: "1px solid rgba(212,166,50,0.12)",
                padding: 32, textAlign: "center", cursor: "default",
                transition: "background 0.3s, border-color 0.3s",
              }}
            >
              <motion.div
                style={{
                  width: 52, height: 52, borderRadius: "50%", margin: "0 auto 18px",
                  background: "rgba(212,166,50,0.1)", border: "1px solid rgba(212,166,50,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#d4a632", fontSize: 20,
                }}
                whileHover={{ scale: 1.15, background: "rgba(212,166,50,0.2)" }}
              >
                <r.Icon />
              </motion.div>
              <h3 style={{
                fontSize: 16, color: "#d4a632", marginBottom: 10, fontWeight: 600,
                letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: serif,
              }}>{r.title}</h3>
              <p style={{ fontSize: 13, color: "#887060", lineHeight: 1.85, fontFamily: serif }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}