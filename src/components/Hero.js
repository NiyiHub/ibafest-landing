import React from 'react';
import { BookOpen, Users, Globe, Heart } from 'lucide-react';
import ibafestLogo from '../assets/ibafest-logo.png';

export const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30"></div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 flex items-center justify-center bg-white/10 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-orange-600/30">
            <img 
              src={ibafestLogo} 
              alt="IbaFest Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">Stories</span> Come Alive
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
          Celebrating the rich tapestry of African literature, creativity, and cultural dialogue in the heart of Ibadan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm border border-orange-600/30 rounded-full px-6 py-3 text-white font-medium">
            🎭 Festival Website in Development
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-orange-600/30 rounded-full px-6 py-3 text-white font-medium">
            📅 October 24-25, 2025
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <BookOpen className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <p className="text-white font-medium text-sm">Literature</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <p className="text-white font-medium text-sm">Community</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <Globe className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <p className="text-white font-medium text-sm">Culture</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <Heart className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <p className="text-white font-medium text-sm">Heritage</p>
          </div>
        </div>
      </div>
    </section>
  );
};