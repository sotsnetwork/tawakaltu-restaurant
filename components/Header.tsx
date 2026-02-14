
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  cartCount: number;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, isDarkMode, toggleDarkMode }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-all">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="text-primary transition-transform group-hover:scale-110">
              <svg className="size-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-deep-black dark:text-white text-xl font-display font-bold tracking-tight">Tawakaltu</h2>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/menu" className={`${isActive('/menu') ? 'text-primary' : 'text-deep-black dark:text-gray-300'} hover:text-primary transition-colors font-medium text-sm`}>Menu</Link>
            <Link to="/gift-a-meal" className={`${isActive('/gift-a-meal') ? 'text-primary' : 'text-deep-black dark:text-gray-300'} hover:text-primary transition-colors font-medium text-sm`}>Gifts</Link>
            <Link to="/feedback" className={`${isActive('/feedback') ? 'text-primary' : 'text-deep-black dark:text-gray-300'} hover:text-primary transition-colors font-medium text-sm`}>Feedback</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4 lg:gap-6">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors text-gray-500 dark:text-gray-400"
            aria-label="Toggle Dark Mode"
          >
            <span className="material-symbols-outlined text-xl">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <Link to="/cart" className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors text-gray-500 dark:text-gray-400">
            <span className="material-symbols-outlined text-2xl">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white dark:ring-black">
                {cartCount}
              </span>
            )}
          </Link>

          <Link to="/menu" className="hidden sm:block bg-primary hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-sm font-bold tracking-wide shadow-lg shadow-primary/20 transition-all active:scale-95">
            Order Online
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
