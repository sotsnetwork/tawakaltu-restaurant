
import React from 'react';
import { Link } from 'react-router-dom';

const Success: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12 bg-background-light dark:bg-zinc-950 transition-colors">
      <div className="max-w-[640px] w-full text-center">
        <div className="relative mx-auto mb-8">
          <div className="flex items-center justify-center size-24 rounded-full border-[3px] border-gold-accent bg-white dark:bg-zinc-800 shadow-xl mx-auto">
            <span className="material-symbols-outlined text-primary text-5xl font-bold animate-pulse">check</span>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-32 border-2 border-gold-accent/20 rounded-full animate-ping"></div>
        </div>

        <h1 className="text-deep-black dark:text-white tracking-tight text-4xl md:text-5xl font-bold leading-tight mb-4 font-display">
          Thank You!
        </h1>
        <p className="text-muted-brown dark:text-zinc-400 text-lg mb-10 max-w-md mx-auto">
          Your order has been sent to our WhatsApp. We'll confirm and prepare your delicious Nigerian feast — stay tuned!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <Link to="/menu" className="flex min-w-[200px] w-full sm:w-auto cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-white text-base font-bold transition-all hover:bg-primary/90 shadow-lg shadow-primary/20">
            <span>Order More</span>
          </Link>
          <Link to="/" className="flex min-w-[200px] w-full sm:w-auto cursor-pointer items-center justify-center rounded-xl h-14 px-8 border-2 border-deep-black dark:border-white text-deep-black dark:text-white text-base font-bold transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
