import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import styles from "./ProductCard.module.css";

function StarRating({ rating }) {
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= Math.round(rating) ? styles.starFilled : styles.starEmpty}
        >
          ★
        </span>
      ))}
      <span className={styles.ratingNum}>{rating}</span>
    </div>
  );
}

function ProductCard({ product }) {
  const { dispatch, cart } = useCart();
  const [added, setAdded] = useState(false);

  const inCart = cart.find((item) => item.id === product.id);
  const discount = product.originalPrice > product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  function handleAdd() {
    dispatch({ type: "ADD", payload: product });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  function handleIncrease() {
    dispatch({ type: "INCREASE", payload: product.id });
  }

  function handleDecrease() {
    dispatch({ type: "DECREASE", payload: product.id });
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} className={styles.image} />
        </Link>
        {product.badge && (
          <span className={styles.badge}>{product.badge}</span>
        )}
        {discount && (
          <span className={styles.discount}>-{discount}%</span>
        )}
      </div>

      <div className={styles.body}>
        <p className={styles.category}>{product.category}</p>
        <Link to={`/product/${product.id}`} className={styles.nameLink}>
          <h3 className={styles.name}>{product.name}</h3>
        </Link>
        <StarRating rating={product.rating} />
        <p className={styles.desc}>{product.description}</p>

        <div className={styles.priceRow}>
          <span className={styles.price}>₹{product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <span className={styles.originalPrice}>₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>

        {inCart ? (
          <div className={styles.quantityControls}>
            <button className={styles.qtyBtn} onClick={handleDecrease}>-</button>
            <span className={styles.qty}>{inCart.qty}</span>
            <button className={styles.qtyBtn} onClick={handleIncrease}>+</button>
          </div>
        ) : (
          <button
            className={`${styles.addBtn} ${added ? styles.addedBtn : ""}`}
            onClick={handleAdd}
          >
            {added ? "✓ Added!" : "Add to Cart"}
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;