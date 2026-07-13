import Link from "next/link";
import { BookOpen, Home, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1d1b18] px-4 py-10">
      {/* ambient glow background, matches the dark glass aesthetic */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#d9a441]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#d9a441]/10 blur-[120px]" />

      <div className="relative w-full max-w-lg rounded-[28px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] md:p-14">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9a441]/15">
            <BookOpen size={18} className="text-[#d9a441]" />
          </div>
          <span className="text-lg font-semibold tracking-wide text-white">
            Booknest
          </span>
        </div>

        {/* 404 */}
        <h1 className="text-7xl font-black text-[#d9a441] drop-shadow-[0_0_30px_#d9a44166] md:text-8xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mx-auto mt-3 max-w-sm text-sm text-white/40">
          Looks like this page wandered off the shelf. The book you re
          looking for doesn t exist or may have been moved.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-full bg-[#d9a441] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_20px_#d9a44166] transition hover:brightness-105"
          >
            <Home size={16} />
            Back to Home
          </Link>

          <Link
            href="/books"
            className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-[#d9a441]/40 hover:text-[#d9a441]"
          >
            <Search size={16} />
            Browse Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;