import Link from "next/link";
import { Book } from "@/types/book";

type CategoryStyle = { icon: string; color: string };

const categoryStyle: Record<string, CategoryStyle> = {
  Programming: { icon: "💻", color: "from-blue-500 to-cyan-500" },
  Technology: { icon: "🚀", color: "from-violet-500 to-indigo-500" },
  Finance: { icon: "💰", color: "from-emerald-500 to-green-500" },
  Business: { icon: "💼", color: "from-orange-500 to-red-500" },
  "Self Help": { icon: "🧠", color: "from-pink-500 to-rose-500" },
  Biography: { icon: "👤", color: "from-purple-500 to-fuchsia-500" },
  History: { icon: "🏛️", color: "from-amber-500 to-yellow-500" },
  Science: { icon: "🧪", color: "from-sky-500 to-blue-500" },
  Religion: { icon: "🕌", color: "from-teal-500 to-cyan-500" },
  Romance: { icon: "❤️", color: "from-rose-500 to-pink-500" },
  Fantasy: { icon: "🧙", color: "from-violet-500 to-purple-500" },
  Mystery: { icon: "🔍", color: "from-gray-600 to-gray-800" },
};

const CategoryPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/books`, {
    cache: "no-store",
  });

  const data = await res.json();
  const books: Book[] = Array.isArray(data) ? data : (data.books ?? []);

  const categories = [...new Set(books.map((book) => book.category))];

  return (
    <section
      className="min-h-screen py-20"
      style={{
        background:
          "radial-gradient(120% 120% at 20% 0%, #3a2f22 0%, #201b15 55%, #14110d 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-16 text-center">
          <p className="text-[#d9a441] font-semibold uppercase tracking-[5px]">
            Categories
          </p>
          <h1 className="mt-3 text-5xl font-black text-white">
            Browse by Category
          </h1>
          <p className="mt-5 text-white/40">
            Explore books from your favorite category.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => {
            const style = categoryStyle[category] || {
              icon: "📚",
              color: "from-slate-500 to-slate-700",
            };

            const totalBooks = books.filter(
              (book) => book.category === category,
            ).length;

            return (
              <Link
                key={category}
                href={`/categories/${category.toLowerCase()}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:bg-white/[0.07] hover:border-[#d9a441]/40">
                  <div
                    className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-r ${style.color} opacity-25 blur-3xl`}
                  />

                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r ${style.color} text-4xl shadow-lg transition duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    {style.icon}
                  </div>

                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-white">
                      {category}
                    </h2>
                    <p className="mt-2 text-white/40">
                      {totalBooks} Books Available
                    </p>
                    <button className="mt-8 rounded-full bg-white px-6 py-3 text-black font-semibold transition group-hover:bg-[#d9a441]">
                      Explore →
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
