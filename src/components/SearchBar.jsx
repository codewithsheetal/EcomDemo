import styles from "./SearchBar.module.css";

const SORT_OPTIONS = [
  { value: "default", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

function SearchBar({ search, setSearch, sortBy, setSortBy, count }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.searchRow}>
        <div className={styles.inputWrap}>
          <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="Search spirits..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.input}
          />
          {search && (
            <button className={styles.clearBtn} onClick={() => setSearch("")}>✕</button>
          )}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className={styles.select}
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div className={styles.filterRow}>
        <span className={styles.count}>{count} products</span>
      </div>
    </div>
  );
}

export default SearchBar;