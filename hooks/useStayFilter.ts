"use client";

import { useState, useMemo, useEffect } from "react";
import { STAYS_DATA } from "@/constants/stays";
import type { StayCategory, StayItem } from "@/types";

export const ITEMS_PER_PAGE = 6;

export function useStayFilter(initialCategory: StayCategory = "All") {
  const [activeCategory, setActiveCategory] = useState<StayCategory>(initialCategory);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Reset to page 1 whenever category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const allFilteredStays = useMemo<StayItem[]>(() => {
    if (activeCategory === "All") {
      return STAYS_DATA;
    }
    return STAYS_DATA.filter(
      (stay) => stay.category?.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  const totalPages = Math.max(1, Math.ceil(allFilteredStays.length / ITEMS_PER_PAGE));

  const paginatedStays = useMemo<StayItem[]>(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return allFilteredStays.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [allFilteredStays, currentPage]);

  return {
    activeCategory,
    setActiveCategory,
    filteredStays: paginatedStays,
    allFilteredStays,
    currentPage,
    setCurrentPage,
    totalPages,
    totalCount: allFilteredStays.length,
    itemsPerPage: ITEMS_PER_PAGE,
  };
}
