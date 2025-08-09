import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="w-full bg-gradient-to-r from-[#40000B] to-[#D65D2B] text-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the ÌbàFest Community</h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
          Be part of Africa's most vibrant literary festival. Get exclusive updates about the festival, featured authors, and year-round cultural programming.
        </p>
        
        {isSubscribed ? (
          <div className="bg-green-500 text-white p-4 rounded-xl max-w-md mx-auto flex items-center">
            <Check className="w-5 h-5 mr-2" />
            Welcome to the ÌbàFest family!
          </div>
        ) : (
          <div className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/20">
              <input 
                type="email" 
                placeholder="Enter your email for festival updates" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-6 py-4 rounded-lg text-white placeholder-white/70 bg-transparent border border-white/30 focus:outline-none focus:border-white/50 transition-colors" 
              />
              <button 
                onClick={handleSubmit}
                className="bg-[#030712] text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center justify-center shadow-lg"
              >
                Join Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            <p className="text-sm text-white/80 mt-4">
              Stay connected with Africa's literary heartbeat. Unsubscribe anytime.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};