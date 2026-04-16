import styles from './UnderConstruction.module.css';

function UnderConstruction() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.icon}>
            🚧
          </div>
          <h1 className={styles.title}>Page Under Construction</h1>
          <p className={styles.message}>
            We're working hard to bring you this feature. Please check back soon!
          </p>
          <a href="/" className={styles.homeBtn}>
            ← Back to Home
          </a>
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
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Customer Service</h4>
            <ul>
              <li><a href="/shipping">Shipping Info</a></li>
              <li><a href="/returns">Returns</a></li>
              <li><a href="/age-verification">Age Verification</a></li>
              <li><a href="/faq">FAQ</a></li>
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

export default UnderConstruction;