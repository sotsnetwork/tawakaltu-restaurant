
import React from 'react';
import { Link } from 'react-router-dom';
import { openWhatsApp } from '../utils/whatsapp';

const Careers: React.FC = () => {
  const roles = [
    { title: 'Kitchen Staff', desc: 'Prep cooks, line cooks, and kitchen assistants. Experience with Nigerian cuisine a plus.' },
    { title: 'Delivery Drivers', desc: 'Reliable drivers for delivery. Own vehicle preferred. Competitive pay.' },
    { title: 'Customer Service', desc: 'Friendly team members for orders, inquiries, and support.' },
  ];

  const handleApply = (role: string) => {
    openWhatsApp(`💼 *CAREER INQUIRY - Tawakaltu*\n\nHi! I'm interested in the *${role}* position.\n\nName:\nPhone:\nEmail:\nBrief experience:\n\nI'd love to learn more about the opportunity.`);
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-zinc-950 transition-colors py-16 px-6">
      <div className="max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <div className="h-px w-12 bg-primary"></div>
            <span className="text-xs font-bold tracking-widest uppercase">Join Our Team</span>
            <div className="h-px w-12 bg-primary"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-black text-deep-black dark:text-white mb-4">
            Careers
          </h1>
          <p className="text-muted-brown dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Love Nigerian food and hospitality? We're always looking for passionate people to join the Tawakaltu family.
          </p>
        </div>

        <div className="space-y-6 mb-16">
          {roles.map((role, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h3 className="font-display font-bold text-xl dark:text-white mb-2">{role.title}</h3>
                <p className="text-muted-brown text-sm">{role.desc}</p>
              </div>
              <button 
                onClick={() => handleApply(role.title)}
                className="flex-shrink-0 px-6 py-3 bg-primary hover:bg-red-700 text-white rounded-xl font-bold text-sm transition-all"
              >
                Apply via WhatsApp
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-gray-100 dark:border-zinc-800 text-center">
          <h2 className="font-display font-bold text-xl dark:text-white mb-2">Don't see your role?</h2>
          <p className="text-muted-brown text-sm mb-4">Send us your CV and tell us how you'd like to contribute.</p>
          <button 
            onClick={() => openWhatsApp('💼 *GENERAL CAREER INQUIRY - Tawakaltu*\n\nHi! I\'d like to explore career opportunities.\n\nName:\nPhone:\nSkills/Experience:\n\nThank you!')}
            className="text-primary font-bold hover:underline"
          >
            Send General Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
