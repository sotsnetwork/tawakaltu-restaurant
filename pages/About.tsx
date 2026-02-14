
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-zinc-950 transition-colors py-16 px-6">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-xs font-bold tracking-widest uppercase">Our Story</span>
            <div className="h-px w-12 bg-primary"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black text-deep-black dark:text-white mb-4">
            About Tawakaltu
          </h1>
          <p className="text-muted-brown dark:text-gray-400 text-lg max-w-2xl mx-auto italic">
            Bringing the authentic warmth of Nigerian home-cooking to your table.
          </p>
        </div>

        <div className="mb-16 space-y-6">
          <p className="text-deep-black dark:text-gray-300 leading-relaxed mb-6">
            Tawakaltu was born from a simple vision: to share the rich, vibrant flavors of Nigerian cuisine with everyone. 
            Our name reflects our commitment to tradition — we honor time-honored recipes passed down through generations, 
            prepared with the same care and love you'd find in a Nigerian home kitchen.
          </p>
          <p className="text-deep-black dark:text-gray-300 leading-relaxed mb-6">
            From our signature smoky party jollof to our tender grilled chicken and hearty soups, every dish tells a story. 
            We source fresh, quality ingredients and take pride in delivering meals that feel like a warm embrace — 
            whether you're dining in, ordering delivery, or celebrating a special occasion with our catering.
          </p>
          <p className="text-deep-black dark:text-gray-300 leading-relaxed">
            Thank you for being part of our journey. We can't wait to share a taste of Nigeria with you.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 text-center">
          {[
            { value: '2019', label: 'Established' },
            { value: '50+', label: 'Dishes & Combos' },
            { value: '1000s', label: 'Happy Customers' },
          ].map((stat, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800">
              <p className="text-3xl font-display font-black text-primary">{stat.value}</p>
              <p className="text-muted-brown text-sm font-bold uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/menu" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
            Explore Our Menu
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
