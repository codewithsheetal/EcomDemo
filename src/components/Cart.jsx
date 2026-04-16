import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "./Cart.module.css";

function Cart({ isOpen, onClose }) {
  const { cart, dispatch, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Your Cart
            {totalItems > 0 && <span className={styles.itemCount}>{totalItems}</span>}
          </h2>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        <div className={styles.body}>
          {cart.length === 0 ? (
            <div className={styles.empty}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--color-border)" }}>
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              <p>Your cart is empty</p>
              <button className={styles.shopBtn} onClick={onClose}>Continue Shopping</button>
            </div>
          ) : (
            <div className={styles.items}>
              {cart.map((item) => (
                <div key={item.id} className={styles.item}>
                  <img src={item.image} alt={item.name} className={styles.itemImg} />
                  <div className={styles.itemInfo}>
                    <p className={styles.itemName}>{item.name}</p>
                    <p className={styles.itemPrice}>₹{item.price.toLocaleString()}</p>
                    <div className={styles.qtyRow}>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => dispatch({ type: "DECREASE", payload: item.id })}
                      >−</button>
                      <span className={styles.qty}>{item.qty}</span>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => dispatch({ type: "INCREASE", payload: item.id })}
                      >+</button>
                      <button
                        className={styles.removeBtn}
                        onClick={() => dispatch({ type: "REMOVE", payload: item.id })}
                      >Remove</button>
                    </div>
                  </div>
                  <p className={styles.itemTotal}>₹{(item.price * item.qty).toLocaleString()}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>₹{totalPrice.toLocaleString()}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Delivery</span>
              <span className={styles.free}>{totalPrice > 999 ? "Free" : "₹99"}</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Total</span>
              <span>₹{(totalPrice > 999 ? totalPrice : totalPrice + 99).toLocaleString()}</span>
            </div>
            {totalPrice < 999 && (
              <p className={styles.freeMsg}>Add ₹{999 - totalPrice} more for free delivery!</p>
            )}
            <button className={styles.checkoutBtn} onClick={() => { onClose(); navigate('/checkout'); }}>
              Proceed to Checkout
            </button>
            <button
              className={styles.clearBtn}
              onClick={() => dispatch({ type: "CLEAR" })}
            >Clear Cart</button>
          </div>
        )}
      </aside>
    </>
  );
}

export default Cart;