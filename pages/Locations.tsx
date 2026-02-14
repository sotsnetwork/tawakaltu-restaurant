
import React from 'react';
import { Link } from 'react-router-dom';
import { openWhatsApp } from '../utils/whatsapp';

const Locations: React.FC = () => {
  const locations = [
    { name: 'Main Kitchen', address: 'Lagos, Nigeria', desc: 'Central kitchen for delivery orders. Place your order online and we deliver to you.', icon: 'storefront' },
    { name: 'Delivery Zone', address: 'Wide coverage in Lagos', desc: 'We deliver across Lagos. Check availability at checkout.', icon: 'delivery_dining' },
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-zinc-950 transition-colors py-16 px-6">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-xs font-bold tracking-widest uppercase">Find Us</span>
            <div className="h-px w-12 bg-primary"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black text-deep-black dark:text-white mb-4">
            Locations
          </h1>
          <p className="text-muted-brown dark:text-gray-400 text-lg max-w-2xl mx-auto">
            We cook fresh from our kitchen and deliver to your door across Lagos.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {locations.map((loc, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-gray-100 dark:border-zinc-800">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-2xl">{loc.icon}</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl dark:text-white mb-2">{loc.name}</h3>
                  <p className="text-primary font-medium mb-1">{loc.address}</p>
                  <p className="text-muted-brown text-sm">{loc.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-10 border border-gray-100 dark:border-zinc-800 text-center">
          <h2 className="font-display font-bold text-xl dark:text-white mb-2">Need Help?</h2>
          <p className="text-muted-brown text-sm mb-6">Questions about delivery areas or pickup? Chat with us on WhatsApp.</p>
          <button 
            onClick={() => openWhatsApp('📍 *LOCATION INQUIRY - Tawakaltu*\n\nHi! I have a question about your locations/delivery.\n\nMy area:\nQuestion:')}
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/20"
          >
            <span className="material-symbols-outlined">chat</span>
            Contact via WhatsApp
          </button>
        </div>

        <div className="mt-12 text-center">
          <Link to="/menu" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
            Order Now
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Locations;
