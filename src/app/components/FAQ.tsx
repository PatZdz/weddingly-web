"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-[#003E3C]/10 last:border-b-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left"
        onClick={onClick}
      >
        <span className="text-xl font-serif text-[#293238]">{question}</span>
        <ChevronDownIcon
          className={`h-6 w-6 text-[#003E3C] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mb-6' : 'max-h-0'}`}
      >
        <p className="text-gray-600 text-lg leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Czy mogę przyjść z osobą towarzyszącą?",
      answer: "Tak, oczywiście! Prosimy jednak o potwierdzenie tego faktu w formularzu RSVP, abyśmy mogli odpowiednio przygotować miejsce dla wszystkich gości."
    },
    {
      question: "Jak dojechać na miejsce ceremonii?",
      answer: "Kościół św. Dominika znajduje się w centrum Warszawy przy ul. Dominikańskiej 2. W pobliżu znajduje się parking dla gości, a także przystanki komunikacji miejskiej. Szczegółową mapę dojazdu znajdziecie w sekcji 'Data i miejsce'."
    },
    {
      question: "Czy na weselu będzie fotograf?",
      answer: "Tak, całe wydarzenie będzie uwiecznione przez profesjonalnego fotografa. Po weselu udostępnimy wszystkim gościom galerię zdjęć."
    },
    {
      question: "Czy jest dress code?",
      answer: "Prosimy o elegancki strój wieczorowy. Panie prosimy o unikanie białych sukienek, a panów o garnitury."
    },
    {
      question: "Czy dzieci są mile widziane?",
      answer: "Tak, dzieci są mile widziane na naszym weselu. Przygotowaliśmy dla nich specjalną strefę z animacjami i opiekunką."
    },
    {
      question: "Gdzie można przenocować?",
      answer: "Dla naszych gości przygotowaliśmy preferencyjne ceny w pobliskim hotelu. Szczegóły znajdziecie w sekcji 'Nocleg'."
    },
    {
      question: "Do kiedy należy potwierdzić obecność?",
      answer: "Prosimy o potwierdzenie obecności najpóźniej do 12.11.2025 poprzez formularz RSVP dostępny na stronie."
    },
    {
      question: "Czy będzie transport między kościołem a salą weselną?",
      answer: "Tak, zorganizowaliśmy transport dla gości między kościołem a salą weselną. Autokar będzie czekał przed kościołem po zakończeniu ceremonii."
    }
  ];

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[var(--background-color)]" id="faq">
      <div className="container mx-auto px-12 md:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">FAQ</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Odpowiedzi na najczęściej zadawane pytania. Jeśli nie znaleźliście odpowiedzi na swoje pytanie, skontaktujcie się z nami!
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}