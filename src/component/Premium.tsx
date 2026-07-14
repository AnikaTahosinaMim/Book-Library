"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Book Enthusiast",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "This platform made discovering and organizing my favorite books incredibly easy. The interface is beautiful and very user-friendly.",
  },
  {
    name: "David Wilson",
    role: "Student",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "The search and category filters save so much time. I found every book I needed within seconds.",
  },
  {
    name: "Emily Johnson",
    role: "Regular Reader",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "A clean, modern library platform with an amazing reading experience. Highly recommended for every book lover.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#14110d] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#d9a441] uppercase tracking-[4px] text-sm">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            What Our <span className="text-[#d9a441]">Readers Say</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Hear from readers who love using our platform to discover and manage
            their favorite books.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((user, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-[#2c2418] bg-[#1b1712] p-8 hover:border-[#d9a441] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#d9a441]"
                />

                <div>
                  <h3 className="text-white text-lg font-semibold">
                    {user.name}
                  </h3>

                  <p className="text-gray-400 text-sm">{user.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#d9a441] text-[#d9a441]"
                  />
                ))}
              </div>

              <p className="text-gray-300 leading-7">
                {user.review}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;