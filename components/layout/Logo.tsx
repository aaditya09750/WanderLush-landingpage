import React from "react";

export interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <a href="#home" className={className || "logo"} aria-label="Wanderlush home">
      WANDERLUSH
    </a>
  );
}
