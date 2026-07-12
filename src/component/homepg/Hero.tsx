import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="featured"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 120% at 20% 0%, #3a2f22 0%, #201b15 55%, #14110d 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_80%_10%,#d9a44133,transparent_60%)]" />

      <div className="relative mx-auto flex min-h-[65vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-16 lg:flex-row">
        {/* Left Side */}

        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full bg-[#d9a441]/15 px-4 py-2 text-sm font-medium text-[#d9a441] border border-[#d9a441]/20">
            📚 Welcome to BookNest
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
            Discover Your
            <span className="block text-[#d9a441]">Next Favorite Book</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/50">
            Explore thousands of books from bestselling authors. Read, discover
            and enjoy your next adventure with BookNest.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/books"
              className="flex items-center gap-2 rounded-xl bg-[#d9a441] px-6 py-3 font-semibold text-black transition hover:bg-[#c8943a]"
            >
              Explore Books
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/categories"
              className="rounded-xl border border-[#d9a441]/40 px-6 py-3 font-semibold text-[#d9a441] transition hover:bg-[#d9a441] hover:text-black"
            >
              Browse Categories
            </Link>
          </div>

          {/* Stats */}

          <div className="mt-14 grid grid-cols-3 gap-6">
            <div>
              <BookOpen className="mb-2 text-[#d9a441]" size={28} />

              <h2 className="text-3xl font-bold text-white">12K+</h2>

              <p className="text-white/40">Books</p>
            </div>

            <div>
              <Users className="mb-2 text-[#d9a441]" size={28} />

              <h2 className="text-3xl font-bold text-white">50K+</h2>

              <p className="text-white/40">Readers</p>
            </div>

            <div>
              <Star className="mb-2 text-[#d9a441]" size={28} />

              <h2 className="text-3xl font-bold text-white">4.9</h2>

              <p className="text-white/40">Rating</p>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-[#d9a441]/10 blur-2xl" />
          <Image
            src="/hero-book.jpg"
            alt="Book Collection"
            width={550}
            height={650}
            priority
            className="relative rounded-3xl shadow-2xl border border-white/10"
          />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#featured">
          <div className="h-12 w-7 rounded-full border-2 border-[#d9a441] flex justify-center">
            <div className="mt-2 h-3 w-1 rounded-full bg-[#d9a441] animate-pulse"></div>
          </div>
        </a>
      </div>
    </section>
  );
}