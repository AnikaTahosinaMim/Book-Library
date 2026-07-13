import { Book } from "@/types/book";
import Image from "next/image";
import Link from "next/link";

type Props = {
  book: Book;
};

const BookCard = ({ book }: Props) => {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-4 pt-16 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.07] hover:border-[#d9a441]/40">
      {/* Floating Book Cover */}
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

      {/* Top */}
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-[#d9a441]/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#d9a441]">
          {book.category}
        </span>

        <span className="text-xs font-semibold text-white/50">
          ⭐ {book.rating}
        </span>
      </div>

      {/* Title */}
      <h2 className="mt-3 line-clamp-2 text-sm font-semibold leading-snug text-white">
        {book.title}
      </h2>

      <p className="mt-1 text-xs text-white/40">{book.author}</p>

      {/* Bottom */}
      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
        <div>
          <p className="text-base font-bold text-[#d9a441]">
            ৳ {book.price}
          </p>

          <p className="text-[11px] text-white/30">
            {book.stock} available
          </p>
        </div>

        <Link
          href={`/books/${book._id}`}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition hover:scale-110 hover:bg-[#d9a441]"
        >
          →
        </Link>
      </div>
    </div>
  );
};

export default BookCard;