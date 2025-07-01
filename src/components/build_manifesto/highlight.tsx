import type React from "react";

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
}

export function Highlight({ children, className = "" }: HighlightProps) {
  return (
    <span
      style={{
        background: "radial-gradient(circle, #C0C0C0, #A9A9A9, #808080)",
      }}
      className={`text-black px-2 py-1 rounded-md font-medium ${className}`}
    >
      {children}
    </span>
  );
}