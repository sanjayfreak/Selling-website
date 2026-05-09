const serif = "'Cormorant Garamond', Georgia, serif";

export default function GoldBadge({ children }) {
  return (
    <span
      className="glow-pulse"
      style={{
        background: "linear-gradient(135deg, #d4a632, #f5d176, #c8941a)",
        color: "#0d0d0d",
        padding: "4px 14px",
        fontSize: 16,
        letterSpacing: "0.06em",
        display: "inline-block",
        boxShadow: "0 0 18px rgba(212,166,50,0.4)",
        fontFamily: serif,
        fontWeight: 700,
      }}
    >
      {children}
    </span>
  );
}