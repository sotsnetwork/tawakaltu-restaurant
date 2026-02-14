
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem, CartItem } from '../types';
import { MENU_ITEMS, BASMATI_ITEMS } from '../constants';

interface MenuProps {
  addToCart: (item: MenuItem) => void;
  cart: CartItem[];
}

const Menu: React.FC<MenuProps> = ({ addToCart, cart }) => {
  const [activeCategory, setActiveCategory] = useState('Jollof & Fried Rice');
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = [
    { name: 'Jollof & Fried Rice', icon: 'restaurant_menu' },
    { name: 'Basmati Selection', icon: 'outdoor_grill' },
    { name: 'Native Rice & Porridge', icon: 'soup_kitchen' },
    { name: 'Soups & Swallows', icon: 'bakery_dining' },
    { name: 'Signature Mocktails', icon: 'liquor' }
  ];

  const allAvailableItems = useMemo(() => [...MENU_ITEMS, ...BASMATI_ITEMS], []);

  const filteredItems = useMemo(() => {
    return allAvailableItems.filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // If there's a search term, we show all matches across categories
      if (searchTerm) return matchesSearch;
      
      // Otherwise, filter by category
      return item.category === activeCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory, allAvailableItems]);

  const cartTotal = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);
  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 py-10 relative">
      {/* Sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-32 h-fit">
        <div className="space-y-8">
          <div>
            <h3 className="text-muted-brown text-xs uppercase tracking-[0.2em] font-bold mb-6">Culinary Categories</h3>
            <ul className="space-y-4">
              {categories.map(cat => (
                <li key={cat.name}>
                  <button 
                    onClick={() => {
                      setActiveCategory(cat.name);
                      setSearchTerm(''); // Clear search when picking category
                    }}
                    className={`group flex items-center gap-3 w-full text-left font-display text-lg transition-all ${
                      activeCategory === cat.name && !searchTerm
                        ? 'text-primary font-bold' 
                        : 'text-deep-black dark:text-gray-300 hover:text-primary'
                    }`}
                  >
                    <span className={`material-symbols-outlined ${(activeCategory === cat.name && !searchTerm) ? 'fill-1' : 'text-gray-400 group-hover:text-primary transition-colors'}`}>
                      {cat.icon}
                    </span>
                    {cat.name}
                    {(activeCategory === cat.name && !searchTerm) && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary"></div>}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-primary/5 border border-primary/10 transition-all hover:bg-primary/10">
            <p className="text-deep-black dark:text-white font-display font-bold text-sm mb-2">Cart Summary</p>
            <p className="text-muted-brown text-xs mb-4">{cartCount} items selected</p>
            <Link 
              to="/cart"
              className="w-full bg-primary hover:bg-red-700 text-white py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined text-lg">shopping_bag</span>
              View Cart (₦{cartTotal.toLocaleString()})
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Grid */}
      <main className="flex-1">
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-primary mb-2">
                <div className="h-px w-8 bg-primary"></div>
                <span className="text-xs font-bold tracking-widest uppercase">The Signature Series</span>
              </div>
              <h1 className="text-5xl font-display font-black text-deep-black dark:text-white leading-tight tracking-tight mb-2 transition-all">
                {searchTerm ? 'Search Results' : activeCategory}
              </h1>
              <p className="text-muted-brown dark:text-gray-400 text-lg leading-relaxed italic">
                {searchTerm 
                  ? `Showing results for "${searchTerm}"`
                  : "Experience the legendary smoky richness of our party-style jollof and the vibrant, wok-tossed elegance of our selections."
                }
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-80 group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                search
              </span>
              <input 
                type="text"
                placeholder="Search menu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-10 py-3.5 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all dark:text-white placeholder:text-gray-400 text-sm"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-gray-100 dark:border-zinc-800 pb-4 mb-8">
          <h2 className="text-xl font-display font-bold text-deep-black dark:text-white italic">
            {searchTerm ? `Found ${filteredItems.length} items` : 'Featured Specialties'}
          </h2>
          <div className="flex gap-2">
            <button className="size-8 rounded-full border border-gray-200 dark:border-zinc-700 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all">
              <span className="material-symbols-outlined text-sm">grid_view</span>
            </button>
            <button className="size-8 rounded-full border border-gray-200 dark:border-zinc-700 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all">
              <span className="material-symbols-outlined text-sm">list</span>
            </button>
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <div key={item.id} className="group bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-gray-50 dark:border-zinc-800 hover:shadow-2xl transition-all duration-500">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" 
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  {item.tag && (
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-primary">
                      {item.tag}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-xl font-display font-bold text-deep-black dark:text-white group-hover:text-primary transition-colors line-clamp-1">{item.name}</h3>
                    <span className="text-primary font-bold text-lg flex-shrink-0">₦{item.price.toLocaleString()}</span>
                  </div>
                  <p className="text-muted-brown dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                    {item.description}
                  </p>
                  <button 
                    onClick={() => addToCart(item)}
                    className="w-full flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white py-2.5 rounded-lg text-sm font-bold transition-all"
                  >
                    <span className="material-symbols-outlined text-lg">add</span>
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <span className="material-symbols-outlined text-6xl text-gray-200 mb-4 block">search_off</span>
            <h3 className="text-2xl font-display font-bold dark:text-white mb-2">No items found</h3>
            <p className="text-muted-brown max-w-xs mx-auto text-sm italic">
              We couldn't find any dishes matching "{searchTerm}". Try a different keyword or browse our categories.
            </p>
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-6 text-primary font-bold uppercase tracking-widest text-xs hover:underline"
            >
              Clear Search
            </button>
          </div>
        )}
      </main>

      {/* Floating Mobile Cart */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <Link to="/cart" className="size-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95">
          <span className="material-symbols-outlined text-2xl">shopping_cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 size-6 bg-deep-black text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Menu;
