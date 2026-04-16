import { Link } from 'react-router-dom';
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import ProductFilters from "../components/ProductFilters";
import SearchBar from "../components/SearchBar";
import styles from "./Products.module.css";

function Products() {
  const {
    filtered,
    search,
    setSearch,
    category,
    setCategory,
    sortBy,
    setSortBy,
    priceRange,
    setPriceRange,
    clearFilters
  } = useProducts();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Premium Spirits</h1>
          <p className={styles.subtitle}>Discover our curated collection of fine liquors</p>
        </div>

        <SearchBar
          search={search} setSearch={setSearch}
          category={category} setCategory={setCategory}
          sortBy={sortBy} setSortBy={setSortBy}
          count={filtered.length}
        />

        <div className={styles.content}>
          <aside className={styles.sidebar}>
            <ProductFilters
              category={category}
              setCategory={setCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              onClearFilters={clearFilters}
            />
          </aside>

          <div className={styles.productsSection}>
            {filtered.length === 0 ? (
              <div className={styles.noResults}>
                <p>No products found matching your criteria</p>
                <button onClick={clearFilters}>Clear all filters</button>
              </div>
            ) : (
              <>
                <div className={styles.resultsHeader}>
                  <span className={styles.resultsCount}>
                    {filtered.length} product{filtered.length !== 1 ? 's' : ''} found
                  </span>
                </div>
                <div className={styles.grid}>
                  {filtered.map((product, i) => (
                    <div key={product.id} style={{ animationDelay: `${i * 0.05}s` }}>
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>🍷 LiquorHub</h3>
            <p>Your trusted destination for premium spirits. Discover exceptional quality, expert curation, and responsible service.</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Customer Service</h4>
            <ul>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Age Verification</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>Facebook</a>
              <a href="#" className={styles.socialLink}>Instagram</a>
              <a href="#" className={styles.socialLink}>Twitter</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 LiquorHub. All rights reserved. Must be 21+ to purchase alcohol.</p>
        </div>
      </footer>
    </main>
  );
}

export default Products;