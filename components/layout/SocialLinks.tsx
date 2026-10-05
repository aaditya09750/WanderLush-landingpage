import React from "react";
import { Camera, Video } from "lucide-react";
import { cn } from "@/lib/cn";

export interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("socials", className)} aria-label="Social media channels">
      <a href="#footer" aria-label="Instagram">
        <Camera size={10} />
      </a>
      <a href="#footer" aria-label="Facebook">
        f
      </a>
      <a href="#footer" aria-label="Youtube">
        <Video size={10} />
      </a>
    </div>
  );
}
