"use client";
import { Book } from "@/types/book";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2";

type Props = {
  data: Book[];
};

const ManageBook = ({ data }: Props) => {
  const [bookData, setBookData] = useState<Book[]>(data);

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This book will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
      background: "#201b15",
      color: "#ffffff",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(`http://localhost:5000/books/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.deletedCount > 0) {
        setBookData((prev) => prev.filter((book) => book._id !== id));

        Swal.fire({
          title: "Deleted!",
          text: "Book deleted successfully.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
          background: "#201b15",
          color: "#ffffff",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong.",
        icon: "error",
        background: "#201b15",
        color: "#ffffff",
      });

      console.error(error);
    }
  };

  return (
    <div
      className="rounded-2xl sm:rounded-[28px] overflow-hidden border border-white/10"
      style={{
        background:
          "radial-gradient(120% 120% at 20% 0%, #3a2f22 0%, #201b15 55%, #14110d 100%)",
      }}
    >
      {/* Desktop / tablet table header — hidden on mobile */}
      <div className="hidden md:grid grid-cols-12 border-b border-white/10 bg-[#18140f] px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white/60">
        <div className="col-span-2">Cover</div>
        <div className="col-span-3">Book</div>
        <div className="col-span-2">Author</div>
        <div className="col-span-2">Category</div>
        <div className="col-span-1 text-center">Price</div>
        <div className="col-span-2 text-center">Actions</div>
      </div>

      {bookData.map((book) => (
        <div key={book._id}>
          {/* Desktop / tablet row */}
          <div className="hidden md:grid grid-cols-12 items-center border-b border-white/10 px-6 py-5 transition hover:bg-white/5">
            <div className="col-span-2">
              <Image
                src={book.image}
                alt={book.title}
                width={100}
                height={100}
                className="h-24 w-16 rounded-lg object-cover border border-white/10"
              />
            </div>

            <div className="col-span-3">
              <h3 className="font-semibold text-white">{book.title}</h3>
              <p className="mt-1 text-sm text-white/40">
                Published: {book.publishedYear}
              </p>
            </div>

            <div className="col-span-2 text-white/70">{book.author}</div>

            <div className="col-span-2">
              <span className="rounded-full bg-[#d9a441]/10 px-4 py-2 text-sm text-[#d9a441]">
                {book.category}
              </span>
            </div>

            <div className="col-span-1 text-center font-semibold text-white">
              ${book.price}
            </div>

            <div className="col-span-2 flex justify-center gap-3">
              <Link href={`/books/manage/update/${book._id}`}>
                <button className="rounded-lg border border-[#d9a441]/30 bg-[#d9a441]/10 px-4 py-2 text-sm font-medium text-[#d9a441] transition hover:bg-[#d9a441] hover:text-black">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => handleDelete(book._id)}
                className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
              >
                Delete
              </button>
            </div>
          </div>

          {/* Mobile card — hidden on md+ */}
          <div className="md:hidden flex gap-3 border-b border-white/10 px-4 py-4">
            <Image
              src={book.image}
              alt={book.title}
              width={80}
              height={80}
              className="h-20 w-14 shrink-0 rounded-lg object-cover border border-white/10"
            />

            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-white text-sm truncate">
                {book.title}
              </h3>
              <p className="text-xs text-white/40">{book.author}</p>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#d9a441]/10 px-2.5 py-1 text-[11px] text-[#d9a441]">
                  {book.category}
                </span>
                <span className="text-xs font-semibold text-white">
                  ${book.price}
                </span>
              </div>

              <div className="mt-3 flex gap-2">
                <Link href={`/books/manage/update/${book._id}`}>
                  <button className="rounded-lg border border-[#d9a441]/30 bg-[#d9a441]/10 px-4 py-2 text-sm font-medium text-[#d9a441] transition hover:bg-[#d9a441] hover:text-black">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(book._id)}
                  className="flex-1 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageBook;
