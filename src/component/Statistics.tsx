"use client";

import CountUp from "react-countup";
import { BookOpen, FolderOpen, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: BookOpen,
    value: 1200,
    suffix: "+",
    title: "Books Available",
  },
  {
    icon: FolderOpen,
    value: 25,
    suffix: "+",
    title: "Categories",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    title: "Happy Readers",
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "/5",
    decimals: 1,
    title: "Average Rating",
  },
];

const Statistics = () => {
  return (
    <section className="bg-[#1a1611] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#d9a441] uppercase tracking-[4px] text-sm">
            Our Impact
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Library <span className="text-[#d9a441]">Statistics</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Numbers that reflect our growing collection and the trust of our
            readers.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-[#2c2418] bg-[#14110d] p-8 text-center hover:border-[#d9a441] transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[#d9a441]/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-[#d9a441]" />
                </div>

                <h3 className="text-4xl font-bold text-white">
                  <CountUp
                    end={item.value}
                    duration={3}
                    decimals={item.decimals || 0}
                  />
                  {item.suffix}
                </h3>

                <p className="mt-3 text-gray-400">{item.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;