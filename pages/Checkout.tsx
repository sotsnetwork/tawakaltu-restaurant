
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../types';
import { openWhatsApp } from '../utils/whatsapp';

interface CheckoutProps {
  cart: CartItem[];
  clearCart: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, clearCart }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    time: 'ASAP',
    scheduledDateTime: '',
    notes: ''
  });

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + 1500 + (subtotal * 0.05);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const deliveryTime = formData.time === 'ASAP' 
      ? 'ASAP (30-45 mins)' 
      : formData.scheduledDateTime || 'Scheduled';
    const orderLines = cart.map(i => `• ${i.name} x${i.quantity} — ₦${(i.price * i.quantity).toLocaleString()}`).join('\n');
    const message = `🛒 *NEW ORDER - Tawakaltu*\n\n*Customer:* ${formData.name}\n*Phone:* ${formData.phone}\n*Address:* ${formData.address}\n*Delivery:* ${deliveryTime}${formData.notes ? `\n*Notes:* ${formData.notes}` : ''}\n\n*Order:*\n${orderLines}\n\n*Subtotal:* ₦${subtotal.toLocaleString()}\n*Delivery:* ₦1,500\n*VAT (5%):* ₦${(subtotal * 0.05).toLocaleString()}\n*TOTAL:* ₦${total.toLocaleString()}`;
    openWhatsApp(message);
    clearCart();
    navigate('/success');
  };

  const steps = [
    { id: 1, label: 'Delivery Details', icon: 'local_shipping', status: 'active' },
    { id: 2, label: 'Payment', icon: 'payments', status: 'pending' },
    { id: 3, label: 'Confirmation', icon: 'verified', status: 'pending' }
  ];

  // Get current local time in YYYY-MM-DDTHH:MM format for min attribute
  const now = new Date();
  const minDateTime = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 16);

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      {/* Progress Indicator */}
      <div className="mb-16 max-w-3xl mx-auto">
        <div className="relative flex justify-between items-center">
          {/* Progress Bar Background */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 dark:bg-zinc-800 -translate-y-1/2 z-0"></div>
          {/* Progress Bar Active */}
          <div className="absolute top-1/2 left-0 w-1/3 h-0.5 bg-primary -translate-y-1/2 z-0 transition-all duration-700"></div>

          {steps.map((step, idx) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center">
              <div 
                className={`size-12 rounded-full flex items-center justify-center transition-all duration-500 border-2 ${
                  step.status === 'active' 
                    ? 'bg-white dark:bg-zinc-900 border-primary text-primary shadow-lg shadow-primary/20 scale-110' 
                    : step.status === 'complete'
                    ? 'bg-primary border-primary text-white'
                    : 'bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 text-gray-400'
                }`}
              >
                <span className="material-symbols-outlined text-xl">
                  {step.status === 'complete' ? 'check' : step.icon}
                </span>
                {step.status === 'active' && (
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
                )}
              </div>
              <span 
                className={`absolute top-14 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest transition-colors duration-500 ${
                  step.status === 'active' ? 'text-primary' : 'text-muted-brown'
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12 text-center">
        <h1 className="text-[#181110] dark:text-white text-4xl md:text-5xl font-display font-black leading-tight mb-4 transition-all">Almost there!</h1>
        <p className="text-muted-brown dark:text-gray-400 text-lg max-w-lg mx-auto italic">We're just a few details away from preparing your delicious Nigerian feast.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-8">
          <section className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-[0_32px_80px_-20px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-zinc-800">
            <div className="flex items-center gap-3 mb-8 border-b border-gray-50 dark:border-zinc-800 pb-4">
              <span className="material-symbols-outlined text-primary">person_pin_circle</span>
              <h2 className="text-2xl font-display font-bold tracking-tight dark:text-white">Delivery Details</h2>
            </div>
            
            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-brown">Full Name</span>
                  <input 
                    required
                    className="w-full rounded-xl border-gray-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white focus:ring-primary/20 focus:border-primary py-4 px-4 text-base transition-all bg-gray-50/50 dark:bg-zinc-900/50" 
                    placeholder="e.g. Adebayo Johnson"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-brown">Phone Number</span>
                  <input 
                    required
                    className="w-full rounded-xl border-gray-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white focus:ring-primary/20 focus:border-primary py-4 px-4 text-base transition-all bg-gray-50/50 dark:bg-zinc-900/50" 
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-brown">Delivery Address</span>
                <textarea 
                  required
                  className="w-full rounded-xl border-gray-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white focus:ring-primary/20 focus:border-primary py-4 px-4 text-base transition-all resize-none bg-gray-50/50 dark:bg-zinc-900/50" 
                  placeholder="Enter your full street address, apartment number, and city" 
                  rows={3}
                  value={formData.address}
                  onChange={e => setFormData({...formData, address: e.target.value})}
                ></textarea>
              </div>

              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-brown block">Preferred Delivery Time</span>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    type="button"
                    onClick={() => setFormData({...formData, time: 'ASAP'})}
                    className={`flex items-center gap-4 p-5 rounded-2xl border-2 transition-all group ${
                      formData.time === 'ASAP' 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-gray-100 dark:border-zinc-800 text-gray-500 hover:border-primary/30'
                    }`}
                  >
                    <div className={`size-10 rounded-full flex items-center justify-center transition-colors ${
                      formData.time === 'ASAP' ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-zinc-800 text-gray-400 group-hover:text-primary'
                    }`}>
                      <span className="material-symbols-outlined text-xl">bolt</span>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-bold text-sm">ASAP</span>
                      <span className="text-[10px] uppercase tracking-wider opacity-60">30-45 mins</span>
                    </div>
                  </button>
                  <button 
                    type="button"
                    onClick={() => setFormData({...formData, time: 'Scheduled'})}
                    className={`flex items-center gap-4 p-5 rounded-2xl border-2 transition-all group ${
                      formData.time === 'Scheduled' 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-gray-100 dark:border-zinc-800 text-gray-500 hover:border-primary/30'
                    }`}
                  >
                    <div className={`size-10 rounded-full flex items-center justify-center transition-colors ${
                      formData.time === 'Scheduled' ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-zinc-800 text-gray-400 group-hover:text-primary'
                    }`}>
                      <span className="material-symbols-outlined text-xl">schedule</span>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-bold text-sm">Scheduled</span>
                      <span className="text-[10px] uppercase tracking-wider opacity-60">Pick a time</span>
                    </div>
                  </button>
                </div>

                {/* Scheduled Date/Time Picker */}
                {formData.time === 'Scheduled' && (
                  <div className="mt-4 p-6 rounded-2xl bg-gray-50 dark:bg-zinc-800/50 border border-gray-100 dark:border-zinc-800 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="material-symbols-outlined text-primary text-sm">event</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-brown">Select Date & Time</span>
                    </div>
                    <input 
                      type="datetime-local"
                      required={formData.time === 'Scheduled'}
                      min={minDateTime}
                      className="w-full rounded-xl border-gray-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white focus:ring-primary/20 focus:border-primary py-4 px-4 text-base transition-all bg-white dark:bg-zinc-900"
                      value={formData.scheduledDateTime}
                      onChange={e => setFormData({...formData, scheduledDateTime: e.target.value})}
                    />
                    <p className="mt-3 text-[10px] text-muted-brown italic">Orders must be scheduled at least 1 hour in advance.</p>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-brown">Order Notes (Optional)</span>
                <input 
                  className="w-full rounded-xl border-gray-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white focus:ring-primary/20 focus:border-primary py-4 px-4 text-base transition-all bg-gray-50/50 dark:bg-zinc-900/50" 
                  placeholder="e.g. Please no extra spice in the Egusi"
                  value={formData.notes}
                  onChange={e => setFormData({...formData, notes: e.target.value})}
                />
              </div>
            </form>
          </section>
        </div>

        <div className="lg:col-span-5 sticky top-32">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-[0_32px_80px_-20px_rgba(225,6,0,0.1)] border border-gray-100 dark:border-zinc-800 overflow-hidden">
            <div className="p-8 border-b border-gray-50 dark:border-zinc-800">
              <h2 className="text-xl font-display font-bold tracking-tight dark:text-white italic">Order Summary</h2>
            </div>
            <div className="p-8 space-y-6 max-h-[320px] overflow-y-auto custom-scrollbar">
              {cart.map(item => (
                <div key={item.id} className="flex gap-5 group">
                  <div className="size-20 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-50 border border-gray-100 dark:border-zinc-800">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={item.image} alt={item.name} />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-sm dark:text-white group-hover:text-primary transition-colors">{item.name}</h4>
                      <span className="font-bold text-sm dark:text-white">₦{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-brown mt-1">Quantity: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-8 bg-gray-50/50 dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-800 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-brown">Subtotal</span>
                <span className="font-medium dark:text-white">₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-brown">Delivery Fee</span>
                <span className="font-medium dark:text-white">₦1,500</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-brown">VAT (5%)</span>
                <span className="font-medium dark:text-white">₦{(subtotal * 0.05).toLocaleString()}</span>
              </div>
              <div className="h-px bg-gray-200 dark:bg-zinc-800 my-4"></div>
              <div className="flex justify-between items-center">
                <span className="font-display font-black text-xl dark:text-white">Total</span>
                <span className="font-display font-black text-3xl text-primary tracking-tight">₦{total.toLocaleString()}</span>
              </div>
              
              <button 
                type="submit"
                form="checkout-form"
                className="w-full bg-primary hover:bg-red-700 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary/30 transition-all hover:-translate-y-1 active:translate-y-0 mt-8"
              >
                <span className="material-symbols-outlined">payments</span>
                Place Order (WhatsApp)
              </button>
              <div className="flex items-center justify-center gap-2 pt-4">
                <span className="material-symbols-outlined text-gray-400 text-sm">lock</span>
                <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest font-bold">
                  Secure End-to-End Encryption
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
