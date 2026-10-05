"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  Check,
  ChevronDown,
  CircleUserRound,
  Minus,
  Plus,
  Search,
  WalletCards,
  X,
} from "lucide-react";

export interface SearchBarProps {
  onSearch?: () => void;
}

type DropdownType = "date" | "budget" | "guest" | null;

const DATE_PRESETS = [
  { label: "This Weekend", range: "Oct 10 - Oct 12" },
  { label: "Next Weekend", range: "Oct 17 - Oct 19" },
  { label: "Next 7 Days", range: "Oct 10 - Oct 17" },
  { label: "Golden Sunrise Season", range: "Oct 24 - Oct 28" },
];

const BUDGET_OPTIONS = [
  { id: "all", label: "All Price Ranges", sub: "Show all available stays" },
  { id: "tier-1", label: "$100 - $200 / night", sub: "Standard Villa & Eco Lodges" },
  { id: "tier-2", label: "$200 - $350 / night", sub: "Luxury Valley Villas & Resorts" },
  { id: "tier-3", label: "$350+ / night", sub: "Presidential Suites & Heritage Stays" },
];

export function SearchBar({ onSearch }: SearchBarProps) {
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter states
  const [selectedDate, setSelectedDate] = useState("Oct 12 - 16");
  const [customStart, setCustomStart] = useState("2026-10-12");
  const [customEnd, setCustomEnd] = useState("2026-10-16");

  const [selectedBudget, setSelectedBudget] = useState("$200 - $350");

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const guestSummary = `${adults + children} Guest${adults + children > 1 ? "s" : ""}, ${rooms} Room${rooms > 1 ? "s" : ""}`;

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (type: DropdownType) => {
    setActiveDropdown((prev) => (prev === type ? null : type));
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveDropdown(null);
    if (onSearch) {
      onSearch();
    } else {
      const staysEl = document.getElementById("stays");
      if (staysEl) {
        staysEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div ref={containerRef} className="search-bar-wrapper">
      <div className="search-bar" role="search" aria-label="Find accommodations">
        {/* Date Button */}
        <button
          type="button"
          onClick={() => toggleDropdown("date")}
          className={activeDropdown === "date" ? "active" : ""}
          aria-expanded={activeDropdown === "date"}
          aria-label="Select dates"
        >
          <CalendarDays size={16} />
          <div className="button-text">
            <small>Dates</small>
            <span>{selectedDate}</span>
          </div>
          <ChevronDown
            size={12}
            className={`chevron ${activeDropdown === "date" ? "rotated" : ""}`}
          />
        </button>

        {/* Budget Button */}
        <button
          type="button"
          onClick={() => toggleDropdown("budget")}
          className={activeDropdown === "budget" ? "active" : ""}
          aria-expanded={activeDropdown === "budget"}
          aria-label="Select budget"
        >
          <WalletCards size={16} />
          <div className="button-text">
            <small>Budget</small>
            <span>{selectedBudget}</span>
          </div>
          <ChevronDown
            size={12}
            className={`chevron ${activeDropdown === "budget" ? "rotated" : ""}`}
          />
        </button>

        {/* Guest Button */}
        <button
          type="button"
          onClick={() => toggleDropdown("guest")}
          className={activeDropdown === "guest" ? "active" : ""}
          aria-expanded={activeDropdown === "guest"}
          aria-label="Select guest count"
        >
          <CircleUserRound size={16} />
          <div className="button-text">
            <small>Guests</small>
            <span>{guestSummary}</span>
          </div>
          <ChevronDown
            size={12}
            className={`chevron ${activeDropdown === "guest" ? "rotated" : ""}`}
          />
        </button>

        {/* Search Submit Button */}
        <button
          type="button"
          className="search-btn"
          onClick={handleSearchSubmit}
          aria-label="Submit stay search"
        >
          <Search size={15} />
          <span>Search</span>
        </button>
      </div>

      {/* Custom Dropdown Overlays */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className={`search-dropdown dropdown-${activeDropdown}`}
          >
            {/* DATE DROPDOWN */}
            {activeDropdown === "date" && (
              <div className="dropdown-content">
                <div className="dropdown-header">
                  <h4>Select Travel Dates</h4>
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(null)}
                    aria-label="Close"
                    className="close-btn"
                  >
                    <X size={15} />
                  </button>
                </div>

                <div className="preset-list">
                  {DATE_PRESETS.map((p) => (
                    <button
                      key={p.label}
                      type="button"
                      className={`preset-item ${selectedDate === p.range ? "selected" : ""}`}
                      onClick={() => {
                        setSelectedDate(p.range);
                        setActiveDropdown(null);
                      }}
                    >
                      <div>
                        <strong>{p.label}</strong>
                        <small>{p.range}</small>
                      </div>
                      {selectedDate === p.range && <Check size={14} />}
                    </button>
                  ))}
                </div>

                <div className="custom-date-inputs">
                  <div className="date-field">
                    <label htmlFor="check-in">Check In</label>
                    <input
                      id="check-in"
                      type="date"
                      value={customStart}
                      onChange={(e) => {
                        setCustomStart(e.target.value);
                        setSelectedDate(`${e.target.value} - ${customEnd}`);
                      }}
                    />
                  </div>
                  <div className="date-field">
                    <label htmlFor="check-out">Check Out</label>
                    <input
                      id="check-out"
                      type="date"
                      value={customEnd}
                      onChange={(e) => {
                        setCustomEnd(e.target.value);
                        setSelectedDate(`${customStart} - ${e.target.value}`);
                      }}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  className="dropdown-apply-btn"
                  onClick={() => setActiveDropdown(null)}
                >
                  Apply Dates
                </button>
              </div>
            )}

            {/* BUDGET DROPDOWN */}
            {activeDropdown === "budget" && (
              <div className="dropdown-content">
                <div className="dropdown-header">
                  <h4>Nightly Budget Range</h4>
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(null)}
                    aria-label="Close"
                    className="close-btn"
                  >
                    <X size={15} />
                  </button>
                </div>

                <div className="budget-list">
                  {BUDGET_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      className={`budget-item ${selectedBudget === opt.label ? "selected" : ""}`}
                      onClick={() => {
                        setSelectedBudget(opt.label);
                        setActiveDropdown(null);
                      }}
                    >
                      <div className="budget-text">
                        <strong>{opt.label}</strong>
                        <small>{opt.sub}</small>
                      </div>
                      {selectedBudget === opt.label && <Check size={15} />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* GUEST DROPDOWN */}
            {activeDropdown === "guest" && (
              <div className="dropdown-content">
                <div className="dropdown-header">
                  <h4>Guests & Rooms</h4>
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(null)}
                    aria-label="Close"
                    className="close-btn"
                  >
                    <X size={15} />
                  </button>
                </div>

                <div className="counter-list">
                  {/* Adults */}
                  <div className="counter-row">
                    <div>
                      <strong>Adults</strong>
                      <small>Ages 13 and above</small>
                    </div>
                    <div className="counter-controls">
                      <button
                        type="button"
                        onClick={() => setAdults((a) => Math.max(1, a - 1))}
                        disabled={adults <= 1}
                        aria-label="Decrease adults"
                      >
                        <Minus size={13} />
                      </button>
                      <span>{adults}</span>
                      <button
                        type="button"
                        onClick={() => setAdults((a) => a + 1)}
                        aria-label="Increase adults"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="counter-row">
                    <div>
                      <strong>Children</strong>
                      <small>Ages 0 - 12</small>
                    </div>
                    <div className="counter-controls">
                      <button
                        type="button"
                        onClick={() => setChildren((c) => Math.max(0, c - 1))}
                        disabled={children <= 0}
                        aria-label="Decrease children"
                      >
                        <Minus size={13} />
                      </button>
                      <span>{children}</span>
                      <button
                        type="button"
                        onClick={() => setChildren((c) => c + 1)}
                        aria-label="Increase children"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>

                  {/* Rooms */}
                  <div className="counter-row">
                    <div>
                      <strong>Rooms</strong>
                      <small>Number of suites</small>
                    </div>
                    <div className="counter-controls">
                      <button
                        type="button"
                        onClick={() => setRooms((r) => Math.max(1, r - 1))}
                        disabled={rooms <= 1}
                        aria-label="Decrease rooms"
                      >
                        <Minus size={13} />
                      </button>
                      <span>{rooms}</span>
                      <button
                        type="button"
                        onClick={() => setRooms((r) => r + 1)}
                        aria-label="Increase rooms"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="dropdown-apply-btn"
                  onClick={() => setActiveDropdown(null)}
                >
                  Apply Guests ({adults + children})
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
