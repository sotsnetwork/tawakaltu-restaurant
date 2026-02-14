
import React from 'react';
import { Link } from 'react-router-dom';
import { openWhatsApp } from '../utils/whatsapp';

const Catering: React.FC = () => {
  const handleInquiry = () => {
    openWhatsApp('🍽️ *CATERING INQUIRY - Tawakaltu*\n\nHi! I\'m interested in catering services.\n\nEvent type:\nDate:\nGuest count:\nPreferred dishes:\n\nPlease let me know your packages and pricing.');
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-zinc-950 transition-colors py-16 px-6">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-xs font-bold tracking-widest uppercase">Events & Occasions</span>
            <div className="h-px w-12 bg-primary"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black text-deep-black dark:text-white mb-4">
            Catering Services
          </h1>
          <p className="text-muted-brown dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Let us bring authentic Nigerian flavors to your weddings, birthdays, corporate events, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            { icon: 'celebration', title: 'Weddings & Parties', desc: 'Full-service catering for weddings, birthdays, and celebrations. Custom menus to match your vision.' },
            { icon: 'business_center', title: 'Corporate Events', desc: 'Lunch buffets, cocktail hour bites, and full dinners for meetings and retreats.' },
            { icon: 'groups', title: 'Family Gatherings', desc: 'Traditional Nigerian spreads for family reunions, anniversaries, and special moments.' },
            { icon: 'restaurant', title: 'Custom Menus', desc: 'Work with our chefs to create a unique menu tailored to your event.' },
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-gray-100 dark:border-zinc-800">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </div>
              <h3 className="font-display font-bold text-xl dark:text-white mb-2">{item.title}</h3>
              <p className="text-muted-brown text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-10 border border-gray-100 dark:border-zinc-800 text-center">
          <h2 className="font-display font-bold text-2xl dark:text-white mb-4">Get a Quote</h2>
          <p className="text-muted-brown mb-8 max-w-lg mx-auto">
            Share your event details via WhatsApp and we'll send you a custom quote and menu options.
          </p>
          <button 
            onClick={handleInquiry}
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/20"
          >
            <span className="material-symbols-outlined">chat</span>
            Inquire via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catering;
