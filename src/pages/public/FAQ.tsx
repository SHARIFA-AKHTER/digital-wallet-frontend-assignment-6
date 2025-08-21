// src/pages/public/FAQ.tsx
import Card from "@/components/ui/Card";
import { useState } from "react";


const faqs = [
  { question: "How do I create an account?", answer: "Click on 'Register' and fill in your details to create an account." },
  { question: "Is my money safe?", answer: "Yes, we use bank-grade encryption and multi-factor authentication." },
  { question: "Can I transfer money to other wallets?", answer: "Absolutely! You can send and receive money instantly to other users." },
  { question: "What if I forget my password?", answer: "Use the 'Forgot Password' feature to reset your password via email." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <Card
            key={idx}
            className="p-4 sm:p-6 hover:shadow-lg transition cursor-pointer"
            onClick={() => toggle(idx)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg sm:text-xl font-semibold">{faq.question}</h2>
              <span className="text-blue-600 text-2xl">{openIndex === idx ? "-" : "+"}</span>
            </div>
            {openIndex === idx && <p className="mt-2 text-gray-700 text-sm sm:text-base">{faq.answer}</p>}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
