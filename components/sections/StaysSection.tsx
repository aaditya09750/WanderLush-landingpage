"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SearchBar } from "@/components/ui/SearchBar";
import { FilterChips } from "@/components/ui/FilterChips";
import { StayCard } from "@/components/ui/StayCard";
import { Pagination } from "@/components/ui/Pagination";
import { STAY_FILTERS } from "@/constants/stays";
import { useStayFilter } from "@/hooks/useStayFilter";
import { revealVariants } from "@/lib/animations";

export function StaysSection() {
  const {
    activeCategory,
    setActiveCategory,
    filteredStays,
    currentPage,
    setCurrentPage,
    totalPages,
  } = useStayFilter("All");

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const staysSection = document.getElementById("stays");
    if (staysSection) {
      const topOffset = staysSection.getBoundingClientRect().top + window.scrollY - 40;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <section id="stays" className="section stays-section">
      <div className="site-container">
        <motion.div {...revealVariants}>
          <h2 className="center-title">
            A Selection Of Exceptional
            <br />
            Villas And Hotels
          </h2>

          <div className="filters">
            <SearchBar />
            <FilterChips
              categories={STAY_FILTERS}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-page-${currentPage}`}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="stay-grid"
          >
            {filteredStays.map((stay, i) => (
              <StayCard key={stay.id || stay.name} stay={stay} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
