export const GOLD = "#d4a632";
export const GOLD2 = "#f5d176";
export const GOLD3 = "#c8941a";
export const BG = "#080808";
export const BG2 = "#0d0d0d";
export const BG3 = "#121212";
export const TEXT = "#f0ece0";
export const MUTED = "#a89060";
export const DIM = "#887060";

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');
  *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
  html { scroll-behavior:smooth; }
  body { background:#080808; color:#f0ece0; overflow-x:hidden; font-family:'DM Sans',sans-serif; }
  ::-webkit-scrollbar { width:5px; }
  ::-webkit-scrollbar-track { background:#0d0d0d; }
  ::-webkit-scrollbar-thumb { background:#d4a632; border-radius:3px; }
  @keyframes shimmer {
    0% { background-position:-300% center; }
    100% { background-position:300% center; }
  }
  @keyframes pulseGlow {
    0%,100% { box-shadow:0 0 20px rgba(212,166,50,0.4),0 0 50px rgba(212,166,50,0.15); }
    50% { box-shadow:0 0 40px rgba(212,166,50,0.8),0 0 90px rgba(212,166,50,0.3); }
  }
  @keyframes floatUp {
    0%,100% { transform:translateY(0); }
    50% { transform:translateY(-10px); }
  }
  @keyframes rotateSlow {
    from { transform:rotate(0deg); }
    to { transform:rotate(360deg); }
  }
  .display { font-family:'Bebas Neue',sans-serif; }
  .gold-text {
    background:linear-gradient(90deg,#d4a632,#f5d176,#ffe599,#d4a632,#c8941a);
    background-size:300% auto;
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    background-clip:text;
    animation:shimmer 4s linear infinite;
  }
  .glow-btn { animation:pulseGlow 2.5s ease-in-out infinite; }
  .nav-link { color:#a89060; text-decoration:none; font-size:14px; letter-spacing:0.05em; transition:color 0.2s; position:relative; }
  .nav-link::after { content:''; position:absolute; bottom:-4px; left:0; width:0; height:1px; background:#d4a632; transition:width 0.3s; }
  .nav-link:hover { color:#f5d176; }
  .nav-link:hover::after { width:100%; }
  @media (max-width:768px) {
    .hide-mobile { display:none !important; }
    .grid-3 { grid-template-columns:1fr !important; }
    .grid-4 { grid-template-columns:1fr 1fr !important; }
  }
`;