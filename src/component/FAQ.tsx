"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How can I add a new book?",
    answer:
      "Simply sign in to your account, go to the Add Book page, fill in the required information, and submit the form.",
  },
  {
    question: "Can I edit or delete my books?",
    answer:
      "Yes. From the Manage Books page, you can easily update or remove any book you've added.",
  },
  {
    question: "Do I need an account to browse books?",
    answer:
      "No. Anyone can browse and search books. However, adding or managing books requires a logged-in account.",
  },
  {
    question: "How do I search for a specific book?",
    answer:
      "Use the search bar and category filters on the Books page to quickly find the book you're looking for.",
  },
  {
    question: "Is this platform mobile-friendly?",
    answer:
      "Yes. The website is fully responsive and works smoothly on desktop, tablet, and mobile devices.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#1a1611] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-[#d9a441] uppercase tracking-[4px] text-sm">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-4">
            Find quick answers to the most common questions about our library.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#2c2418] bg-[#14110d] overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="text-white text-lg font-semibold">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`text-[#d9a441] transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6 text-gray-400 leading-7">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}