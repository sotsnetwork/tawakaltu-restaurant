
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 py-16 mt-auto border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 text-primary mb-6">
              <svg className="size-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
              <h2 className="text-deep-black dark:text-white text-lg font-display font-bold">Tawakaltu</h2>
            </div>
            <p className="text-muted-brown text-sm leading-relaxed italic">"Bringing the authentic warmth of Nigerian home-cooking to your table, with a touch of elegance."</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-6 dark:text-gray-400">The Kitchen</h4>
              <ul className="space-y-3 text-sm text-muted-brown">
                <li><Link to="/menu" className="hover:text-primary">Our Menu</Link></li>
                <li><Link to="/lunch-specials" className="hover:text-primary">Lunch Specials</Link></li>
                <li><Link to="/catering" className="hover:text-primary">Catering</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-6 dark:text-gray-400">Restaurant</h4>
              <ul className="space-y-3 text-sm text-muted-brown">
                <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-primary">Careers</Link></li>
                <li><Link to="/locations" className="hover:text-primary">Locations</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-6 dark:text-gray-400">Help</h4>
              <ul className="space-y-3 text-sm text-muted-brown">
                <li><Link to="/feedback" className="hover:text-primary">Feedback</Link></li>
                <li><Link to="/claim-gift" className="hover:text-primary">Claim Gift</Link></li>
                <li><Link to="/support" className="hover:text-primary">Support</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-brown">© 2024 Tawakaltu Food Restaurant. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="text-muted-brown hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">social_leaderboard</span></a>
            <a className="text-muted-brown hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">photo_camera</span></a>
            <a className="text-muted-brown hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
