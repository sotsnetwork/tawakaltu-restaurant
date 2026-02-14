
import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../types';
import { MENU_ITEMS, BASMATI_ITEMS } from '../constants';

const LUNCH_SPECIAL_IDS = ['1', '2', '7', '4']; // Curated lunch picks
const LUNCH_DISCOUNT = 0.85; // 15% off at lunch

interface LunchSpecialsProps {
  addToCart: (item: MenuItem) => void;
}

const LunchSpecials: React.FC<LunchSpecialsProps> = ({ addToCart }) => {
  const allItems = [...MENU_ITEMS, ...BASMATI_ITEMS];
  const specials = allItems.filter(item => LUNCH_SPECIAL_IDS.includes(item.id));
  const lunchPrice = (price: number) => Math.round(price * LUNCH_DISCOUNT);

  return (
    <div className="min-h-screen bg-background-light dark:bg-zinc-950 transition-colors py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-xs font-bold tracking-widest uppercase">11AM – 3PM Daily</span>
            <div className="h-px w-12 bg-primary"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black text-deep-black dark:text-white mb-4">
            Lunch Specials
          </h1>
          <p className="text-muted-brown dark:text-gray-400 text-lg max-w-2xl mx-auto italic">
            Quick, hearty Nigerian favorites at 15% off — perfect for your midday break.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specials.map(item => (
            <div key={item.id} className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-800 hover:shadow-xl transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" 
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Lunch Only
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-deep-black dark:text-white mb-2">{item.name}</h3>
                <p className="text-muted-brown text-sm mb-4 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 dark:text-zinc-500 line-through text-sm">₦{item.price.toLocaleString()}</span>
                  <span className="text-primary font-bold text-xl">₦{lunchPrice(item.price).toLocaleString()}</span>
                </div>
                <button 
                  onClick={() => addToCart({ ...item, id: `${item.id}-lunch`, price: lunchPrice(item.price) })}
                  className="mt-4 w-full flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white py-2.5 rounded-lg text-sm font-bold transition-all"
                >
                  Add to Order
                  <span className="material-symbols-outlined text-lg">add</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/menu" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
            View Full Menu
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LunchSpecials;
