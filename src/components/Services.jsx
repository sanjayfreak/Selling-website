import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaDumbbell, FaVideo } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";

const services = [
  {
    Icon: FaGraduationCap, title: "Student Portfolio", price: "Rs.299", tag: "MOST POPULAR",
    desc: "Stand out from the crowd with a sleek personal portfolio. Showcase your projects, skills, and story built to impress recruiters.",
    features: ["About and Skills sections", "Projects showcase", "Contact form", "Mobile responsive"],
    featured: true,
  },
  {
    Icon: FaDumbbell, title: "Gym Website", price: "Rs.899", tag: "BEST VALUE",
    desc: "A bold, high-energy website that makes your gym irresistible. Built to convert visitors into paying members fast.",
    features: ["Services and Trainers", "Pricing table", "Gallery section", "CTA-focused design"],
    featured: false,
  },
  {
    Icon: FaVideo, title: "Freelancer Video Page", price: "Rs.999", tag: "PREMIUM",
    desc: "A cinematic promo landing page for freelancers. Show your reel, services, and testimonials in one stunning page.",
    features: ["Video hero section", "Portfolio showcase", "Testimonials", "Conversion optimized"],
    featured: false,
  },
];

const serif = "'Cormorant Garamond', Georgia, serif";

function ServiceCard({ s, i }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 40px rgba(212,166,50,0.14)" }}
      style={{
        background: "linear-gradient(145deg,#121212,#0d0d0d)",
        border: `1px solid ${s.featured ? "rgba(212,166,50,0.45)" : "rgba(212,166,50,0.13)"}`,
        padding: 32, display: "flex", flexDirection: "column",
        boxShadow: s.featured ? "0 0 40px rgba(212,166,50,0.1)" : "none",
        transition: "box-shadow 0.3s", cursor: "default",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
        <motion.div
          style={{
            width: 46, height: 46, borderRadius: "50%",
            background: "rgba(212,166,50,0.1)", border: "1px solid rgba(212,166,50,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#d4a632", fontSize: 17,
          }}
          whileHover={{ scale: 1.15, background: "rgba(212,166,50,0.2)" }}
        >
          <s.Icon />
        </motion.div>
        <span style={{
          fontSize: 9, letterSpacing: "0.18em", padding: "4px 10px", fontWeight: 700,
          background: "rgba(212,166,50,0.08)", color: "#d4a632",
          border: "1px solid rgba(212,166,50,0.22)", fontFamily: serif,
        }}>{s.tag}</span>
      </div>

      <h3 style={{
        fontSize: 19, color: "#f0ece0", marginBottom: 12, fontWeight: 600,
        letterSpacing: "0.02em", fontFamily: serif,
      }}>{s.title}</h3>

      <div style={{ marginBottom: 16 }}>
        <span style={{
          background: "linear-gradient(135deg,#d4a632,#f5d176,#c8941a)",
          color: "#0d0d0d", padding: "4px 14px", fontSize: 16,
          letterSpacing: "0.06em", display: "inline-block",
          boxShadow: "0 0 14px rgba(212,166,50,0.3)",
          fontFamily: serif, fontWeight: 700,
        }}>{s.price}</span>
      </div>

      <p style={{
        fontSize: 13, color: "#887060", lineHeight: 1.85,
        marginBottom: 20, flex: 1, fontFamily: serif,
      }}>{s.desc}</p>

      <ul style={{ listStyle: "none", marginBottom: 26 }}>
        {s.features.map((f, fi) => (
          <motion.li
            key={f}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.1 + fi * 0.08 + 0.4 }}
            style={{
              fontSize: 12, color: "#c8b890", padding: "5px 0",
              display: "flex", gap: 8, alignItems: "center", letterSpacing: "0.02em",
            }}
          >
            <FiCheck style={{ color: "#d4a632", flexShrink: 0 }} /> {f}
          </motion.li>
        ))}
      </ul>

      <motion.a
        href="https://wa.me/918124530116"
        target="_blank" rel="noopener noreferrer"
        style={{
          display: "block", textAlign: "center", padding: "11px",
          fontSize: 11, letterSpacing: "0.18em", textDecoration: "none",
          textTransform: "uppercase", fontFamily: serif, fontWeight: 700,
          background: s.featured ? "linear-gradient(135deg,#d4a632,#c8941a)" : "transparent",
          color: s.featured ? "#0d0d0d" : "#d4a632",
          border: s.featured ? "none" : "1px solid rgba(212,166,50,0.3)",
          boxShadow: s.featured ? "0 0 20px rgba(212,166,50,0.3)" : "none",
        }}
        whileHover={{
          scale: 1.02, boxShadow: "0 0 28px rgba(212,166,50,0.45)",
          background: s.featured ? "linear-gradient(135deg,#f5d176,#d4a632)" : "rgba(212,166,50,0.08)",
        }}
        whileTap={{ scale: 0.97 }}
      >
        Get This
      </motion.a>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="services" style={{ padding: "100px 64px", background: "#080808" }}>
      <style>{`
        @media (max-width: 768px) {
          .services-section { padding: 72px 20px !important; }
          .services-grid { grid-template-columns: 1fr !important; }
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
          <p style={{ color: "#d4a632", fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 12, fontFamily: serif }}>What I Build</p>
          <h2 className="display" style={{ fontSize: "clamp(28px,4vw,44px)", color: "#f0ece0", letterSpacing: "0.1em" }}>
            PICK YOUR PACKAGE
          </h2>
          <motion.div
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ width: 48, height: 1, background: "linear-gradient(90deg,transparent,#d4a632,transparent)", margin: "14px auto 0" }}
          />
        </motion.div>
        <div
          className="services-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}
        >
          {services.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}