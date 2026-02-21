
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { openWhatsApp } from '../utils/whatsapp';

const ClaimGift: React.FC = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <div className="min-h-screen bg-background-light dark:bg-zinc-950 transition-colors duration-300">
      <main className="flex justify-center py-12 px-4 md:px-10 lg:px-40">
        <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 transition-all">
              <div className="mb-8">
                <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">A Gift for You</span>
                <h1 className="text-deep-black dark:text-white font-display text-3xl md:text-4xl font-bold leading-tight">Your Gourmet Seafood Okra is ready!</h1>
              </div>

              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">1</span>
                  <h2 className="text-deep-black dark:text-white text-xl font-display font-bold">Where should we deliver?</h2>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex w-full items-stretch rounded-xl group border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-800">
                    <input 
                      className="flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 text-base py-4 px-5 dark:text-white" 
                      placeholder="Enter your delivery address"
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                    />
                    <div className="text-muted-brown flex items-center justify-center pr-5">
                      <span className="material-symbols-outlined">location_pin</span>
                    </div>
                  </div>
                  <button className="flex items-center justify-start gap-2 text-primary text-sm font-bold hover:underline transition-all">
                    <span className="material-symbols-outlined text-[18px]">near_me</span>
                    <span>Use Current Location</span>
                  </button>
                </div>
              </section>

              <hr className="my-8 border-gray-100 dark:border-zinc-800" />

              <section className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">2</span>
                  <h2 className="text-deep-black dark:text-white text-xl font-display font-bold">When would you like it?</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-sm font-medium dark:text-white/70">Select Date</p>
                  <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
                    <input 
                      type="datetime-local"
                      value={selectedDate}
                      onChange={e => setSelectedDate(e.target.value)}
                      className="flex-1 min-w-[200px] rounded-xl border-2 border-gray-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white focus:border-primary focus:ring-primary p-4"
                    />
                  </div>
                </div>
              </section>

              <div className="mt-12">
                <button 
                  onClick={() => {
                    const msg = `🎁 *GIFT CLAIM - Tawakaltu*\n\n*Gift:* Gourmet Seafood Okra (gifted)\n*Delivery Address:* ${address || 'Not provided'}\n*Preferred Date/Time:* ${selectedDate || 'To be arranged'}\n\n_Recipient claiming their gifted meal._`;
                    openWhatsApp(msg);
                    navigate('/success');
                  }}
                  className="w-full flex items-center justify-center gap-3 rounded-xl bg-primary h-14 text-white font-bold text-lg shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Schedule Delivery via WhatsApp</span>
                  <span className="material-symbols-outlined">auto_schedule</span>
                </button>
                <p className="text-center text-xs text-muted-brown mt-4">Sends your claim to our WhatsApp — we'll confirm delivery.</p>
              </div>
            </div>
          </div>

          <aside className="sticky top-32">
            <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden transition-all">
              <div 
                className="h-56 bg-cover bg-center relative" 
                style={{ backgroundImage: 'url("https://picsum.photos/seed/tawakaltu-claim/800/600")' }}
              >
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Gifted
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="font-display font-bold text-xl dark:text-white">Seafood Okra Supreme</h3>
                <p className="text-sm text-muted-brown">Authentic Nigerian recipe with jumbo prawns, calamari, and fresh catch of the day.</p>
                <div className="pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <div className="flex justify-between items-center">
                    <span className="font-display font-bold text-lg dark:text-white">Total</span>
                    <div className="text-right">
                      <span className="font-display font-bold text-2xl text-primary">₦0.00</span>
                      <p className="text-[10px] uppercase font-bold text-primary tracking-widest">(Gifted by Adebayo)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ClaimGift;
