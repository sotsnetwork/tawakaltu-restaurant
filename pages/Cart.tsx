
import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';

interface CartProps {
  cart: CartItem[];
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({ cart, updateQuantity, removeFromCart }) => {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 0 ? 1500 : 0;
  const tax = subtotal * 0.05;
  const total = subtotal + deliveryFee + tax;

  if (cart.length === 0) {
    return (
      <div className="max-w-[1200px] mx-auto px-6 py-24 text-center">
        <span className="material-symbols-outlined text-7xl text-gray-200 mb-6 block">shopping_bag</span>
        <h2 className="text-3xl font-display font-bold mb-4 dark:text-white">Your cart is empty</h2>
        <p className="text-muted-brown mb-8">It seems you haven't added anything to your cart yet.</p>
        <Link to="/menu" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/20 hover:bg-red-700 transition-all">
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight mb-2 dark:text-white">Your Selection</h1>
        <p className="text-muted-brown text-lg">Curating your Nigerian culinary experience.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="flex-1 w-full space-y-8">
          <div className="border-t border-gray-100 dark:border-zinc-800">
            {cart.map(item => (
              <div key={item.id} className="flex items-center gap-6 py-8 border-b border-gray-50 dark:border-zinc-900">
                <div 
                  className="size-24 rounded-lg bg-cover bg-center shrink-0 border border-gray-50 dark:border-zinc-800"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold font-display dark:text-white truncate">{item.name}</h3>
                  <p className="text-sm text-muted-brown mt-1 line-clamp-1">{item.description}</p>
                </div>
                <div className="flex items-center bg-gray-50 dark:bg-zinc-900 rounded-full px-3 py-1 gap-4">
                  <button 
                    onClick={() => updateQuantity(item.id, -1)}
                    className="hover:text-primary transition-colors flex items-center justify-center p-1"
                  >
                    <span className="material-symbols-outlined text-lg">remove</span>
                  </button>
                  <span className="font-bold text-sm min-w-4 text-center dark:text-white">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, 1)}
                    className="hover:text-primary transition-colors flex items-center justify-center p-1"
                  >
                    <span className="material-symbols-outlined text-lg">add</span>
                  </button>
                </div>
                <div className="text-right min-w-[100px]">
                  <p className="text-lg font-bold font-display dark:text-white">₦{(item.price * item.quantity).toLocaleString()}</p>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs text-muted-brown hover:text-primary underline mt-1 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="py-4">
            <label className="block text-sm font-bold uppercase tracking-widest text-muted-brown mb-4">Special Instructions</label>
            <textarea 
              className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-4 text-sm focus:ring-primary focus:border-primary placeholder:italic transition-all dark:text-white" 
              placeholder="Any dietary preferences or delivery notes?" 
              rows={3}
            ></textarea>
          </div>

          <Link to="/menu" className="inline-flex items-center gap-2 text-sm font-bold text-deep-black dark:text-zinc-300 hover:text-primary transition-colors group">
            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Continue Browsing Menu
          </Link>
        </div>

        <aside className="w-full lg:w-[380px] sticky top-32">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-gray-100 dark:border-zinc-800 shadow-[0_20px_50px_rgba(225,6,0,0.04)]">
            <h2 className="text-2xl font-black font-display mb-8 dark:text-white">Order Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-muted-brown dark:text-gray-400">Subtotal</span>
                <span className="font-medium dark:text-white">₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                  <span className="text-muted-brown dark:text-gray-400">Delivery Fee</span>
                  <span className="material-symbols-outlined text-xs text-muted-brown cursor-help">info</span>
                </div>
                <span className="font-medium dark:text-white">₦{deliveryFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-brown dark:text-gray-400">VAT (5%)</span>
                <span className="font-medium dark:text-white">₦{tax.toLocaleString()}</span>
              </div>
              <div className="h-px bg-gray-100 dark:bg-zinc-800 my-2"></div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-lg font-bold dark:text-white">Total</span>
                <span className="text-2xl font-black font-display text-primary">₦{total.toLocaleString()}</span>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-zinc-950 rounded-xl p-4 mb-8 flex items-start gap-3 border border-gray-100 dark:border-zinc-800">
              <span className="material-symbols-outlined text-primary">schedule</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-brown">Estimated Arrival</p>
                <p className="text-sm font-medium dark:text-zinc-300">35 - 45 minutes</p>
              </div>
            </div>

            <Link 
              to="/checkout"
              className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <p className="text-center text-[10px] uppercase tracking-widest text-muted-brown mt-6 font-bold">Secure checkout powered by Tawakaltu</p>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
