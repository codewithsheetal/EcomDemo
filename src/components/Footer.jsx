import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.mainContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🍷</span>
              <span className={styles.logoText}>LiquorHub</span>
            </div>
            <p className={styles.description}>
              Your trusted destination for premium spirits. Discover exceptional quality,
              expert curation, and responsible service.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C8.396 0 7.996.014 6.79.067 5.584.12 4.775.302 4.082.566c-.727.28-1.342.653-1.956 1.267C1.512 2.447 1.14 3.062.86 3.788c-.264.693-.446 1.502-.5 2.708C.3 7.702.286 8.102.286 11.723s.014 3.721.067 4.927c.054 1.206.236 2.015.5 2.708.28.726.653 1.341 1.267 1.956.614.614 1.229.987 1.956 1.267.693.264 1.502.446 2.708.5C7.996 23.986 8.396 24 12.017 24s3.721-.014 4.927-.067c1.206-.054 2.015-.236 2.708-.5.726-.28 1.341-.653 1.956-1.267.614-.614.987-1.229 1.267-1.956.264-.693.446-1.502.5-2.708.067-1.206.067-1.606.067-4.927s-.014-3.721-.067-4.927c-.054-1.206-.236-2.015-.5-2.708-.28-.726-.653-1.341-1.267-1.956C20.553 1.512 19.938 1.14 19.212.86c-.693-.264-1.502-.446-2.708-.5C15.738.3 15.338.286 12.017.286zM12.017 5.838c-3.403 0-6.163 2.76-6.163 6.163s2.76 6.163 6.163 6.163 6.163-2.76 6.163-6.163-2.76-6.163-6.163-6.163zm0 10.153c-2.202 0-3.99-1.788-3.99-3.99s1.788-3.99 3.99-3.99 3.99 1.788 3.99 3.99-1.788 3.99-3.99 3.99zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
                </svg>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className={styles.linksSection}>
            <div className={styles.linkGroup}>
              <h3>Shop</h3>
              <ul>
                <li><Link to="/products">All Products</Link></li>
                <li><Link to="/products?category=Whiskey">Whiskey</Link></li>
                <li><Link to="/products?category=Vodka">Vodka</Link></li>
                <li><Link to="/products?category=Tequila">Tequila</Link></li>
                <li><Link to="/products?category=Gin">Gin</Link></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3>Company</h3>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3>Support</h3>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Shipping Info</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Size Guide</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3>Legal</h3>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Age Verification</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className={styles.newsletter}>
          <div className={styles.newsletterContent}>
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for exclusive deals and new arrivals</p>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.newsletterInput}
              />
              <button className={styles.newsletterBtn}>Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className={styles.bottomFooter}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {currentYear} LiquorHub. All rights reserved.
            </p>
            <div className={styles.bottomLinks}>
              <span>Age Verification Required (21+)</span>
              <span>•</span>
              <span>Drink Responsibly</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;