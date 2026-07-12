"use client";
import { Book } from "@/types/book";
import { LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Home, Layers, List, Heart, Search, Settings } from "lucide-react";

interface BookContainerProps {
  books: Book[];
}

const BookContainer = ({ books }: BookContainerProps) => {
  const navItems = [
    { icon: Home, active: true },
    { icon: Layers, active: false },
    { icon: List, active: false },
    { icon: Heart, active: false },
    { icon: Search, active: false },
    { icon: Settings, active: false },
  ];
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [allBooks, setAllBooks] = useState<Book[]>(books);
  useEffect(() => {
    const getBooks = async () => {
      const res = await fetch(
        `http://localhost:5000/books?search=${search}&category=${category}&price=${price}`,
      );

      const data = await res.json();

      setAllBooks(data);
    };

    getBooks();
  }, [search, category, price]);
  return (
    <div>
      <div className="relative mx-auto flex max-w-7xl gap-4">
        {/* Vertical icon rail */}
        <aside className="hidden md:flex flex-col items-center gap-3 rounded-[26px] border border-white/10 bg-white/5 px-3 py-6 backdrop-blur-2xl h-fit sticky top-10">
          {navItems.map(({ icon: Icon, active }, i) => (
            <button
              key={i}
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-all ${
                active
                  ? "bg-[#d9a441] text-black shadow-[0_0_20px_#d9a44166]"
                  : "text-white/50 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={18} />
            </button>
          ))}
        </aside>

        {/* Main glass panel */}
        <div className="flex-1  rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] p-6 md:p-8">
          {/* Header row */}
          {/* Search + Filter */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center ">
            {/* Search */}
            <div className="flex w-full md:w-80 items-center gap-2  rounded-full border border-white/10 bg-white/5 px-4 py-2.5">
              <Search size={16} className="text-white/40" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search books..."
                className="w-full bg-transparent text-sm text-white placeholder:text-white/30 outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="relative flex items-center">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="appearance-none rounded-full border  border-white/10 bg-white/5 px-5 py-2.5 pr-10 text-sm text-white outline-none backdrop-blur-xl transition hover:border-[#d9a441]/40"
              >
                <option className="bg-[#1d1b18]" value="">
                  All Categories
                </option>
                <option className="bg-[#1d1b18]" value="Programming">
                  Programming
                </option>
                <option className="bg-[#1d1b18]" value="Novel">
                  Novel
                </option>
                <option className="bg-[#1d1b18]" value="Science">
                  Science
                </option>
                <option className="bg-[#1d1b18]" value="History">
                  History
                </option>
              </select>

              <svg
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Price Filter */}
            <div className="relative">
              <select
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="appearance-none rounded-full  border border-white/10 bg-white/5 px-5 py-2.5 pr-10 text-sm text-white outline-none backdrop-blur-xl transition hover:border-[#d9a441]/40"
              >
                <option className="bg-[#1d1b18]" value="">
                  Price
                </option>
                <option className="bg-[#1d1b18]" value="low-high">
                  Low → High
                </option>
                <option className="bg-[#1d1b18]" value="high-low">
                  High → Low
                </option>
              </select>

              <svg
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Grid */}
          <div className="mt-15 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allBooks.map((book) => (
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
        </div>
      </div>
    </div>
  );
};

export default BookContainer;
