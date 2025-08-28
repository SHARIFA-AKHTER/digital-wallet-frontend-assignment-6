// import { useEffect, useState } from "react";
// import axios from "axios";

// interface IFaq {
//   _id: string;
//   question: string;
//   answer: string;
// }

// const FAQ = () => {
//   const [faqs, setFaqs] = useState<IFaq[]>([]);
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   useEffect(() => {
//     const fetchFAQs = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/v1/faq");
//         setFaqs(res.data.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchFAQs();
//   }, []);

//   const toggleFAQ = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="max-w-3xl mx-auto px-4 py-12">
//       <h1 className="text-3xl font-bold mb-6 text-center">FAQs</h1>
//       <div className="space-y-4">
//         {faqs.map((faq, index) => (
//           <div key={faq._id} className="border rounded p-4 cursor-pointer">
//             <h2
//               onClick={() => toggleFAQ(index)}
//               className="text-lg font-semibold flex justify-between items-center"
//             >
//               {faq.question}
//               <span>{openIndex === index ? "−" : "+"}</span>
//             </h2>
//             {openIndex === index && (
//               <p className="mt-2 text-gray-600">{faq.answer}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FAQ;


import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center text-indigo-600">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq._id}
            className="border rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
            layout
          >
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center p-5 bg-indigo-50 dark:bg-gray-800"
            >
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">
                {faq.question}
              </h2>
              <span className="text-2xl font-bold text-indigo-600">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
