import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section
      className="py-24"
      style={{
        background:
          "radial-gradient(120% 120% at 20% 0%, #3a2f22 0%, #201b15 55%, #14110d 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">

        <div
          className="relative overflow-hidden rounded-[40px] px-10 py-20 text-center shadow-2xl border border-white/10"
          style={{
            background:
              "linear-gradient(135deg, #d9a441 0%, #b8842f 50%, #201b15 100%)",
          }}
        >

          {/* Blur Effect */}
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl"></div>

          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-black/30 blur-3xl"></div>

          {/* Content */}

          <div className="relative z-10">

            <span className="rounded-full bg-black/20 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md border border-white/20">
              📚 Start Reading Today
            </span>

            <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-black leading-tight text-white lg:text-6xl">
              Your Next Favorite Book
              <span className="block">
                Is Waiting For You.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Explore our carefully selected collection of books
              across technology, finance, history, self-help,
              business and much more.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">

              <Link
                href="/books"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-8 py-4 font-semibold text-[#d9a441] transition hover:scale-105"
              >
                Browse Books
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/categories"
                className="rounded-full border border-white/40 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                View Categories
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;