"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "5 Books Every Developer Should Read",
    date: "July 2026",
    description:
      "Discover timeless books that improve problem-solving, creativity, and software engineering skills.",
  },
  {
    title: "Why Reading Every Day Matters",
    date: "June 2026",
    description:
      "Reading just 20 minutes a day can improve focus, vocabulary, and critical thinking over time.",
  },
  {
    title: "How to Build a Personal Library",
    date: "May 2026",
    description:
      "Learn practical tips for organizing your favorite books and creating a reading habit you'll love.",
  },
];

const ReadingTips = () => {
  return (
    <section className="bg-[#1a1611] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <span className="uppercase tracking-[4px] text-[#d9a441] text-sm">
            Reading Corner
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Latest Reading Tips
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Stay inspired with helpful reading guides, book recommendations,
            and useful articles from our library.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[#2c2418] bg-[#14110d] overflow-hidden hover:border-[#d9a441] transition-all duration-300"
            >
              <div className="h-52 bg-gradient-to-br from-[#d9a441]/30 to-[#14110d] flex items-center justify-center">
                <h3 className="text-6xl">📚</h3>
              </div>

              <div className="p-8">
                <p className="text-[#d9a441] text-sm mb-3">
                  {blog.date}
                </p>

                <h3 className="text-white text-2xl font-semibold mb-4">
                  {blog.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-8">
                  {blog.description}
                </p>

                <button className="flex items-center gap-2 text-[#d9a441] font-semibold hover:gap-3 transition-all">
                  Read More
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReadingTips;