"use client";

import { BookOpen } from "lucide-react";

const Loading = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1d1b18] px-4">
      {/* ambient glow background, matches the dark glass aesthetic */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#d9a441]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#d9a441]/10 blur-[120px]" />

      <div className="relative flex flex-col items-center gap-6">
        {/* Spinning ring with logo */}
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute h-full w-full animate-spin rounded-full border-2 border-[#d9a441]/15 border-t-[#d9a441]" />
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9a441]/15">
            <BookOpen size={18} className="text-[#d9a441]" />
          </div>
        </div>

        <div className="text-center">
          <span className="text-lg font-semibold tracking-wide text-white">
            Booknest
          </span>
          <p className="mt-1 text-sm text-white/40">Loading, please wait...</p>
        </div>

        {/* Bouncing dots */}
        <div className="flex gap-1.5">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#d9a441] [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#d9a441] [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#d9a441]" />
        </div>
      </div>
    </div>
  );
};

export default Loading;