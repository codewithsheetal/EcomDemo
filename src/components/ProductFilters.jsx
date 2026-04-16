import { useState } from "react";
import styles from "./ProductFilters.module.css";

const CATEGORIES = ["All", "Whiskey", "Vodka", "Tequila", "Gin", "Cognac", "Scotch", "Champagne"];
const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under ₹2000", min: 0, max: 2000 },
  { label: "₹2000 - ₹4000", min: 2000, max: 4000 },
  { label: "₹4000 - ₹6000", min: 4000, max: 6000 },
  { label: "Over ₹6000", min: 6000, max: Infinity },
];

function ProductFilters({ category, setCategory, priceRange, setPriceRange, onClearFilters }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile filter toggle */}
      <button
        className={styles.mobileToggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
        </svg>
        Filters
        {(category !== "All" || priceRange.min > 0) && (
          <span className={styles.activeIndicator}></span>
        )}
      </button>

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.header}>
          <h3>Filters</h3>
          <button
            className={styles.closeBtn}
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Categories */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Category</h4>
          <div className={styles.categoryList}>
            {CATEGORIES.map((cat) => (
              <label key={cat} className={styles.checkboxLabel}>
                <input
                  type="radio"
                  name="category"
                  checked={category === cat}
                  onChange={() => setCategory(cat)}
                  className={styles.checkbox}
                />
                <span className={styles.checkmark}></span>
                {cat}
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Price Range</h4>
          <div className={styles.priceList}>
            {PRICE_RANGES.map((range) => (
              <label key={range.label} className={styles.checkboxLabel}>
                <input
                  type="radio"
                  name="priceRange"
                  checked={priceRange.min === range.min && priceRange.max === range.max}
                  onChange={() => setPriceRange(range)}
                  className={styles.checkbox}
                />
                <span className={styles.checkmark}></span>
                {range.label}
              </label>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <div className={styles.section}>
          <button
            className={styles.clearBtn}
            onClick={onClearFilters}
            disabled={category === "All" && priceRange.min === 0}
          >
            Clear All Filters
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default ProductFilters;