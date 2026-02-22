
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../constants';

interface HomeProps {
  addToCart: (item: MenuItem) => void;
}

const Home: React.FC<HomeProps> = ({ addToCart }) => {
  // Use the full menu list for the specials carousel
  const specials = MENU_ITEMS;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  // Responsive logic to adjust carousel visibility
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, specials.length - itemsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-play interval for dynamic content discovery
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [currentIndex, maxIndex]);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10"></div>
          <div className="w-full h-full bg-cover bg-center animate-slow-zoom" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlL8l-ISP-0J_pUOlqYWWpwyJgnEJ2y5qiThPsJvTgNM82cShV6GmLaFBp99-XZqkSiKGODvCSm4VpwNx4MozqWJwU2YchfZVPmp4pD6BFEc644bF-6mG26usSdvT-WvezCGBgBVmT1a1aUalf_SbK5RPSbYiyiRnVRg05Wc451aL5Wh2vxOtPAgdnS5_czQqApqcjyBLrGhY0VQfSjupyjfSySDOP0Vjrt1VTCB57jDptEbxwMtXSJpDgMSVGy-THV448evf9b50")' }}></div>
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center items-center gap-4">
            <div className="h-px w-12 bg-white/60"></div>
            <span className="text-white uppercase tracking-[0.3em] text-xs font-bold font-sans">Premium Dining</span>
            <div className="h-px w-12 bg-white/60"></div>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-white font-bold leading-[1.1] mb-8 drop-shadow-lg">
            Authentic Nigerian Flavors, <br/>
            <span className="italic font-normal">Crafted with Love</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-sans max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience the warmth of traditional Nigerian hospitality delivered straight to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/menu" className="hero-glow group relative flex min-w-[200px] items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-gradient-to-tr from-primary to-red-500 text-white text-base font-bold uppercase tracking-widest transition-transform hover:scale-105">
              Order Online
            </Link>
            <Link to="/menu" className="min-w-[200px] h-14 px-8 border border-white/40 hover:border-white text-white text-base font-bold uppercase tracking-widest backdrop-blur-sm rounded-xl transition-colors flex items-center justify-center">
              View Menu
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white opacity-60 animate-bounce">
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </section>

      {/* Chef's Specials Carousel */}
      <section className="py-24 bg-white dark:bg-zinc-950 transition-colors">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">Chef’s Specials</h2>
              <p className="text-muted-brown dark:text-gray-400 text-lg italic">Our kitchen's finest: signature flavors prepared with time-honored techniques.</p>
              <div className="h-1.5 w-24 bg-primary rounded-full mt-4"></div>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={prevSlide}
                className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-400 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all active:scale-90 shadow-sm"
                aria-label="Previous dishes"
              >
                <span className="material-symbols-outlined text-2xl">arrow_back</span>
              </button>
              <button 
                onClick={nextSlide}
                className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-gray-400 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all active:scale-90 shadow-sm"
                aria-label="Next dishes"
              >
                <span className="material-symbols-outlined text-2xl">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
              >
                {specials.map(item => (
                  <div 
                    key={item.id} 
                    className="px-4 shrink-0" 
                    style={{ width: `${100 / itemsToShow}%` }}
                  >
                    <div className="group bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-zinc-800 hover:shadow-[0_32px_80px_-20px_rgba(224,7,0,0.18)] transition-all duration-700 h-full flex flex-col transform hover:-translate-y-2">
                      <div className="relative h-80 overflow-hidden shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                        />
                        <div className="absolute top-6 right-6 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-lg border border-white/20">
                          <span className="text-primary font-bold text-xl">₦{item.price.toLocaleString()}</span>
                        </div>
                        {item.tag && (
                          <div className="absolute top-6 left-6 bg-primary text-white text-[11px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-xl shadow-primary/30">
                            {item.tag}
                          </div>
                        )}
                      </div>
                      <div className="p-10 flex flex-col flex-grow">
                        <h3 className="text-2xl font-display font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-1">{item.name}</h3>
                        <p className="text-muted-brown dark:text-gray-400 text-sm leading-relaxed mb-10 italic line-clamp-2 flex-grow">
                          {item.description}
                        </p>
                        <button 
                          onClick={() => addToCart(item)}
                          className="flex items-center justify-center gap-3 bg-deep-black dark:bg-zinc-800 hover:bg-primary text-white py-5 rounded-2xl text-xs font-bold tracking-widest uppercase transition-all shadow-md group/btn active:scale-95"
                        >
                          Add to Order 
                          <span className="material-symbols-outlined text-lg transition-transform group-hover/btn:translate-x-1">shopping_basket</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Carousel Pagination Indicators */}
          <div className="flex justify-center gap-3 mt-16">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-700 ${
                  currentIndex === idx ? 'w-16 bg-primary shadow-lg shadow-primary/20' : 'w-2.5 bg-gray-200 dark:bg-zinc-800 hover:bg-primary/40'
                }`}
                aria-label={`Show slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Signature Experience */}
      <section className="py-24 bg-gray-50 dark:bg-zinc-900 transition-colors">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4 dark:text-white">Our Signature Experience</h2>
            <p className="text-muted-brown dark:text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
              From our kitchen to your table, we maintain the highest standards of Nigerian culinary excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'local_dining', title: 'Premium Ingredients', desc: 'We source only the freshest local produce and authentic Nigerian spices.' },
              { icon: 'auto_stories', title: 'Traditional Recipes', desc: 'Chefs follow time-honored techniques passed down through generations.' },
              { icon: 'delivery_dining', title: 'Fast Delivery', desc: 'Warm meals delivered with care and speed, ensuring vibrant flavors.' }
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-800/50 hover:border-primary/20 hover:shadow-xl transition-all">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">{feature.icon}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-3 dark:text-white">{feature.title}</h3>
                <p className="text-muted-brown dark:text-gray-400 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
