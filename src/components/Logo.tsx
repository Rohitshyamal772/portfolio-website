import React from "react";

interface LogoProps {
  showText?: boolean;
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ showText = true, className = "", size = 28 }) => {
  return (
    <div className={`logo-container ${className}`} style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="logo-icon"
        style={{ display: "block" }}
      >
        {/* Leftmost diagonal */}
        <line x1="22" y1="44" x2="38" y2="60" />
        {/* Middle diagonal */}
        <line x1="29" y1="39" x2="56" y2="66" />
        {/* Main stem & leg */}
        <line x1="32" y1="30" x2="74" y2="72" />
        {/* Loop of R */}
        <path d="M32 30 H58 C72 30, 72 52, 54 52" />
      </svg>
      {showText && (
        <span
          className="logo-text"
          style={{
            fontFamily: '"Times New Roman", Times, serif',
            fontSize: "14px",
            fontWeight: "700",
            letterSpacing: "3px",
            textTransform: "uppercase",
            lineHeight: "1",
            color: "inherit",
          }}
        >
          ROHIT SHYAMAL
        </span>
      )}
    </div>
  );
};

export default Logo;
