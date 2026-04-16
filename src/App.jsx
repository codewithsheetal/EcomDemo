import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import AgeVerification from "./components/AgeVerification";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [ageVerified, setAgeVerified] = useState(false);

  const handleAgeVerification = () => {
    setAgeVerified(true);
  };

  if (!ageVerified) {
    return <AgeVerification onVerify={handleAgeVerification} />;
  }

  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <Navbar onCartOpen={() => setCartOpen(true)} />
          <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App
