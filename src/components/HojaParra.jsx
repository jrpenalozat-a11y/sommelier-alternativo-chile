import React from 'react';

// Hoja de parra (vid) estilizada — SVG dibujado, hereda el color (currentColor)
export default function HojaParra({ size = 36 }) {
  return (
    <svg
      className="hoja-parra"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      aria-hidden="true"
      role="img"
    >
      <path
        fill="currentColor"
        d="M32 61 C31 53 31 50 32 45
           C27 49 20 51 13 50 C17 46 20 43 21 39
           C15 40 9 39 5 35 C11 33 15 31 18 27
           C13 26 10 23 8 18 C14 19 19 20 23 19
           C21 14 21 9 23 4 C26 8 29 12 30 17
           C31 13 31 9 32 5 C33 9 33 13 34 17
           C35 12 38 8 41 4 C43 9 43 14 41 19
           C45 20 50 19 56 18 C54 23 51 26 46 27
           C49 31 53 33 59 35 C55 39 49 40 43 39
           C44 43 47 46 51 50 C44 51 37 49 32 45
           C33 50 33 53 32 61 Z"
      />
      <g stroke="rgba(20,40,25,0.28)" strokeWidth="1.3" fill="none" strokeLinecap="round">
        <path d="M32 52 L32 8" />
        <path d="M32 46 L11 21" />
        <path d="M32 46 L53 21" />
        <path d="M32 48 L8 35" />
        <path d="M32 48 L56 35" />
      </g>
    </svg>
  );
}
