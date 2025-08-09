import React from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import osundarePortrait from '../assets/Niyi Osundare Portrait.png';

export const EventPromo = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#EFF6FF] to-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#172554] mb-4">
            Featured Literary Event
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join us for an extraordinary celebration of African poetry and literature
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#172554]/10">
          <div className="space-y-6">
            <div className="inline-flex items-center bg-[#40000B] text-white px-4 py-2 rounded-full text-sm font-medium">
              <Calendar className="w-4 h-4 mr-2" />
              August 16, 2025
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#172554] leading-tight">
              Invocations of the Word: A Day of Poetry and Conversations with Niyi Osundare
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Experience an extraordinary literary journey with Professor Niyi Osundare, one of Africa's most celebrated poets. This intimate event features live readings, philosophical conversations, and deep insights into the power of African poetry.
            </p>
            <div className="space-y-4 bg-[#EFF6FF] p-6 rounded-xl">
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-[#172554] mt-0.5 mr-3" />
                <div>
                  <span className="font-semibold text-[#172554]">When:</span>
                  <span className="text-gray-700 ml-2">Saturday, August 16, 2025 • 2:00 PM</span>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#172554] mt-0.5 mr-3" />
                <div>
                  <span className="font-semibold text-[#172554]">Where:</span>
                  <span className="text-gray-700 ml-2">RovingHeights Bookstore, Prime Mall, Bodija, Ibadan</span>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-5 h-5 text-[#172554] mt-0.5 mr-3" />
                <div>
                  <span className="font-semibold text-[#172554]">Admission:</span>
                  <span className="text-gray-700 ml-2">Free (Limited seats available)</span>
                </div>
              </div>
            </div>
            <a 
              href="http://www.Bit.ly/OSUNDARE" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-[#D65D2B] text-white px-8 py-4 rounded-xl font-medium hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
            >
              Reserve Your Seat
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={osundarePortrait} 
              alt="Professor Niyi Osundare Portrait" 
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};