"use client";
import React, { useState } from 'react';
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attendance: 'yes',
    dietaryRestrictions: '',
    accommodation: 'no',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch(
        'YOUR_GOOGLE_FORM_SUBMIT_URL',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(formData)
        }
      );
      
      setFormData({
        name: '',
        email: '',
        guests: '1',
        attendance: 'yes',
        dietaryRestrictions: '',
        accommodation: 'no',
        message: ''
      });
      
      alert('Dziękujemy za potwierdzenie!');
    } catch (error) {
      alert('Wystąpił błąd. Spróbuj ponownie później.');
    }
  };

  return (
    <section className="py-24 bg-[var(--background-color)]">
      <div className="container mx-auto px-12 md:px-24">
        <div className="text-center mb-16">
          <EnvelopeIcon className="h-16 w-16 text-[#003E3C] mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Potwierdź obecność</h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Będzie nam niezmiernie miło gościć Was na naszym ślubie. Prosimy o potwierdzenie obecności do 12.11.2025
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
                onChange={(e) => setFormData({...formData, name: e.target.value})}
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
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="guests" className="block text-lg font-serif mb-2">Liczba gości</label>
              <select
                id="guests"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#003E3C]"
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
              >
                <option value="1">1 osoba</option>
                <option value="2">2 osoby</option>
                <option value="3">3 osoby</option>
                <option value="4">4 osoby</option>
              </select>
            </div>

            <div>
              <label htmlFor="attendance" className="block text-lg font-serif mb-2">Czy będziesz obecny/a?</label>
              <select
                id="attendance"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#003E3C]"
                value={formData.attendance}
                onChange={(e) => setFormData({...formData, attendance: e.target.value})}
              >
                <option value="yes">Tak, będę</option>
                <option value="no">Niestety nie dam rady</option>
              </select>
            </div>

            <div>
              <label htmlFor="dietaryRestrictions" className="block text-lg font-serif mb-2">Preferencje żywieniowe</label>
              <input
                type="text"
                id="dietaryRestrictions"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#003E3C]"
                placeholder="Np. wegetariańskie, bezglutenowe..."
                value={formData.dietaryRestrictions}
                onChange={(e) => setFormData({...formData, dietaryRestrictions: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-serif mb-2">Wiadomość (opcjonalnie)</label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#003E3C]"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 bg-[#003E3C] text-white rounded-lg font-serif text-lg hover:bg-[#002E2C] transition-colors"
          >
            Wyślij potwierdzenie
          </button>
        </form>
      </div>
    </section>
  );
}
