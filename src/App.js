import React from 'react';
import { Hero } from './components/Hero';
import { ComingSoon } from './components/ComingSoon';
import { EventPromo } from './components/EventPromo';
import { NewsletterSignup } from './components/NewsletterSignup';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ComingSoon />
      <EventPromo />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

export default App;