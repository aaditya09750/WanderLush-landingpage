"use client";

import React from "react";
import { NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/lib/cn";

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <nav
      className={cn("nav", isOpen && "open")}
      onClick={onClose}
      aria-label="Mobile Navigation"
      aria-hidden={!isOpen}
    >
      {NAV_LINKS.map((link) => (
        <a key={link.label} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
