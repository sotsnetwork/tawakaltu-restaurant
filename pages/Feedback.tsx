
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { openWhatsApp } from '../utils/whatsapp';

const Feedback: React.FC = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');

  return (
    <div className="bg-background-light dark:bg-zinc-950 transition-colors duration-300 py-12 px-6">
      <div className="max-w-[720px] mx-auto">
        <h1 className="text-deep-black dark:text-white tracking-light text-[36px] md:text-[42px] font-black leading-tight text-center pb-2 pt-6 font-display">
          Rate your Experience
        </h1>
        <p className="text-center text-muted-brown pb-8 text-lg">We hope you enjoyed your taste of Nigeria</p>

        <div className="flex w-full grow p-4">
          <div className="w-full overflow-hidden bg-white dark:bg-zinc-900 shadow-2xl aspect-[16/10] rounded-xl flex border-4 border-white dark:border-zinc-800 transition-all">
            <div 
              className="w-full bg-center bg-no-repeat bg-cover aspect-auto" 
              style={{ backgroundImage: 'url("https://picsum.photos/seed/tawakaltu-feedback/1200/800")' }}
            ></div>
          </div>
        </div>

        <h2 className="text-deep-black dark:text-white text-2xl font-bold text-center pb-6 pt-8 font-display">
          How was your meal from Tawakaltu?
        </h2>

        <div className="flex justify-center gap-3 pb-10">
          {[1, 2, 3, 4, 5].map((star) => (
            <button 
              key={star}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(star)}
              className="transition-transform hover:scale-110 active:scale-90"
            >
              <span 
                className={`material-symbols-outlined text-5xl ${
                  (hover || rating) >= star ? 'text-primary' : 'text-gray-200 dark:text-zinc-700'
                }`}
                style={{ fontVariationSettings: `'FILL' ${(hover || rating) >= star ? 1 : 0}, 'wght' 400` }}
              >
                star
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mb-10">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 flex flex-col items-center gap-3 transition-all">
            <p className="text-sm font-bold uppercase tracking-widest text-muted-brown">Food Quality</p>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(s => <span key={s} className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 flex flex-col items-center gap-3 transition-all">
            <p className="text-sm font-bold uppercase tracking-widest text-muted-brown">Delivery Speed</p>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map(s => <span key={s} className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>)}
              <span className="material-symbols-outlined text-primary/20 dark:text-zinc-700 text-2xl">star</span>
            </div>
          </div>
        </div>

        <div className="px-4 mb-8">
          <label className="block text-sm font-bold mb-3 text-muted-brown dark:text-gray-300 ml-1" htmlFor="feedback">Share your thoughts with the chef</label>
          <textarea 
            value={feedbackText}
            onChange={e => setFeedbackText(e.target.value)}
            className="w-full rounded-xl border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-deep-black dark:text-white p-4 focus:ring-primary focus:border-primary transition-all hover:shadow-md outline-none" 
            id="feedback" 
            placeholder="The spice level was perfect, reminds me of home..." 
            rows={4}
          ></textarea>
        </div>

        <div className="px-4 flex flex-col items-center gap-4">
          <button 
            onClick={() => {
              const msg = `⭐ *CUSTOMER FEEDBACK - Tawakaltu*\n\n*Rating:* ${rating}/5 stars${feedbackText ? `\n*Message:* ${feedbackText}` : ''}`;
              openWhatsApp(msg);
              navigate('/');
            }}
            className="w-full md:w-auto md:min-w-[280px] bg-primary hover:bg-red-700 text-white font-display font-bold py-4 px-8 rounded-full shadow-lg shadow-primary/20 transition-all active:scale-95"
          >
            Submit Feedback (WhatsApp)
          </button>
          <button onClick={() => navigate('/')} className="text-sm font-medium text-muted-brown hover:text-deep-black dark:hover:text-white transition-colors py-2">
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
