"use client";

import React from "react";
import { cn } from "@/lib/cn";
import type { StayCategory } from "@/types";

export interface FilterChipsProps {
  categories: StayCategory[];
  activeCategory: StayCategory;
  onSelectCategory: (category: StayCategory) => void;
}

export function FilterChips({ categories, activeCategory, onSelectCategory }: FilterChipsProps) {
  return (
    <div className="chips" role="tablist" aria-label="Accommodation type">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={cn(isActive && "active")}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
