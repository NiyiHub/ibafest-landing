import React from 'react';
import { Calendar, BookOpen, Users, ArrowRight, Check, Star } from 'lucide-react';

export const ComingSoon = () => {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#40000B] mb-4">
            A Festival Like No Other
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ÌbàFest is more than an event—it's a movement celebrating African creativity, fostering literacy, and building cultural bridges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#40000B] to-[#030712] text-white p-8 rounded-2xl border-l-4 border-[#D65D2B] shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Star className="w-6 h-6 mr-2 text-[#D65D2B]" />
                Our Vision
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <div className="bg-[#D65D2B] rounded-full p-1 mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Cultural Renaissance</h4>
                    <p className="text-gray-300">Reviving and celebrating Africa's rich literary traditions</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="bg-[#D65D2B] rounded-full p-1 mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Literary Excellence</h4>
                    <p className="text-gray-300">Nurturing emerging voices and established authors</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="bg-[#D65D2B] rounded-full p-1 mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Community Building</h4>
                    <p className="text-gray-300">Creating spaces for meaningful cultural dialogue</p>
                  </div>
                </li>
                <li className="flex items-start group">
                  <div className="bg-[#D65D2B] rounded-full p-1 mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Global Impact</h4>
                    <p className="text-gray-300">Connecting African stories with the world</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#D65D2B] to-[#ff7849] text-white p-6 rounded-2xl text-center transform hover:scale-105 transition-transform shadow-lg">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-white" />
              <h4 className="font-bold text-2xl mb-2">Oct 24-25</h4>
              <p className="text-white/90">Festival Days 2025</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border-2 border-[#D65D2B]/20 p-6 rounded-2xl text-center transform hover:scale-105 transition-transform">
                <BookOpen className="w-10 h-10 mx-auto mb-3 text-[#40000B]" />
                <h4 className="font-bold text-lg mb-1 text-[#40000B]">100+</h4>
                <p className="text-gray-600 text-sm">Authors & Artists</p>
              </div>
              <div className="bg-white border-2 border-[#D65D2B]/20 p-6 rounded-2xl text-center transform hover:scale-105 transition-transform">
                <Users className="w-10 h-10 mx-auto mb-3 text-[#40000B]" />
                <h4 className="font-bold text-lg mb-1 text-[#40000B]">50+</h4>
                <p className="text-gray-600 text-sm">Events & Sessions</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#40000B]/5 to-[#D65D2B]/5 border border-[#D65D2B]/20 p-6 rounded-2xl">
              <h4 className="font-bold text-[#40000B] mb-3">What to Expect:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-[#D65D2B] mr-2" />
                  Panel discussions with renowned authors
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-[#D65D2B] mr-2" />
                  Poetry readings and storytelling sessions
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-[#D65D2B] mr-2" />
                  Workshop on creative writing
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-[#D65D2B] mr-2" />
                  Cultural exhibitions and art displays
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};