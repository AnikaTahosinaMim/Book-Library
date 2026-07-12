import { Book } from "@/types/book";
import Image from "next/image";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

const BooksDetailsPage = async ({ params }: PageProps) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/books/${id}`, {
    cache: "no-store",
  });

//   if (!res.ok) {
//     throw new Error("Failed to fetch book");
//   }

  const book: Book = await res.json();

  return (
    <section
      className="min-h-screen py-24"
      style={{
        background:
          "radial-gradient(120% 120% at 20% 0%, #3a2f22 0%, #201b15 55%, #14110d 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Side */}
          <div className="flex justify-center">
            <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-2xl">
              <Image
                src={book.image}
                alt={book.title}
                width={420}
                height={620}
                className="rounded-[24px] object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Side */}
          <div>
            {/* Category + Rating */}
            <div className="flex items-center gap-4">
              <span className="rounded-full border border-[#d9a441]/30 bg-[#d9a441]/10 px-4 py-2 text-sm font-semibold text-[#d9a441]">
                {book.category}
              </span>

              <span className="font-semibold text-[#d9a441]">
                ⭐ {book.rating}
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-6 text-5xl font-black leading-tight text-white">
              {book.title}
            </h1>

            {/* Author */}
            <p className="mt-4 text-2xl text-white/60">By {book.author}</p>

            {/* Description */}
            <p className="mt-8 leading-8 text-white/50">{book.description}</p>

            {/* Information */}
            <div className="mt-10 grid grid-cols-2 gap-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-sm text-white/40">Price</p>
                <h3 className="mt-2 text-3xl font-bold text-[#d9a441]">
                  ৳ {book.price}
                </h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-sm text-white/40">Stock</p>
                <h3 className="mt-2 text-3xl font-bold text-white">
                  {book.stock}
                </h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-sm text-white/40">Language</p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  {book.language}
                </h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-sm text-white/40">Published</p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  {book.publishedYear}
                </h3>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">
              <button className="rounded-xl bg-[#d9a441] px-8 py-4 font-bold text-[#14110d] transition hover:bg-[#c9972f]">
                Buy Now
              </button>

              <button className="rounded-xl border border-white/10 px-8 py-4 font-semibold text-white transition hover:border-[#d9a441] hover:text-[#d9a441]">
                Add Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksDetailsPage;
