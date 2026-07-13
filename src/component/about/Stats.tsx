import { Book } from "@/types/book";
import { BookOpen, FolderOpen, Star, Package } from "lucide-react";

const Stats = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/books`, {
    cache: "no-store",
  });

  const data = await res.json();
  const books: Book[] = Array.isArray(data) ? data : (data.books ?? []);

  const totalBooks = books.length;

  const totalCategories = new Set(books.map((book) => book.category)).size;

  const averageRating =
    books.reduce((sum, book) => sum + book.rating, 0) / books.length;

  const totalStock = books.reduce((sum, book) => sum + book.stock, 0);

  const stats = [
    {
      icon: BookOpen,
      title: "Books",
      value: totalBooks,
    },
    {
      icon: FolderOpen,
      title: "Categories",
      value: totalCategories,
    },
    {
      icon: Star,
      title: "Average Rating",
      value: averageRating.toFixed(1),
    },
    {
      icon: Package,
      title: "In Stock",
      value: totalStock,
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        background:
          "radial-gradient(120% 120% at 20% 0%, #3a2f22 0%, #201b15 55%, #14110d 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_80%_10%,#d9a44133,transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-black text-white">
            BookVerse in Numbers
          </h2>

          <p className="mt-5 text-white/40">
            Live statistics from our growing library.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:bg-white/[0.08] hover:border-[#d9a441]/40"
              >
                <Icon className="text-[#d9a441]" size={45} />

                <h2 className="mt-8 text-5xl font-black text-white">
                  {stat.value}
                </h2>

                <p className="mt-2 text-white/40">{stat.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
