import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

const serif = "'Cormorant Garamond', Georgia, serif";

const reviews = [
  { name: "Rahul Sharma", role: "CS Student, VIT", review: "My portfolio got me 3 interview calls in the first week. The design is clean, fast, and exactly what I needed. Worth every rupee.", stars: 5, av: "RS" },
  { name: "Priya Menon", role: "Owner, Iron Temple Gym", review: "Our membership enquiries doubled after the new website launched. Clients keep saying the website looks super professional.", stars: 5, av: "PM" },
  { name: "Arjun Kapoor", role: "Freelance Video Editor", review: "The promo page is insane. Clients see it and immediately think I am top-tier. Best investment I have ever made.", stars: 5, av: "AK" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="reviews" style={{ padding: "100px 64px", background: "linear-gradient(180deg,#080808,#0c0a06)" }}>
      <style>{`
        @media (max-width: 768px) {
          .reviews-section { padding: 72px 20px !important; }
          .reviews-grid { grid-template-columns: 1fr !important; }
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
            Client Reviews
          </p>
          <h2 className="display" style={{ fontSize: "clamp(28px,4vw,44px)", color: "#f0ece0", letterSpacing: "0.1em" }}>
            THEY LOVED IT
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ width: 48, height: 1, background: "linear-gradient(90deg,transparent,#d4a632,transparent)", margin: "14px auto 0" }}
          />
        </motion.div>

        <div
          className="reviews-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}
        >
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ y: -8, borderColor: "rgba(212,166,50,0.4)", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
              style={{
                background: "linear-gradient(145deg,#121212,#0d0d0d)",
                border: "1px solid rgba(212,166,50,0.13)",
                padding: 32, cursor: "default",
                transition: "border-color 0.3s",
              }}
            >
              <RiDoubleQuotesL style={{ color: "rgba(212,166,50,0.22)", fontSize: 32, marginBottom: 12 }} />
              <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                {Array(r.stars).fill(0).map((_, j) => (
                  <FaStar key={j} style={{ color: "#d4a632", fontSize: 12 }} />
                ))}
              </div>
              <p style={{
                fontSize: 14, color: "#c0a878", lineHeight: 1.9,
                fontStyle: "italic", marginBottom: 24, fontFamily: serif,
              }}>
                "{r.review}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <motion.div
                  style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: "linear-gradient(135deg,#d4a632,#c8941a)",
                    color: "#0d0d0d", fontWeight: 700, fontSize: 12,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: serif,
                  }}
                  whileHover={{ scale: 1.1 }}
                >{r.av}</motion.div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: 13, color: "#f0ece0", fontFamily: serif }}>{r.name}</p>
                  <p style={{ fontSize: 11, color: "#786050", letterSpacing: "0.04em", fontFamily: serif }}>{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}