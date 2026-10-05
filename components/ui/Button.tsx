import React from "react";
import { cn } from "@/lib/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "dark" | "line" | "menu";
  href?: string;
  children: React.ReactNode;
}

export function Button({ variant = "dark", className, children, href, ...props }: ButtonProps) {
  const variantClasses = {
    primary: "primary-btn",
    dark: "dark-btn",
    line: "line-btn",
    menu: "menu-button",
  }[variant];

  if (href) {
    return (
      <a href={href} className={cn(variantClasses, className)}>
        {children}
      </a>
    );
  }

  return (
    <button className={cn(variantClasses, className)} {...props}>
      {children}
    </button>
  );
}
