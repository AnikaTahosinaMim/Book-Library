import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Book } from "@/types/book";
import BookCard from "@/component/Bookcard";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

const CategoryBooks = async ({ params }: Props) => {
  const { category } = await params;

  const res = await fetch(
    `http://localhost:5000/books?category=${category}&limit=100`,
    {
      cache: "no-store",
    },
  );

  const data = await res.json();

  const books: Book[] = data.books || [];

  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <section
      className="min-h-screen py-16"
      style={{
        background:
          "radial-gradient(120% 120% at 20% 0%, #3a2f22 0%, #201b15 55%, #14110d 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5">
        {/* Back Button */}
        <Link
          href="/categories"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-white transition hover:border-[#d9a441] hover:text-[#d9a441]"
        >
          <ArrowLeft size={18} />
          Back to Categories
        </Link>

        {/* Header */}
        <div className="mt-10 text-center">
          <p className="text-[#d9a441] uppercase tracking-[5px] font-semibold">
            Category
          </p>

          <h1 className="mt-3 text-5xl font-black text-white">
            {categoryTitle} Books
          </h1>

          <p className="mt-4 text-white/50 text-lg">
            {books.length} Books Found
          </p>
        </div>

        {/* No Books */}
        {books.length === 0 ? (
          <div className="mt-20 flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 py-20">
            <h2 className="text-3xl font-bold text-white">No Books Found</h2>

            <p className="mt-3 text-white/50">
              There are currently no books in this category.
            </p>

            <Link
              href="/books"
              className="mt-8 rounded-full bg-[#d9a441] px-8 py-3 font-semibold text-black transition hover:scale-105"
            >
              Browse All Books
            </Link>
          </div>
        ) : (
          <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {books.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryBooks;
