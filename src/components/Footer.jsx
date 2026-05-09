import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const serif = "'Cormorant Garamond', Georgia, serif";

const socials = [
  { Icon: FaInstagram, href: "#", label: "Instagram" },
  { Icon: FaTwitter, href: "#", label: "Twitter" },
  { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { Icon: FaWhatsapp, href:"https://wa.me/918124530116", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer style={{
      padding: "28px 64px",
      borderTop: "1px solid rgba(212,166,50,0.09)",
      background: "#060606",
      display: "flex", alignItems: "center",
      justifyContent: "space-between", flexWrap: "wrap", gap: 16,
    }}>
      <span className="display" style={{ color: "#d4a632", fontSize: 18, letterSpacing: "0.22em" }}>
      FreakyWebDesigners
      </span>
      <p style={{ fontSize: 11, color: "#403020", letterSpacing: "0.06em", fontFamily: serif }}>
        © 2025 FreakyWebDesigners — Built with love in India
      </p>
      <div style={{ display: "flex", gap: 18 }}>
        {socials.map(({ Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#60503a", fontSize: 16, textDecoration: "none" }}
            whileHover={{ color: "#d4a632", y: -3, scale: 1.2 }}
            title={label}
          >
            <Icon />
          </motion.a>
        ))}
      </div>
    </footer>
  );
}