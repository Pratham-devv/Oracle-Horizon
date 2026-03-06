
const GlassCard = ({ children, className }) => {
  return (
    <div
      className={`bg-primary/40 backdrop-blur-xl border border-gold/20 rounded-xl ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;