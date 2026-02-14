
import React, { useState, useEffect, useCallback } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { CartItem, MenuItem } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import GiftAMeal from './pages/GiftAMeal';
import ClaimGift from './pages/ClaimGift';
import Feedback from './pages/Feedback';
import Success from './pages/Success';
import LunchSpecials from './pages/LunchSpecials';
import Catering from './pages/Catering';
import About from './pages/About';
import Careers from './pages/Careers';
import Locations from './pages/Locations';
import Support from './pages/Support';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.id === id) {
        const newQty = Math.max(1, i.quantity + delta);
        return { ...i, quantity: newQty };
      }
      return i;
    }));
  };

  const clearCart = () => setCart([]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background-light dark:bg-zinc-950 transition-colors duration-300">
        <Header cartCount={cart.reduce((sum, i) => sum + i.quantity, 0)} isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/menu" element={<Menu addToCart={addToCart} cart={cart} />} />
            <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
            <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
            <Route path="/gift-a-meal" element={<GiftAMeal />} />
            <Route path="/claim-gift" element={<ClaimGift />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/success" element={<Success />} />
            <Route path="/lunch-specials" element={<LunchSpecials addToCart={addToCart} />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
