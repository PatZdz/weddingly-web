"use client";
import React from "react";

export default function Prezenty() {
  return (
    <section className="py-24 bg-[var(--background-color)]">
      <div className="container mx-auto px-12 md:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Prezenty</h2>
        </div>

        {/* Gift Message */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Wasza obecność to dla nas najlepszy prezent! Jeśli chcielibyście obdarować nas czymś wyjątkowym, zamiast tradycyjnych prezentów, zbieramy datki na fundusz ślubny. Będzie to dla nas ogromna pomoc w rozpoczęciu wspólnego życia.
          </p>

          {/* Gift Preferences */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <div className="absolute -right-2 -top-2 text-3xl">
                  ❌
                </div>
                <div className="text-5xl opacity-50">
                  🎁
                </div>
              </div>
              <div className="relative mt-4 text-5xl">
                💰
              </div>
              <p className="text-lg font-medium text-gray-600">Zamiast prezentów prosimy o wsparcie finansowe</p>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <div className="absolute -right-2 -top-2 text-3xl">
                  ❌
                </div>
                <div className="text-5xl opacity-50">
                  💐
                </div>
              </div>
              <div className="relative mt-4 text-5xl">
                🍷
              </div>
              <p className="text-lg font-medium text-gray-600">Zamiast kwiatów prosimy o butelkę wina</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}