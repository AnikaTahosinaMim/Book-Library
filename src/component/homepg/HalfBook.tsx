import { Book } from "@/types/book";
import Image from "next/image";
import Link from "next/link";

const HalfBook = async () => {
  const res = await fetch("http://localhost:5000/books", {
    cache: "no-store",
  });

  const books: Book[] = await res.json();

  return (
    <section
      className="py-16 px-4"
      style={{
        background:
          "radial-gradient(120% 120% at 20% 0%, #3a2f22 0%, #201b15 55%, #14110d 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {books.slice(0, 4).map((book) => (
            <div
              key={book._id}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-4 pt-16 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.07] hover:border-[#d9a441]/40"
            >
              {/* Floating tilted cover */}
              <div className="absolute -top-10 left-1/2 h-32 w-24 -translate-x-1/2 [perspective:800px]">
                <div className="relative h-full w-full overflow-hidden rounded-lg shadow-[0_15px_25px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:[transform:rotateY(-8deg)_rotateX(4deg)_scale(1.08)]">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Body */}
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#d9a441]/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#d9a441]">
                  {book.category}
                </span>
                <span className="text-xs font-semibold text-white/50">
                  ⭐ {book.rating}
                </span>
              </div>

              <h2 className="mt-3 line-clamp-2 text-sm font-semibold leading-snug text-white">
                {book.title}
              </h2>
              <p className="mt-1 text-xs text-white/40">{book.author}</p>

              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                <div>
                  <p className="text-base font-bold text-[#d9a441]">
                    ৳ {book.price}
                  </p>
                  <p className="text-[11px] text-white/30">
                    {book.stock} available
                  </p>
                </div>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition hover:scale-110 hover:bg-[#d9a441]">
                  <Link href={`/books/${book._id}`}>→</Link>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-14">
          <Link
            href="/books"
            className="px-8 py-3 rounded-full bg-[#d9a441] text-black font-semibold hover:bg-[#c8943a] transition"
          >
            View All Books
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HalfBook;
