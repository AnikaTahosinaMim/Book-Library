"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="bg-[#14110d] py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto rounded-3xl border border-[#d9a441]/20 bg-gradient-to-r from-[#1b1712] via-[#201910] to-[#2a2015] p-10 md:p-16"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <span className="uppercase tracking-[4px] text-[#d9a441] text-sm">
              Start Reading Today
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
              Discover Your Next
              <span className="text-[#d9a441]"> Favorite Book</span>
            </h2>

            <p className="mt-6 text-gray-400 leading-7">
              Browse hundreds of books, explore different categories,
              and manage your personal collection with ease.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/books"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#d9a441] px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              <BookOpen size={20} />
              Explore Books
            </Link>

            <Link
              href="/books/add"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#d9a441] px-8 py-4 font-semibold text-[#d9a441] transition hover:bg-[#d9a441] hover:text-black"
            >
              Add Book
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;