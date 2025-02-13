"use client";
import React from "react";
import { FaChurch, FaRing, FaGlassCheers, FaUsers, FaMusic } from "react-icons/fa";

export default function Plan() {
  return (
    <section id="plan" className="py-24 bg-[var(--background-color)]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[var(--text-black)]">Plan Uroczystości</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light italic">
              Harmonogram Naszego Wielkiego Dnia
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 h-full w-px bg-[#BF826B] opacity-20"></div>
            
            <div className="space-y-16">
              {/* Event 1 */}
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-2xl font-serif mb-2 text-[#BF826B]">Ślub</h3>
                  <p className="text-lg text-gray-600">12:00</p>
                </div>
                <div className="z-10">
                  <FaChurch className="w-10 h-10 text-[#BF826B]" />
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Event 2 */}
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8"></div>
                <div className="z-10">
                  <FaRing className="w-10 h-10 text-[#BF826B]" />
                </div>
                <div className="flex-1 pl-8">
                  <h3 className="text-2xl font-serif mb-2 text-[#BF826B]">Powitanie Gości</h3>
                  <p className="text-lg text-gray-600">13:30</p>
                </div>
              </div>

              {/* Event 3 */}
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-2xl font-serif mb-2 text-[#BF826B]">Para Młoda</h3>
                  <p className="text-lg text-gray-600">16:30</p>
                </div>
                <div className="z-10">
                  <FaUsers className="w-10 h-10 text-[#BF826B]" />
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Event 4 */}
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8"></div>
                <div className="z-10">
                  <FaGlassCheers className="w-10 h-10 text-[#BF826B]" />
                </div>
                <div className="flex-1 pl-8">
                  <h3 className="text-2xl font-serif mb-2 text-[#BF826B]">Obiad Weselny</h3>
                  <p className="text-lg text-gray-600">17:00</p>
                </div>
              </div>

              {/* Event 5 */}
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <h3 className="text-2xl font-serif mb-2 text-[#BF826B]">Zabawa</h3>
                  <p className="text-lg text-gray-600">18:00</p>
                </div>
                <div className="z-10">
                  <FaMusic className="w-10 h-10 text-[#BF826B]" />
                </div>
                <div className="flex-1 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
