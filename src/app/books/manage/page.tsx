import ManageBook from "@/component/homepg/manage/ManageBook";
import { Book } from "@/types/book";
import Link from "next/link";
type Props = {
  data: Book[];
  totalPages: number;
};

const ManageBooks = async () => {
  const res = await fetch("http://localhost:5000/books");
  const data = await res.json();
  const books: Book[] = Array.isArray(data) ? data : (data.books ?? []);
  console.log(data);
  return (
    <section className="min-h-screen bg-[#14110d] px-5 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div>
            <h1 className="text-4xl font-bold text-[#d9a441]">
              📚 Manage Books
            </h1>

            <p className="mt-3 text-white/60">
              View, update and manage all books from your library.
            </p>
          </div>

          <Link href={"/books/add"}>
            <button className="rounded-xl bg-[#d9a441] px-6 py-3 font-semibold text-black transition hover:bg-[#c8943a]">
              + Add New Book
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[#201b15] p-6">
            <h4 className="text-white/50">Total Books</h4>

            <h2 className="mt-3 text-4xl font-bold text-[#d9a441]">12</h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#201b15] p-6">
            <h4 className="text-white/50">Categories</h4>

            <h2 className="mt-3 text-4xl font-bold text-[#d9a441]">5</h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#201b15] p-6">
            <h4 className="text-white/50">Available Books</h4>

            <h2 className="mt-3 text-4xl font-bold text-[#d9a441]">10</h2>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by title..."
            className="w-full rounded-xl border border-white/10 bg-[#201b15] px-5 py-4 text-white placeholder:text-white/30 outline-none transition focus:border-[#d9a441]"
          />
        </div>

        {/* Table Card */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#201b15] shadow-2xl">
          {/* Table Header */}
          <ManageBook data={data.books}></ManageBook>
        </div>
      </div>
    </section>
  );
};

export default ManageBooks;
