"use client";

import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="bg-[#14110d] py-24 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto rounded-3xl border border-[#d9a441]/20 bg-gradient-to-r from-[#1b1712] to-[#241d15] p-10 md:p-16 text-center"
      >
        <div className="w-20 h-20 rounded-full bg-[#d9a441]/10 flex items-center justify-center mx-auto mb-8">
          <Mail className="w-10 h-10 text-[#d9a441]" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Stay Updated
        </h2>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
          Subscribe to receive updates about new arrivals, trending books,
          exclusive collections, and exciting reading recommendations.
        </p>

        <form className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-[420px] rounded-xl border border-white/10 bg-[#14110d] px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-[#d9a441]"
          />

          <button
            type="submit"
            className="rounded-xl bg-[#d9a441] px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Newsletter;