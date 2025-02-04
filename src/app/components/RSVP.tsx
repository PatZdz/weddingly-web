"use client";
import React, { useState } from 'react';
import { EnvelopeIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

interface AdditionalGuest {
  name: string;
  diet: string;
}

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attendance: 'yes',
    diet: 'standard',
    accommodation: 'no',
    message: ''
  });

  const [additionalGuests, setAdditionalGuests] = useState<AdditionalGuest[]>([]);

  const handleGuestsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const guestCount = parseInt(e.target.value);
    setFormData({ ...formData, guests: e.target.value });

    if (guestCount > 1) {
      const newGuests = Array(guestCount - 1).fill(null).map((_, index) =>
        additionalGuests[index] || { name: '', diet: 'standard' }
      );
      setAdditionalGuests(newGuests);
    } else {
      setAdditionalGuests([]);
    }
  };

  const handleAdditionalGuestChange = (index: number, field: keyof AdditionalGuest, value: string) => {
    const updatedGuests = [...additionalGuests];
    updatedGuests[index] = { ...updatedGuests[index], [field]: value };
    setAdditionalGuests(updatedGuests);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const submissionData = {
      ...formData,
      additionalGuests
    };

    try {
      console.log(submissionData);
      alert('Dziękujemy za potwierdzenie!');
    } catch (_error) {
      alert('Wystąpił błąd. Spróbuj ponownie później.');
    }
  };

  return (
    <section id="rsvp" className="py-24 bg-[var(--background-color)]">
      <div className="container mx-auto px-12 md:px-24">
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-serif mb-6">Potwierdź obecność</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Bardzo zależy nam na tym, abyście byli z nami w tym wyjątkowym dniu. Prosimy, abyście potwierdzili swoją obecność do 1 lipca 2025 roku. Dzięki temu będziemy mogli przygotować się na Wasze przybycie i zadbać o każdy szczegół.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-6 bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-[#003E3C]/10">
            <div>
              <label htmlFor="name" className="block text-lg font-serif mb-2">Imię i nazwisko</label>
              <input
                type="text"
                id="name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#003E3C]"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-serif mb-2">Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#003E3C]"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="relative">
              <label htmlFor="diet" className="block text-lg font-serif mb-2">Preferencje żywieniowe</label>
              <select
                id="diet"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#003E3C] appearance-none pr-10"
                value={formData.diet}
                onChange={(e) => setFormData({ ...formData, diet: e.target.value })}
              >
                <option value="standard">Standard</option>
                <option value="wege">Wegetariańskie</option>
                <option value="vegan">Wegańskie</option>
              </select>
              <ChevronDownIcon className="h-5 w-5 absolute right-3 top-[70%] transform -translate-y-1/2 pointer-events-none text-gray-500" />
            </div>

            <div className="relative">
              <label htmlFor="guests" className="block text-lg font-serif mb-2">Liczba gości</label>
              <select
                id="guests"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#003E3C] appearance-none pr-10"
                value={formData.guests}
                onChange={handleGuestsChange}
              >
                <option value="1">1 osoba</option>
                <option value="2">2 osoby</option>
                <option value="3">3 osoby</option>
                <option value="4">4 osoby</option>
              </select>
              <ChevronDownIcon className="h-5 w-5 absolute right-3 top-[70%] transform -translate-y-1/2 pointer-events-none text-gray-500" />
            </div>

            {additionalGuests.map((guest, index) => (
              <div key={index} className="space-y-4 p-6 bg-white/80 rounded-lg">
                <h3 className="font-serif text-xl">Gość {index + 2}</h3>
                <div>
                  <label className="block text-lg font-serif mb-2">Imię i nazwisko</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#003E3C]"
                    value={guest.name}
                    onChange={(e) => handleAdditionalGuestChange(index, 'name', e.target.value)}
                  />
                </div>
                <div className="relative">
                  <label className="block text-lg font-serif mb-2">Preferencje żywieniowe</label>
                  <select
                    className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#003E3C] appearance-none pr-10"
                    value={guest.diet}
                    onChange={(e) => handleAdditionalGuestChange(index, 'diet', e.target.value)}
                  >
                    <option value="standard">Standard</option>
                    <option value="wege">Wegetariańskie</option>
                    <option value="vegan">Wegańskie</option>
                  </select>
                  <ChevronDownIcon className="h-5 w-5 absolute right-3 top-[70%] transform -translate-y-1/2 pointer-events-none text-gray-500" />
                </div>
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-lg font-serif mb-2">Wiadomość (opcjonalnie)</label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#003E3C]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 bg-[var(--primary-color)] text-white rounded-lg font-serif text-lg hover:bg-[var(--primary-hover)] transition-colors"
          >
            Wyślij potwierdzenie
          </button>
        </form>
      </div>
    </section>
  );
}