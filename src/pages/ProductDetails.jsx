import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import styles from './ProductDetails.module.css';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch, cart } = useCart();
  const [added, setAdded] = useState(false);

  const product = products.find(p => p.id === parseInt(id));
  if (!product) return <div>Product not found</div>;

  // Find similar products (same category, excluding current product)
  const similarProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4); // Limit to 4 similar products

  const inCart = cart.find(item => item.id === product.id);
  const discount = product.originalPrice > product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleAddToCart = () => {
    dispatch({ type: 'ADD', payload: product });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleIncrease = () => {
    dispatch({ type: 'INCREASE', payload: product.id });
  };

  const handleDecrease = () => {
    dispatch({ type: 'DECREASE', payload: product.id });
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          ← Back to Products
        </button>

        <div className={styles.product}>
          <div className={styles.imageSection}>
            <div className={styles.imageWrap}>
              <img src={product.image} alt={product.name} className={styles.image} />
              {product.badge && <span className={styles.badge}>{product.badge}</span>}
              {discount && <span className={styles.discount}>-{discount}%</span>}
            </div>
          </div>

          <div className={styles.details}>
            <p className={styles.category}>{product.category}</p>
            <h1 className={styles.name}>{product.name}</h1>

            <div className={styles.rating}>
              {[1, 2, 3, 4, 5].map(star => (
                <span key={star} className={star <= Math.round(product.rating) ? styles.starFilled : styles.starEmpty}>
                  ★
                </span>
              ))}
              <span className={styles.ratingNum}>{product.rating} ({Math.floor(Math.random() * 100) + 50} reviews)</span>
            </div>

            <p className={styles.description}>{product.description}</p>

            <div className={styles.priceSection}>
              <span className={styles.price}>₹{product.price.toLocaleString()}</span>
              {product.originalPrice > product.price && (
                <span className={styles.originalPrice}>₹{product.originalPrice.toLocaleString()}</span>
              )}
            </div>

            <div className={styles.actions}>
              {inCart ? (
                <div className={styles.quantityControls}>
                  <button className={styles.qtyBtn} onClick={handleDecrease}>-</button>
                  <span className={styles.qty}>{inCart.qty}</span>
                  <button className={styles.qtyBtn} onClick={handleIncrease}>+</button>
                </div>
              ) : (
                <button
                  className={`${styles.addBtn} ${added ? styles.addedBtn : ''}`}
                  onClick={handleAddToCart}
                >
                  {added ? '✓ Added to Cart!' : 'Add to Cart'}
                </button>
              )}
              <button className={styles.buyNow} onClick={() => navigate('/checkout')}>
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Similar Products Section */}
        {similarProducts.length > 0 && (
          <section className={styles.similarSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Similar Products</h2>
              <p className={styles.sectionSubtitle}>You might also like these {product.category.toLowerCase()} spirits</p>
            </div>
            <div className={styles.similarGrid}>
              {similarProducts.map((similarProduct, i) => (
                <div key={similarProduct.id} style={{ animationDelay: `${i * 0.1}s` }}>
                  <ProductCard product={similarProduct} />
                </div>
              ))}
            </div>
          </section>
        )}
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

export default ProductDetails;