
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GIFT_PACKAGES } from '../constants';
import { openWhatsApp } from '../utils/whatsapp';

const GiftAMeal: React.FC = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(GIFT_PACKAGES[0].id);
  const [recipientName, setRecipientName] = useState('');
  const [recipientPhone, setRecipientPhone] = useState('');
  const [deliveryDateTime, setDeliveryDateTime] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="bg-background-light dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto py-12 px-6">
        <h1 className="text-gray-900 dark:text-white tracking-tight text-[40px] md:text-[52px] font-bold leading-tight text-center pb-6 pt-12 font-display">
          Spread the Flavor: <span className="text-primary italic">Gift a Meal</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          {/* Left Selection */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-zinc-800 transition-all">
              <div className="pb-6">
                <div className="flex border-b border-gray-100 dark:border-zinc-800 gap-8">
                  <button className="flex flex-col items-center justify-center border-b-[3px] border-primary text-primary pb-3 transition-all font-bold text-sm">
                    Gift Packages
                  </button>
                  <button className="flex flex-col items-center justify-center border-b-[3px] border-transparent text-gray-400 pb-3 hover:text-gray-600 dark:hover:text-gray-200 transition-all font-bold text-sm">
                    Digital Gift Cards
                  </button>
                </div>
              </div>
              <h2 className="text-gray-900 dark:text-white text-[22px] font-bold pb-4 font-display">1. Choose Your Gift</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {GIFT_PACKAGES.map(pkg => (
                  <button 
                    key={pkg.id}
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`relative flex flex-col gap-3 p-3 rounded-xl border-2 transition-all hover:shadow-md text-left ${
                      selectedPackage === pkg.id 
                      ? 'border-primary bg-primary/5' 
                      : 'border-transparent bg-gray-50 dark:bg-zinc-800 hover:border-gold-accent/50'
                    }`}
                  >
                    <div className="w-full aspect-[16/10] bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: `url(${pkg.image})` }}>
                      {pkg.tag && (
                        <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                          {pkg.tag}
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className={`text-base font-bold ${selectedPackage === pkg.id ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>{pkg.name}</p>
                        <p className={`text-lg font-bold ${selectedPackage === pkg.id ? 'text-primary' : 'text-muted-brown'}`}>₦{pkg.price.toLocaleString()}</p>
                      </div>
                      {selectedPackage === pkg.id && (
                        <div className="bg-primary rounded-full size-6 flex items-center justify-center">
                          <span className="material-symbols-outlined text-white text-[18px]">check</span>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
                
                <button className="group relative flex flex-col gap-3 p-3 rounded-xl border-2 border-dashed border-gold-accent/30 bg-gold-accent/5 dark:bg-gold-accent/10 cursor-pointer transition-all hover:shadow-md text-left">
                  <div className="w-full aspect-[16/10] flex items-center justify-center bg-gradient-to-br from-gold-accent/20 to-white dark:from-gold-accent/40 dark:to-zinc-900 rounded-lg">
                    <span className="material-symbols-outlined text-gold-accent text-4xl">card_giftcard</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-gray-900 dark:text-white text-base font-medium">Custom Gift Card</p>
                      <p className="text-gold-accent text-lg font-bold">Any Amount</p>
                    </div>
                    <span className="text-gold-accent border border-gold-accent px-3 py-1 rounded-full text-xs font-bold">Create</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Details Form */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-zinc-900 rounded-xl p-8 shadow-xl border border-gray-100 dark:border-zinc-800 sticky top-32 transition-all">
              <h2 className="text-gray-900 dark:text-white text-[22px] font-bold pb-6 font-display">2. Surprise Details</h2>
              <form 
                className="flex flex-col gap-5" 
                onSubmit={(e) => {
                  e.preventDefault();
                  const pkg = GIFT_PACKAGES.find(p => p.id === selectedPackage)!;
                  const msg = `🎁 *GIFT ORDER - Tawakaltu*\n\n*Package:* ${pkg.name}\n*Amount:* ₦${pkg.price.toLocaleString()}\n\n*Recipient:* ${recipientName}\n*Phone:* +234 ${recipientPhone}\n*Delivery:* ${deliveryDateTime || 'To be arranged'}${message ? `\n*Message:* ${message}` : ''}\n\n_Send this to our WhatsApp to complete the gift order._`;
                  openWhatsApp(msg);
                  navigate('/success');
                }}
              >
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-brown">Who are we surprising?</label>
                  <input 
                    required
                    value={recipientName} 
                    onChange={e => setRecipientName(e.target.value)}
                    className="w-full rounded-lg border-gray-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white focus:border-primary focus:ring-primary p-3" 
                    placeholder="Recipient Name" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-brown">Recipient Phone / WhatsApp</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-700 text-gray-500 text-sm font-bold">+234</span>
                    <input 
                      required
                      value={recipientPhone} 
                      onChange={e => setRecipientPhone(e.target.value)}
                      className="w-full rounded-r-lg border-gray-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white focus:border-primary focus:ring-primary p-3" 
                      placeholder="803 123 4567" 
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-brown">Preferred Delivery Date & Time</label>
                  <input 
                    value={deliveryDateTime} 
                    onChange={e => setDeliveryDateTime(e.target.value)}
                    className="w-full rounded-lg border-gray-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white focus:border-primary focus:ring-primary p-3" 
                    type="datetime-local" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-brown">Your Heartfelt Message</label>
                  <textarea 
                    value={message} 
                    onChange={e => setMessage(e.target.value)}
                    className="w-full rounded-lg border-gray-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white focus:border-primary focus:ring-primary p-3" 
                    placeholder="Write something sweet..." 
                    rows={3}
                  ></textarea>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-zinc-800">
                  <div className="flex justify-between items-center pb-4">
                    <span className="text-muted-brown dark:text-gray-400">Total to Pay</span>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">₦{(GIFT_PACKAGES.find(p => p.id === selectedPackage)?.price ?? 0).toLocaleString()}</span>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-primary hover:bg-red-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/20 hover:-translate-y-0.5"
                  >
                    Send Gift via WhatsApp
                  </button>
                  <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-3">Order sent to restaurant WhatsApp — pay on delivery or as agreed</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftAMeal;
