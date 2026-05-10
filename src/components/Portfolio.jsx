import { useState } from "react";
import { motion } from "framer-motion";
import { HiArrowLeft, HiExternalLink } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Modern Student Portfolio",
    tag: "Portfolio Website · 2026",
    description:
      "A clean and modern student portfolio website designed with smooth animations, responsive layouts, and elegant UI to showcase skills, projects, and achievements professionally.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://portfolio-for-students.vercel.app",
    image: "/stu.png",
  },
  {
    id: 2,
    number: "02",
    title: "Elite Fitness Gym Website",
    tag: "Gym Landing Page · 2026",
    description:
      "A modern and energetic gym website designed to attract new members with bold visuals, smooth animations, responsive layouts, and strong call-to-action sections for fitness programs and memberships.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://portfolio-for-gym.vercel.app",
    image: "/gym.png",
  },
  {
    id: 3,
    number: "03",
    title: "Creative Video Editor Portfolio",
    tag: "Freelancer Portfolio · 2026",
    description:
      "A cinematic portfolio website built for a freelance video editor to showcase editing projects, client work, services, and social proof through immersive visuals and smooth user interactions.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://portfolio-for-freelancer.vercel.app/",
    image: "/free.png",
  },
];

export default function Portfolio() {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,166,50,0.10) 0%, transparent 60%), #080808",
        color: "#f0ece0",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        paddingTop: 96,
        paddingBottom: 80,
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .portfolio-back { margin-left: 20px !important; margin-bottom: 40px !important; }
          .portfolio-card {
            grid-template-columns: 1fr !important;
            padding: 28px 20px !important;
            gap: 16px !important;
          }
          .portfolio-number { font-size: 36px !important; }
          .portfolio-link { align-self: flex-start !important; margin-top: 8px !important; }
        }
      `}</style>

      {/* Back button */}
      <motion.a
        href="/"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="portfolio-back"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          color: "#b89a50",
          textDecoration: "none",
          fontSize: 13,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginLeft: 56,
          marginBottom: 64,
        }}
        whileHover={{ color: "#d4a632", x: -4 }}
      >
        <HiArrowLeft /> Back to Home
      </motion.a>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{ textAlign: "center", marginBottom: 80, padding: "0 24px" }}
      >
        <p
          style={{
            color: "#d4a632",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.45em",
            marginBottom: 20,
            fontWeight: 500,
          }}
        >
          Selected Work
        </p>
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 64px)",
            fontWeight: 700,
            letterSpacing: "0.06em",
            margin: 0,
            background: "linear-gradient(90deg,#d4a632,#f5d176,#ffe599,#d4a632)",
            backgroundSize: "300% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "shimmer 4s linear infinite",
          }}
        >
          MY SAMPLE PORTFOLIO'S
        </h1>
        <div
          style={{
            width: 60,
            height: 1,
            background: "linear-gradient(90deg, transparent, #d4a632, transparent)",
            margin: "24px auto 0",
          }}
        />
      </motion.div>

      {/* Project Cards */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
            onHoverStart={() => setHovered(project.id)}
            onHoverEnd={() => setHovered(null)}
            className="portfolio-card"
            style={{
              border: "1px solid",
              borderColor:
                hovered === project.id
                  ? "rgba(212,166,50,0.4)"
                  : "rgba(212,166,50,0.12)",
              background:
                hovered === project.id
                  ? "rgba(212,166,50,0.04)"
                  : "transparent",
              padding: "40px 48px",
              display: "grid",
              gridTemplateColumns: "80px 1fr auto",
              gap: 32,
              alignItems: "center",
              cursor: "default",
              transition: "border-color 0.3s ease, background 0.3s ease",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Hover glow */}
            {hovered === project.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0, bottom: 0,
                  background:
                    "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(212,166,50,0.06) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
            )}

            {/* Number */}
            <span
              className="portfolio-number"
              style={{
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 700,
                color:
                  hovered === project.id
                    ? "rgba(212,166,50,0.35)"
                    : "rgba(212,166,50,0.15)",
                letterSpacing: "0.05em",
                lineHeight: 1,
                transition: "color 0.3s ease",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              {project.number}
            </span>

            {/* Content */}
            <div>
              <p
                style={{
                  fontSize: 11,
                  color: "#d4a632",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  marginBottom: 10,
                  fontWeight: 500,
                }}
              >
                {project.tag}
              </p>

              {/* Image */}
              <div
                style={{
                  width: "100%",
                  maxWidth: 520,
                  height: project.image ? "auto" : 180,
                  marginBottom: 20,
                  border: "1px solid rgba(212,166,50,0.15)",
                  background: project.image ? "none" : "rgba(212,166,50,0.03)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: "100%", display: "block" }}
                  />
                ) : (
                  <div style={{ textAlign: "center", padding: 24 }}>
                    <p style={{ color: "rgba(212,166,50,0.3)", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 8 }}>
                      Add Screenshot
                    </p>
                    <p style={{ color: "rgba(212,166,50,0.18)", fontSize: 11, letterSpacing: "0.15em" }}>
                      Replace image: null with your image path
                    </p>
                  </div>
                )}
              </div>

              <h2
                style={{
                  fontSize: "clamp(18px, 2.5vw, 28px)",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: hovered === project.id ? "#f5d176" : "#f0ece0",
                  marginBottom: 10,
                  transition: "color 0.3s ease",
                }}
              >
                {project.title}
              </h2>

              <p
                style={{
                  fontSize: 14,
                  color: "#887060",
                  lineHeight: 1.8,
                  maxWidth: 500,
                  marginBottom: 16,
                }}
              >
                {project.description}
              </p>

              {/* Tech tags */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#b89a50",
                      border: "1px solid rgba(212,166,50,0.2)",
                      padding: "4px 10px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Link */}
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#d4a632",
                textDecoration: "none",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                border: "1px solid rgba(212,166,50,0.3)",
                padding: "10px 20px",
                whiteSpace: "nowrap",
                fontWeight: 600,
              }}
              whileHover={{
                background: "rgba(212,166,50,0.1)",
                borderColor: "rgba(212,166,50,0.7)",
                scale: 1.03,
              }}
              whileTap={{ scale: 0.97 }}
            >
              View Site <HiExternalLink size={13} />
            </motion.a>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        style={{ textAlign: "center", marginTop: 80, padding: "0 24px" }}
      >
        <div
          style={{
            width: 60,
            height: 1,
            background: "linear-gradient(90deg, transparent, #d4a632, transparent)",
            margin: "0 auto 32px",
          }}
        />
        <p
          style={{
            color: "#887060",
            fontSize: 14,
            letterSpacing: "0.05em",
            marginBottom: 24,
          }}
        >
          Like what you see? Let's build something together.
        </p>
        <motion.a
          href="https://wa.me/918124530116"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "linear-gradient(135deg,#d4a632,#c8941a)",
            color: "#0d0d0d",
            padding: "14px 40px",
            fontSize: 13,
            letterSpacing: "0.15em",
            textDecoration: "none",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
          whileHover={{
            scale: 1.04,
            y: -2,
            boxShadow: "0 8px 40px rgba(212,166,50,0.35)",
          }}
          whileTap={{ scale: 0.97 }}
        >
          <FaWhatsapp size={15} /> Hire Me on WhatsApp
        </motion.a>
      </motion.div>
    </div>
  );
}