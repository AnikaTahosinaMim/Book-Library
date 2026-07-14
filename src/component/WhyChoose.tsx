"use client";

import { BookOpen, Search, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: BookOpen,
    title: "Extensive Book Collection",
    description:
      "Explore a growing collection of books across multiple genres and categories.",
  },
  {
    icon: Search,
    title: "Smart Search",
    description:
      "Find your favorite books instantly using search and category filters.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Management",
    description:
      "Manage your books safely with protected routes and secure authentication.",
  },
  {
    icon: Zap,
    title: "Fast Experience",
    description:
      "Built with Next.js for lightning-fast performance and smooth navigation.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#14110d] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#d9a441] uppercase tracking-[4px] text-sm">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            A Better Way to Manage
            <span className="text-[#d9a441]"> Your Books</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Our platform makes discovering, organizing, and managing books
            effortless with a modern interface and powerful features.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-[#2c2418] bg-[#1b1712] p-8 transition-all duration-300 hover:border-[#d9a441] hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#d9a441]/10 flex items-center justify-center mb-6 group-hover:bg-[#d9a441] transition">
                  <Icon className="w-8 h-8 text-[#d9a441] group-hover:text-black transition" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;