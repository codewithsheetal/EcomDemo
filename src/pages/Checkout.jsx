import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Checkout.module.css';

function Checkout() {
  const { cart, dispatch, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order placement
    setOrderPlaced(true);
    dispatch({ type: 'CLEAR' });
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <main className={styles.main}>
        <div className={styles.empty}>
          <h2>Your cart is empty</h2>
          <p>Add some products to your cart before checking out.</p>
          <button onClick={() => navigate('/')} className={styles.shopBtn}>
            Continue Shopping
          </button>
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

  if (orderPlaced) {
    return (
      <main className={styles.main}>
        <div className={styles.success}>
          <div className={styles.successIcon}>✓</div>
          <h2>Order Placed Successfully!</h2>
          <p>Thank you for your purchase. Your order will be delivered soon.</p>
          <p>Redirecting to home page...</p>
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

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Checkout</h1>

        <div className={styles.checkoutGrid}>
          <div className={styles.orderSummary}>
            <h2>Order Summary</h2>
            <div className={styles.items}>
              {cart.map(item => (
                <div key={item.id} className={styles.item}>
                  <img src={item.image} alt={item.name} className={styles.itemImg} />
                  <div className={styles.itemDetails}>
                    <h3>{item.name}</h3>
                    <p>₹{item.price.toLocaleString()} × {item.qty}</p>
                  </div>
                  <span className={styles.itemTotal}>₹{(item.price * item.qty).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className={styles.totals}>
              <div className={styles.totalRow}>
                <span>Subtotal ({totalItems} items)</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>
              <div className={styles.totalRow}>
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className={styles.totalRow} style={{ fontWeight: '700', fontSize: '18px' }}>
                <span>Total</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <form className={styles.checkoutForm} onSubmit={handleSubmit}>
            <h2>Shipping Information</h2>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="zipCode">ZIP Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <h2>Payment Information</h2>
            <div className={styles.formGroup}>
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="123"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className={styles.placeOrderBtn}>
              Place Order - ₹{totalPrice.toLocaleString()}
            </button>
          </form>
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

export default Checkout;