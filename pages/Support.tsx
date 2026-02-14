
import React from 'react';
import { Link } from 'react-router-dom';
import { openWhatsApp } from '../utils/whatsapp';

const Support: React.FC = () => {
  const faqs = [
    { q: 'How do I place an order?', a: 'Browse our menu, add items to cart, and proceed to checkout. Your order will be sent to our WhatsApp for confirmation and delivery.' },
    { q: 'What are your delivery times?', a: 'We offer ASAP delivery (30–45 mins) or scheduled delivery. Choose your preferred option at checkout.' },
    { q: 'How can I track my order?', a: 'Once you place your order, we\'ll confirm via WhatsApp. Reply to that chat for updates on your delivery.' },
    { q: 'Do you cater for events?', a: 'Yes! Visit our Catering page to inquire about weddings, corporate events, and more.' },
    { q: 'I have feedback or an issue. Who do I contact?', a: 'Use our Feedback page to share your experience, or reach out directly on WhatsApp for support.' },
  ];

  const handleContact = () => {
    openWhatsApp('🆘 *SUPPORT - Tawakaltu*\n\nHi! I need assistance.\n\nOrder/Issue:\nDetails:');
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-zinc-950 transition-colors py-16 px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-xs font-bold tracking-widest uppercase">Help Center</span>
            <div className="h-px w-12 bg-primary"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black text-deep-black dark:text-white mb-4">
            Support
          </h1>
          <p className="text-muted-brown dark:text-gray-400 text-lg max-w-2xl mx-auto">
            We're here to help. Find answers below or reach us on WhatsApp.
          </p>
        </div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-gray-100 dark:border-zinc-800">
              <h3 className="font-display font-bold text-lg dark:text-white mb-2">{faq.q}</h3>
              <p className="text-muted-brown text-sm">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-10 border border-primary/20 text-center">
          <h2 className="font-display font-bold text-xl dark:text-white mb-2">Still Need Help?</h2>
          <p className="text-muted-brown text-sm mb-6">Our team responds quickly on WhatsApp. Send us a message anytime.</p>
          <button 
            onClick={handleContact}
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/20"
          >
            <span className="material-symbols-outlined">chat</span>
            Contact Support
          </button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <Link to="/feedback" className="text-primary font-bold hover:underline">Leave Feedback</Link>
          <Link to="/claim-gift" className="text-primary font-bold hover:underline">Claim a Gift</Link>
          <Link to="/menu" className="text-primary font-bold hover:underline">Back to Menu</Link>
        </div>
      </div>
    </div>
  );
};

export default Support;
