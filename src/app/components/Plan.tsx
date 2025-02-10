"use client";
import React from "react";

export default function Plan() {
  return (
    <section id="plan" className="py-24 bg-[var(--background-color)]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 md:p-12" 
          style={{
            backgroundImage: `radial-gradient(#00000005 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-[var(--text-black)]">Plan uroczystości</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light italic">
              Harmonogram naszego wyjątkowego dnia
            </p>
          </div>

          <div className="space-y-8">
            {/* Event 1 */}
            <div className="p-4 md:p-6 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <span className="text-2xl md:text-3xl font-serif text-[var(--icon-color)] md:min-w-[100px]">13:30</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif mb-1 md:mb-2 text-[var(--icon-color)]">
                    Powitanie gości
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg">
                    Kościół św. Dominika<br />
                    Powitanie i zajmowanie miejsc
                  </p>
                </div>
              </div>
            </div>

            {/* Event 2 - apply the same changes */}
            <div className="p-4 md:p-6 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <span className="text-2xl md:text-3xl font-serif text-[var(--icon-color)] md:min-w-[100px]">14:00</span>
                <div>
                  <h3 className="text-2xl font-serif mb-2 text-[var(--icon-color)]">
                    Ceremonia zaślubin
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Msza święta i złożenie przysięgi małżeńskiej
                  </p>
                </div>
              </div>
            </div>

            {/* Event 3 - apply the same changes */}
            <div className="p-4 md:p-6 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <span className="text-2xl md:text-3xl font-serif text-[var(--icon-color)] md:min-w-[100px]">16:00</span>
                <div>
                  <h3 className="text-2xl font-serif mb-2 text-[var(--icon-color)]">
                    Przyjęcie weselne
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Powitanie Młodej Pary, toast i obiad weselny
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
