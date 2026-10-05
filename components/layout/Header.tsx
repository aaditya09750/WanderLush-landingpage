"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/constants/navigation";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar-wrapper">
      <div className="site-container topbar">
        <Logo />

        <button
          type="button"
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={cn("nav", open && "open")} onClick={() => setOpen(false)}>
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#stays" className="schedule">
          Schedule Now
        </a>
      </div>
    </header>
  );
}
