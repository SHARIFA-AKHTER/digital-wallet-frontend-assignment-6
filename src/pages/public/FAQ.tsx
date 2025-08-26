import { useEffect, useState } from "react";
import axios from "axios";

interface IFaq {
  _id: string;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [faqs, setFaqs] = useState<IFaq[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/faq");
        setFaqs(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchFAQs();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">FAQs</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={faq._id} className="border rounded p-4 cursor-pointer">
            <h2
              onClick={() => toggleFAQ(index)}
              className="text-lg font-semibold flex justify-between items-center"
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </h2>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
