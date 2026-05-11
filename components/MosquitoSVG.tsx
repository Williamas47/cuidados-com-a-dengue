export default function MosquitoSVG({ size = 320 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 340 340"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-float drop-shadow-2xl"
      aria-hidden="true"
    >
      {/* Body */}
      <ellipse cx="170" cy="200" rx="36" ry="60" fill="#4A3728" />
      {/* Yellow stripes */}
      <ellipse cx="170" cy="182" rx="36" ry="9" fill="#F5E642" opacity="0.75" />
      <ellipse cx="170" cy="202" rx="36" ry="9" fill="#F5E642" opacity="0.75" />
      <ellipse cx="170" cy="222" rx="36" ry="9" fill="#F5E642" opacity="0.75" />

      {/* Head */}
      <circle cx="170" cy="134" r="28" fill="#4A3728" />

      {/* Eyes white */}
      <circle cx="158" cy="128" r="10" fill="white" />
      <circle cx="182" cy="128" r="10" fill="white" />
      {/* Pupils */}
      <circle cx="160" cy="130" r="6" fill="#111" />
      <circle cx="184" cy="130" r="6" fill="#111" />
      {/* Eye shine */}
      <circle cx="162" cy="128" r="2" fill="white" />
      <circle cx="186" cy="128" r="2" fill="white" />

      {/* Antennae */}
      <line x1="158" y1="108" x2="142" y2="80" stroke="#4A3728" strokeWidth="3" strokeLinecap="round" />
      <line x1="182" y1="108" x2="198" y2="80" stroke="#4A3728" strokeWidth="3" strokeLinecap="round" />
      <circle cx="142" cy="78" r="5" fill="#FF6B35" />
      <circle cx="198" cy="78" r="5" fill="#FF6B35" />

      {/* Proboscis */}
      <line x1="170" y1="160" x2="170" y2="206" stroke="#4A3728" strokeWidth="3" strokeLinecap="round" />

      {/* Wings left */}
      <ellipse cx="116" cy="155" rx="54" ry="20" fill="#A8D8EA" opacity="0.7" transform="rotate(-22 116 155)" />
      <ellipse cx="108" cy="178" rx="40" ry="13" fill="#A8D8EA" opacity="0.45" transform="rotate(-15 108 178)" />
      {/* Wings right */}
      <ellipse cx="224" cy="155" rx="54" ry="20" fill="#A8D8EA" opacity="0.7" transform="rotate(22 224 155)" />
      <ellipse cx="232" cy="178" rx="40" ry="13" fill="#A8D8EA" opacity="0.45" transform="rotate(15 232 178)" />

      {/* Legs left */}
      <line x1="143" y1="188" x2="86" y2="218" stroke="#4A3728" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="138" y1="205" x2="82" y2="238" stroke="#4A3728" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="143" y1="222" x2="86" y2="258" stroke="#4A3728" strokeWidth="2.5" strokeLinecap="round" />
      {/* Legs right */}
      <line x1="197" y1="188" x2="254" y2="218" stroke="#4A3728" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="202" y1="205" x2="258" y2="238" stroke="#4A3728" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="197" y1="222" x2="254" y2="258" stroke="#4A3728" strokeWidth="2.5" strokeLinecap="round" />

      {/* Evil smile */}
      <path d="M156 147 Q170 156 184 147" stroke="#4A3728" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Villain hat */}
      <rect x="143" y="97" width="54" height="8" rx="4" fill="#111" />
      <rect x="151" y="68" width="38" height="30" rx="4" fill="#111" />
      <rect x="151" y="88" width="38" height="6" fill="#FF6B35" />

      {/* Zap sparks */}
      <text x="66" y="108" fontSize="28" fill="#FFD700">⚡</text>
      <text x="244" y="108" fontSize="28" fill="#FFD700">⚡</text>
    </svg>
  );
}
