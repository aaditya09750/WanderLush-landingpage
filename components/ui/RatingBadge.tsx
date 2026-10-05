import React from "react";
import { cn } from "@/lib/cn";

export interface RatingBadgeProps {
  rating?: string;
  className?: string;
}

export function RatingBadge({ rating = "★ 4.9", className }: RatingBadgeProps) {
  const displayRating = rating.startsWith("★") ? rating : `★ ${rating}`;
  return <span className={cn("rating", className)}>{displayRating}</span>;
}
