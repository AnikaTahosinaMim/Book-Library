"use client";

import { Book } from "@/types/book";
import Swal from "sweetalert2";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

type Props = {
  book: Book;
};

const UpdateBookForm = ({ book }: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    const { data: token, error } = await authClient.token();
    console.log(token?.token, "or", error);
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement & {
      title: { value: string };
      author: { value: string };
      image: { value: string };
      category: { value: string };
      publishedYear: { value: string };
      price: { value: string };
      quantity: { value: string };
      rating: { value: string };
      description: { value: string };
    };

    const updatedBook = {
      title: form.title.value,
      author: form.author.value,
      image: form.image.value,
      category: form.category.value,
      publishedYear: Number(form.publishedYear.value),
      price: Number(form.price.value),
      rating: Number(form.rating.value),
      quantity: Number(form.quantity.value),
      description: form.description.value,
    };

    console.log("Sending update:", book._id, updatedBook);

    try {
      const res = await fetch(`http://localhost:5000/books/${book._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token?.token}`,
        },
        body: JSON.stringify(updatedBook),
      });

      console.log("Response status:", res.status);

      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`);
      }

      const data = await res.json();
      console.log("Response data:", data);

      if (data.modifiedCount > 0) {
        console.log("Redirecting...");
        router.push("/");

        Swal.fire({
          icon: "success",
          title: "Book Updated Successfully",
          background: "#201b15",
          color: "#ffffff",
        });
      } else {
        Swal.fire({
          icon: "info",
          title: "No changes detected",
          text: "The data was the same as before, or the book was not found.",
          background: "#201b15",
          color: "#ffffff",
        });
      }
    } catch (error) {
      console.error("Update failed:", error);
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "Could not connect to the server. Check console for details.",
        background: "#201b15",
        color: "#ffffff",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleUpdate}
      className="grid gap-4 sm:gap-6 md:grid-cols-2"
    >
      {/* Book Title */}
      <div>
        <label className="mb-2 block text-sm font-medium text-white/80">
          Book Title
        </label>
        <input
          type="text"
          name="title"
          defaultValue={book.title}
          placeholder="Enter book title"
          className="w-full rounded-xl border border-white/10 bg-[#14110d] px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#d9a441] sm:px-4 sm:py-3 sm:text-base"
        />
      </div>

      {/* Author */}
      <div>
        <label className="mb-2 block text-sm font-medium text-white/80">
          Author
        </label>
        <input
          type="text"
          name="author"
          defaultValue={book.author}
          placeholder="Author name"
          className="w-full rounded-xl border border-white/10 bg-[#14110d] px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#d9a441] sm:px-4 sm:py-3 sm:text-base"
        />
      </div>

      {/* Category */}
      <div>
        <label className="mb-2 block text-sm font-medium text-white/80">
          Category
        </label>
        <select
          name="category"
          defaultValue={book.category}
          className="w-full rounded-xl border border-white/10 bg-[#14110d] px-3 py-2.5 text-sm text-white outline-none transition focus:border-[#d9a441] sm:px-4 sm:py-3 sm:text-base"
        >
          <option value="" className="bg-[#201b15]">
            Select Category
          </option>
          <option value="Programming" className="bg-[#201b15]">
            Programming
          </option>
          <option value="Novel" className="bg-[#201b15]">
            Novel
          </option>
          <option value="Science Fiction" className="bg-[#201b15]">
            Science Fiction
          </option>
          <option value="History" className="bg-[#201b15]">
            History
          </option>
          <option value="Biography" className="bg-[#201b15]">
            Biography
          </option>
        </select>
      </div>

      {/* Published Year */}
      <div>
        <label className="mb-2 block text-sm font-medium text-white/80">
          Published Year
        </label>
        <input
          name="publishedYear"
          defaultValue={book.publishedYear}
          type="number"
          placeholder="2025"
          className="w-full rounded-xl border border-white/10 bg-[#14110d] px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#d9a441] sm:px-4 sm:py-3 sm:text-base"
        />
      </div>

      {/* Price */}
      <div>
        <label className="mb-2 block text-sm font-medium text-white/80">
          Price ($)
        </label>
        <input
          name="price"
          defaultValue={book.price}
          type="number"
          placeholder="25"
          className="w-full rounded-xl border border-white/10 bg-[#14110d] px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#d9a441] sm:px-4 sm:py-3 sm:text-base"
        />
      </div>

      {/* Quantity */}
      <div>
        <label className="mb-2 block text-sm font-medium text-white/80">
          Quantity
        </label>
        <input
          name="quantity"
          // defaultValue={book.quantity}
          type="number"
          placeholder="10"
          className="w-full rounded-xl border border-white/10 bg-[#14110d] px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#d9a441] sm:px-4 sm:py-3 sm:text-base"
        />
      </div>

      {/* Rating */}
      <div>
        <label className="mb-2 block text-sm font-medium text-white/80">
          Rating
        </label>
        <input
          name="rating"
          defaultValue={book.rating}
          type="number"
          step="0.1"
          placeholder="4.8"
          className="w-full rounded-xl border border-white/10 bg-[#14110d] px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#d9a441] sm:px-4 sm:py-3 sm:text-base"
        />
      </div>

      {/* Image URL */}
      <div>
        <label className="mb-2 block text-sm font-medium text-white/80">
          Image URL
        </label>
        <input
          name="image"
          defaultValue={book.image}
          type="url"
          placeholder="https://example.com/book.jpg"
          className="w-full rounded-xl border border-white/10 bg-[#14110d] px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#d9a441] sm:px-4 sm:py-3 sm:text-base"
        />
      </div>

      {/* Description */}
      <div className="md:col-span-2">
        <label className="mb-2 block text-sm font-medium text-white/80">
          Description
        </label>
        <textarea
          name="description"
          defaultValue={book.description}
          rows={5}
          placeholder="Write a short description about the book..."
          className="w-full rounded-xl border border-white/10 bg-[#14110d] px-3 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-[#d9a441] sm:px-4 sm:py-3 sm:text-base"
        ></textarea>
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-[#d9a441] py-3 text-base font-semibold text-black transition hover:bg-[#c8943a] disabled:opacity-50 disabled:cursor-not-allowed sm:py-4 sm:text-lg"
        >
          {loading ? "Updating..." : "Update Book"}
        </button>
      </div>
    </form>
  );
};

export default UpdateBookForm;
