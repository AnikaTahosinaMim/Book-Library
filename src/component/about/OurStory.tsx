import Image from "next/image";
import { BookOpen, ShieldCheck, Truck } from "lucide-react";

const OurStory = () => {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        background:
          "radial-gradient(120% 120% at 20% 0%, #3a2f22 0%, #201b15 55%, #14110d 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_80%_10%,#d9a44133,transparent_60%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Image */}
        <div className="relative">
          <div className="absolute -left-6 -top-6 h-44 w-44 rounded-full bg-[#d9a441] blur-3xl opacity-20"></div>

          <Image
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
            alt="Library"
            width={700}
            height={700}
            className="relative rounded-[35px] object-cover shadow-2xl border border-white/10"
          />
        </div>

        {/* Content */}
        <div>

          <span className="rounded-full bg-[#d9a441]/15 border border-[#d9a441]/20 px-4 py-2 text-sm font-semibold text-[#d9a441]">
            Our Story
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white lg:text-5xl">
            A Place Where Every
            <span className="block text-[#d9a441]">
              Reader Finds Home.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/50">
            At <span className="font-semibold text-white/80">BookVerse</span>,
            we believe books are more than pages—they are experiences,
            inspiration, and lifelong companions.
          </p>

          <p className="mt-4 text-lg leading-8 text-white/50">
            From programming and business to history and self-development,
            our mission is to help readers discover books that educate,
            inspire, and transform lives.
          </p>

          {/* Features */}

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 transition hover:border-[#d9a441]/40 hover:bg-white/[0.07]">
              <BookOpen className="text-[#d9a441]" size={30} />
              <div>
                <h3 className="font-bold text-white">Curated Collection</h3>
                <p className="text-sm text-white/40">
                  Handpicked books from trusted publishers.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 transition hover:border-[#d9a441]/40 hover:bg-white/[0.07]">
              <ShieldCheck className="text-[#d9a441]" size={30} />
              <div>
                <h3 className="font-bold text-white">Trusted Quality</h3>
                <p className="text-sm text-white/40">
                  Every book is carefully selected for readers.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 transition hover:border-[#d9a441]/40 hover:bg-white/[0.07]">
              <Truck className="text-[#d9a441]" size={30} />
              <div>
                <h3 className="font-bold text-white">Fast Delivery</h3>
                <p className="text-sm text-white/40">
                  Quick and reliable delivery to your doorstep.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;