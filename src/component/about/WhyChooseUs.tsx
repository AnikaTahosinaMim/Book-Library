import {
  BookOpen,
  BadgeCheck,
  Sparkles,
  Users,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Curated Collection",
    description:
      "Every book is carefully selected to ensure quality and value for our readers.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Quality",
    description:
      "We offer authentic books from trusted publishers and authors worldwide.",
  },
  {
    icon: Sparkles,
    title: "Modern Experience",
    description:
      "Enjoy a clean, fast and responsive reading experience across every device.",
  },
  {
    icon: Users,
    title: "Reader Community",
    description:
      "Join thousands of passionate readers discovering new books every day.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        background:
          "radial-gradient(120% 120% at 20% 0%, #3a2f22 0%, #201b15 55%, #14110d 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_80%_10%,#d9a44133,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-[#d9a441]/15 border border-[#d9a441]/20 px-4 py-2 text-sm font-semibold text-[#d9a441]">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Built For Every
            <span className="text-[#d9a441]"> Book Lover</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/50">
            More than just a bookstore we are a place where knowledge,
            inspiration, and stories come together.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:bg-white/[0.08] hover:border-[#d9a441]/40"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d9a441]/15 text-[#d9a441] transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#d9a441] group-hover:text-black">
                  <Icon size={32} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-white/40">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;