import Link from "next/link";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 120% at 20% 0%, #3a2f22 0%, #201b15 55%, #14110d 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_80%_10%,#d9a44133,transparent_60%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-16 px-6 py-24 lg:flex-row">

        {/* Left */}
        <div className="flex-1">

          <span className="rounded-full bg-[#d9a441]/15 border border-[#d9a441]/20 px-4 py-2 text-sm font-semibold text-[#d9a441]">
            📚 About BookVerse
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">
            Every Book
            <span className="block text-[#d9a441]">
              Opens A New World.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/50">
            We believe books inspire ideas, transform lives,
            and connect people with endless possibilities.
          </p>

          <div className="mt-10 flex gap-5">

            <Link
              href="/books"
              className="rounded-full bg-[#d9a441] px-7 py-4 font-semibold text-black transition hover:bg-[#c8943a]"
            >
              Explore Books
            </Link>

            <Link
              href="/categories"
              className="rounded-full border border-[#d9a441]/40 px-7 py-4 font-semibold text-[#d9a441] transition hover:bg-[#d9a441] hover:text-black"
            >
              Categories
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="flex-1 relative">
          <div className="absolute -inset-4 rounded-[40px] bg-[#d9a441]/10 blur-2xl" />
          <Image
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da"
            alt="Library"
            width={600}
            height={600}
            className="relative rounded-[40px] shadow-2xl border border-white/10"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutHero;