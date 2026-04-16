import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import styles from "./Home.module.css";

function Home() {
  const { filtered, search, setSearch, category, setCategory, sortBy, setSortBy } = useProducts();

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroPattern}></div>
        </div>
        
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeText}>🍷 Premium Selection</span>
            </div>
            <h1 className={styles.heroTitle}>
              Discover Your<br />
              <span className={styles.heroTitleAccent}>Perfect</span> Pour
            </h1>
            <p className={styles.heroSub}>
              Curated collection of premium spirits, wines, and liquors. 
              Quality beverages for every occasion and taste preference.
            </p>
            <div className={styles.heroActions}>
              <Link to="/products" className={styles.heroBtnPrimary}>
                Shop Spirits →
              </Link>
              <button className={styles.heroBtnSecondary} onClick={() => document.getElementById("products").scrollIntoView({ behavior: "smooth" })}>
                Explore Below
              </button>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>200+</span>
                <span className={styles.statLabel}>Premium Brands</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>4.9★</span>
                <span className={styles.statLabel}>Customer Rating</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>21+</span>
                <span className={styles.statLabel}>Age Verified</span>
              </div>
            </div>
          </div>
          
          <div className={styles.heroVisual}>
            <div className={styles.heroImageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80"
                alt="Premium Liquor Collection"
                className={styles.heroImage}
              />
              <div className={styles.heroImageBadge}>
                <div className={styles.heroImageBadgeContent}>
                  <span className={styles.heroImageBadgeTitle}>Limited Edition</span>
                  <span className={styles.heroImageBadgeSubtitle}>Rare Finds Available</span>
                </div>
              </div>
            </div>
            <div className={styles.heroFloatingCard}>
              <div className={styles.heroFloatingCardContent}>
                <span className={styles.heroFloatingCardTitle}>Free Delivery</span>
                <span className={styles.heroFloatingCardSubtitle}>On orders over ₹2999</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Choose LiquorHub?</h2>
            <p className={styles.sectionSubtitle}>Experience premium spirits shopping with our trusted platform</p>
          </div>
          
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3>Age Verified</h3>
              <p>Secure age verification ensures responsible alcohol sales and delivery</p>
            </div>
            
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"/>
                  <path d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"/>
                </svg>
              </div>
              <h3>Premium Selection</h3>
              <p>Curated collection of authentic premium spirits from renowned distilleries worldwide</p>
            </div>
            
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                  <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                  <path d="M12 3c-2 0-5 1-5 3 0 1 1 2 3 2s3-1 3-2c0-2-3-3-3-3"/>
                  <path d="M12 21c2 0 5-1 5-3 0-1-1-2-3-2s-3 1-3 2c0 2 3 3 3 3"/>
                </svg>
              </div>
              <h3>Expert Support</h3>
              <p>Our spirits experts are available to help you find the perfect drink for any occasion</p>
            </div>
            
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Trusted Reviews</h3>
              <p>Join thousands of satisfied customers who trust us for their premium spirits needs</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.categories}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Shop by Spirit Type</h2>
            <p className={styles.sectionSubtitle}>Explore our diverse collection of premium spirits and beverages</p>
          </div>
          
          <div className={styles.categoriesGrid}>
            <Link to="/products?category=Whiskey" className={styles.categoryCard}>
              <div className={styles.categoryImage}>
                <img src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&q=80" alt="Whiskey" />
              </div>
              <div className={styles.categoryContent}>
                <h3>Whiskey</h3>
                <p>Premium whiskies from around the world</p>
                <span className={styles.categoryCount}>45+ varieties</span>
              </div>
            </Link>
            
            <Link to="/products?category=Vodka" className={styles.categoryCard}>
              <div className={styles.categoryImage}>
                <img src="https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80" alt="Vodka" />
              </div>
              <div className={styles.categoryContent}>
                <h3>Vodka</h3>
                <p>Crystal clear spirits for cocktails</p>
                <span className={styles.categoryCount}>32+ brands</span>
              </div>
            </Link>
            
            <Link to="/products?category=Tequila" className={styles.categoryCard}>
              <div className={styles.categoryImage}>
                <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80" alt="Tequila" />
              </div>
              <div className={styles.categoryContent}>
                <h3>Tequila</h3>
                <p>Authentic Mexican agave spirits</p>
                <span className={styles.categoryCount}>28+ selections</span>
              </div>
            </Link>
            
            <Link to="/products?category=Gin" className={styles.categoryCard}>
              <div className={styles.categoryImage}>
                <img src="https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80" alt="Gin" />
              </div>
              <div className={styles.categoryContent}>
                <h3>Gin</h3>
                <p>Botanical-infused premium gins</p>
                <span className={styles.categoryCount}>25+ varieties</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.newsletter}>
        <div className={styles.container}>
          <div className={styles.newsletterContent}>
            <div className={styles.newsletterText}>
              <h2>Stay Spirit-Forward</h2>
              <p>Subscribe to our newsletter and be the first to know about new arrivals, exclusive releases, and cocktail recipes.</p>
            </div>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email address"
                className={styles.newsletterInput}
              />
              <button className={styles.newsletterBtn}>Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className={styles.products}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Spirits</h2>
          </div>

          <SearchBar
            search={search} setSearch={setSearch}
            category={category} setCategory={setCategory}
            sortBy={sortBy} setSortBy={setSortBy}
            count={filtered.length}
          />

          {filtered.length === 0 ? (
            <div className={styles.noResults}>
              <p>No products found for "<strong>{search}</strong>"</p>
              <button onClick={() => { setSearch(""); setCategory("All"); }}>Clear filters</button>
            </div>
          ) : (
            <div className={styles.grid}>
              {filtered.slice(0, 6).map((product, i) => (
                <div key={product.id} style={{ animationDelay: `${i * 0.05}s` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}

          <div className={styles.viewAll}>
            <Link to="/products" className={styles.viewAllBtn}>
              View All Products →
            </Link>
          </div>
        </div>
      </section>

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

export default Home;