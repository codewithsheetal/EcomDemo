import { Link } from 'react-router-dom';
import styles from './About.module.css';

function About() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>About LiquorHub</h1>
            <p className={styles.heroSubtitle}>
              Your trusted destination for premium spirits, committed to quality, authenticity, and responsible drinking.
            </p>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80"
              alt="Premium Liquor Collection"
            />
          </div>
        </section>

        {/* Mission Section */}
        <section className={styles.mission}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p className={styles.sectionText}>
              At LiquorHub, we believe that every sip tells a story. Our mission is to provide discerning customers
              with access to the world's finest spirits while promoting responsible consumption and educating our
              community about the rich heritage of distillation and mixology.
            </p>
            <div className={styles.missionStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>200+</span>
                <span className={styles.statLabel}>Premium Brands</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>10K+</span>
                <span className={styles.statLabel}>Happy Customers</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5★</span>
                <span className={styles.statLabel}>Average Rating</span>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.values}>
          <h2 className={styles.sectionTitle}>Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.value}>
              <div className={styles.valueIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                  <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                  <path d="M12 3c-2 0-5 1-5 3 0 1 1 2 3 2s3-1 3-2c0-2-3-3-3-3"/>
                  <path d="M12 21c2 0 5-1 5-3 0-1-1-2-3-2s-3 1-3 2c0 2 3 3 3 3"/>
                </svg>
              </div>
              <h3>Quality Assurance</h3>
              <p>Every bottle in our collection undergoes rigorous quality checks to ensure authenticity and excellence.</p>
            </div>

            <div className={styles.value}>
              <div className={styles.valueIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Expert Curation</h3>
              <p>Our team of spirits experts carefully selects each product, ensuring only the finest beverages reach our shelves.</p>
            </div>

            
            <div className={styles.value}>
              <div className={styles.valueIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"/>
                  <path d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"/>
                </svg>
              </div>
              <h3>Fast Delivery</h3>
              <p>Secure, discreet, and fast delivery to your doorstep with temperature-controlled shipping for premium spirits.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
       
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2>Ready to Explore Our Collection?</h2>
            <p>Discover your next favorite spirit with our carefully curated selection.</p>
            <a href="/products" className={styles.ctaButton}>Shop Now →</a>
          </div>
        </section>
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
              <li><Link to="/shipping">Shipping Info</Link></li>
              <li><Link to="/returns">Returns</Link></li>
              <li><Link to="/age-verification">Age Verification</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
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

export default About;