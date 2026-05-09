import { useEffect, useState } from "react";

export default function Loader() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "radial-gradient(ellipse at center, #1a1200 0%, #0a0800 60%, #000000 100%)",
      zIndex: 9999,
      opacity: fade ? 0 : 1,
      transition: "opacity 0.8s ease",
      overflow: "hidden",
    }}>

      {/* Background particles */}
      {[...Array(12)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          width: `${Math.random() * 4 + 2}px`,
          height: `${Math.random() * 4 + 2}px`,
          borderRadius: "50%",
          background: "radial-gradient(circle, #ffd700, #b8860b)",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `floatParticle ${Math.random() * 3 + 2}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`,
          opacity: 0.6,
        }} />
      ))}

      {/* Outer glow ring */}
      <div style={{
        position: "absolute",
        width: "180px",
        height: "180px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 70%)",
        animation: "glowPulse 2s ease-in-out infinite",
      }} />

      {/* Main spinner container */}
      <div style={{ position: "relative", width: "120px", height: "120px" }}>

        {/* Outermost ring */}
        <div style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          border: "2px solid rgba(255,215,0,0.15)",
          borderTop: "2px solid #ffd700",
          borderRight: "2px solid #ffa500",
          boxShadow: "0 0 20px rgba(255,215,0,0.5), inset 0 0 20px rgba(255,215,0,0.05)",
          animation: "spinOuter 1.2s linear infinite",
        }} />

        {/* Second ring */}
        <div style={{
          position: "absolute",
          inset: "14px",
          borderRadius: "50%",
          border: "2px solid rgba(255,165,0,0.15)",
          borderBottom: "2px solid #ffa500",
          borderLeft: "2px solid #ffd700",
          boxShadow: "0 0 15px rgba(255,165,0,0.4)",
          animation: "spinInner 0.9s linear infinite reverse",
        }} />

        {/* Third ring */}
        <div style={{
          position: "absolute",
          inset: "28px",
          borderRadius: "50%",
          border: "2px solid rgba(255,215,0,0.1)",
          borderTop: "2px solid #b8860b",
          borderRight: "2px solid #ffd700",
          animation: "spinOuter 0.7s linear infinite",
        }} />

        {/* Center emblem */}
        <div style={{
          position: "absolute",
          inset: "42px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #ffd700 0%, #b8860b 40%, #ffa500 70%, #ffd700 100%)",
          boxShadow: "0 0 25px rgba(255,215,0,0.8), 0 0 50px rgba(255,165,0,0.4)",
          animation: "centerPulse 1.5s ease-in-out infinite",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          {/* Star in center */}
          <div style={{
            fontSize: "14px",
            animation: "starSpin 3s linear infinite",
          }}>✦</div>
        </div>

        {/* Orbiting dot */}
        <div style={{
          position: "absolute",
          inset: 0,
          animation: "orbitDot 1.5s linear infinite",
        }}>
          <div style={{
            position: "absolute",
            top: "4px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #fff8dc, #ffd700)",
            boxShadow: "0 0 10px #ffd700, 0 0 20px rgba(255,215,0,0.6)",
          }} />
        </div>

      </div>

      {/* Brand name */}
      <div style={{
        marginTop: "36px",
        fontSize: "22px",
        fontWeight: "700",
        letterSpacing: "8px",
        textTransform: "uppercase",
        background: "linear-gradient(90deg, #b8860b, #ffd700, #fffacd, #ffd700, #b8860b)",
        backgroundSize: "300%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation: "goldShimmer 2.5s linear infinite",
        fontFamily: "'Georgia', serif",
      }}>
        Portfolio
      </div>

      {/* Divider line */}
      <div style={{
        marginTop: "12px",
        width: "0px",
        height: "1px",
        background: "linear-gradient(90deg, transparent, #ffd700, transparent)",
        animation: "expandLine 2s ease forwards",
        animationDelay: "0.3s",
      }} />

      {/* Subtitle */}
      <div style={{
        marginTop: "12px",
        fontSize: "11px",
        letterSpacing: "5px",
        color: "rgba(255,215,0,0.5)",
        textTransform: "uppercase",
        fontFamily: "'Georgia', serif",
        animation: "fadeInUp 1s ease forwards",
        opacity: 0,
        animationDelay: "0.6s",
      }}>
        Crafting Excellence
      </div>

      {/* Bottom dots */}
      <div style={{ display: "flex", gap: "10px", marginTop: "24px" }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} style={{
            width: i === 2 ? "20px" : "6px",
            height: "2px",
            borderRadius: "2px",
            background: i === 2
              ? "linear-gradient(90deg, #ffa500, #ffd700)"
              : "rgba(255,215,0,0.3)",
            animation: `dotPulse 1s ease-in-out infinite`,
            animationDelay: `${i * 0.15}s`,
          }} />
        ))}
      </div>

      <style>{`
        @keyframes spinOuter {
          to { transform: rotate(360deg); }
        }
        @keyframes spinInner {
          to { transform: rotate(360deg); }
        }
        @keyframes centerPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 25px rgba(255,215,0,0.8), 0 0 50px rgba(255,165,0,0.4); }
          50% { transform: scale(1.15); box-shadow: 0 0 35px rgba(255,215,0,1), 0 0 70px rgba(255,165,0,0.6); }
        }
        @keyframes orbitDot {
          to { transform: rotate(360deg); }
        }
        @keyframes starSpin {
          to { transform: rotate(360deg); }
        }
        @keyframes glowPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.3); opacity: 1; }
        }
        @keyframes goldShimmer {
          0% { background-position: 0% }
          100% { background-position: 300% }
        }
        @keyframes expandLine {
          to { width: 120px; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-20px) scale(1.3); opacity: 1; }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}