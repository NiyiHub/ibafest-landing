import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin, MessageCircle, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#030712] text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">Ibadan Book and Arts Festival</h3>
            <p className="text-gray-300 leading-relaxed">
              Celebrating African literature, creativity, and cultural dialogue in the historic city of Ibadan. A vibrant festival fostering literacy, artistic excellence, and cultural leadership.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-[#D65D2B]" />
                <span>hello@ibadanfestival.org</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-[#D65D2B]" />
                <span>+234 909 666 4359</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-[#D65D2B]" />
                <span>+234 809 816 4359</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-[#D65D2B] mt-0.5" />
                <span>Ibadan, Oyo State, Nigeria</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Follow ÌbàFest</h3>
            <div className="grid grid-cols-3 gap-3">
              <a href="https://instagram.com/ibadanfestival" className="bg-white/10 hover:bg-[#D65D2B] p-3 rounded-lg transition-colors group flex items-center justify-center">
                <Instagram className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="https://x.com/ibadanfestival" className="bg-white/10 hover:bg-[#D65D2B] p-3 rounded-lg transition-colors group flex items-center justify-center">
                <Twitter className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="https://facebook.com/ibadanfestival" className="bg-white/10 hover:bg-[#D65D2B] p-3 rounded-lg transition-colors group flex items-center justify-center">
                <Facebook className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/showcase/ibadanfestival/" className="bg-white/10 hover:bg-[#D65D2B] p-3 rounded-lg transition-colors group flex items-center justify-center">
                <Linkedin className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="https://tiktok.com/ibadanfestival" className="bg-white/10 hover:bg-[#D65D2B] p-3 rounded-lg transition-colors group flex items-center justify-center">
                <MessageCircle className="w-5 h-5 group-hover:text-white" />
              </a>
              <a href="https://youtube.com/@ibadanfestival" className="bg-white/10 hover:bg-[#D65D2B] p-3 rounded-lg transition-colors group flex items-center justify-center">
                <Youtube className="w-5 h-5 group-hover:text-white" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Join the conversation and be part of Africa's literary renaissance.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Ibadan Book and Arts Festival (ÌbàFest). All rights reserved.
            </p>
            <div className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-[#D65D2B]" /> for African Literature
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};