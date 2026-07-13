"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useState } from "react";
import { toast,  } from "sonner";

const AddBooks = () => {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    category: "",
    publishedYear: "",
    price: "",
    quantity: "",
    rating: "",
    image: "",
    description: "",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data: token, error } = await authClient.token();
    console.log(token?.token, "or", error);

    const res = await fetch("http://localhost:5000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization:`Bearer ${token?.token}`
      },
      body: JSON.stringify(bookData),
    });

    const data = await res.json();

    console.log(data);
    if (data.insertedId) {
      toast.success("Book Updated Successfully");

      setBookData({
        title: "",
        author: "",
        category: "",
        publishedYear: "",
        price: "",
        quantity: "",
        rating: "",
        image: "",
        description: "",
      });
    }
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setBookData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <section className="min-h-screen bg-[#14110d] py-16 px-5">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-[#d9a441]">📚 Add New Book</h1>

          <p className="mt-3 text-white/60">
            Fill in the details below to add a new book to your collection.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-[#201b15] p-8 shadow-2xl md:p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white">
              Book Information
            </h2>

            <p className="mt-2 text-white/50">
              Complete all required fields before submitting.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {/* Left Side */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="grid gap-6 md:grid-cols-2"
              >
                {/* Book Title */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    Book Title
                  </label>

                  <input
                    type="text"
                    name="title"
                    value={bookData.title}
                    onChange={handleChange}
                    placeholder="Enter book title"
                    className="w-full rounded-xl border border-white/10 bg-[#14110d] px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[#d9a441]"
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
                    value={bookData.author}
                    onChange={handleChange}
                    placeholder="Author name"
                    className="w-full rounded-xl border border-white/10 bg-[#14110d] px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[#d9a441]"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    Category
                  </label>

                  <select
                    name="category"
                    value={bookData.category}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-[#14110d] px-4 py-3 text-white outline-none transition focus:border-[#d9a441]"
                  >
                    <option value="" className="bg-[#201b15]">
                      Select Category
                    </option>
                    <option value={"Programming"} className="bg-[#201b15]">
                      Programming
                    </option>
                    <option value={"Novel"} className="bg-[#201b15]">
                      Novel
                    </option>
                    <option value={"Science Fiction"} className="bg-[#201b15]">
                      Science Fiction
                    </option>
                    <option value={"History"} className="bg-[#201b15]">
                      History
                    </option>
                    <option value={"Biography"} className="bg-[#201b15]">
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
                    value={bookData.publishedYear}
                    onChange={handleChange}
                    type="number"
                    placeholder="2025"
                    className="w-full rounded-xl border border-white/10 bg-[#14110d] px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[#d9a441]"
                  />
                </div>

                {/* Price */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    Price ($)
                  </label>

                  <input
                    name="price"
                    value={bookData.price}
                    onChange={handleChange}
                    type="number"
                    placeholder="25"
                    className="w-full rounded-xl border border-white/10 bg-[#14110d] px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[#d9a441]"
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    Quantity
                  </label>

                  <input
                    name="quantity"
                    value={bookData.quantity}
                    onChange={handleChange}
                    type="number"
                    placeholder="10"
                    className="w-full rounded-xl border border-white/10 bg-[#14110d] px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[#d9a441]"
                  />
                </div>

                {/* Rating */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    Rating
                  </label>

                  <input
                    name="rating"
                    value={bookData.rating}
                    onChange={handleChange}
                    type="number"
                    placeholder="4.8"
                    className="w-full rounded-xl border border-white/10 bg-[#14110d] px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[#d9a441]"
                  />
                </div>

                {/* Image URL */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    Image URL
                  </label>

                  <input
                    name="image"
                    value={bookData.image}
                    onChange={handleChange}
                    type="url"
                    placeholder="https://example.com/book.jpg"
                    className="w-full rounded-xl border border-white/10 bg-[#14110d] px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[#d9a441]"
                  />
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    Description
                  </label>

                  <textarea
                    name="description"
                    value={bookData.description}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Write a short description about the book..."
                    className="w-full rounded-xl border border-white/10 bg-[#14110d] px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-[#d9a441]"
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#d9a441] py-4 text-lg font-semibold text-black transition hover:bg-[#c8943a]"
                  >
                    + Add Book
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side Preview */}
            <div>
              <div className="sticky top-28 rounded-2xl border border-white/10 bg-[#14110d] p-6">
                <h3 className="mb-5 text-xl font-semibold text-white">
                  📖 Book Cover Preview
                </h3>

                {bookData.image ? (
                  <Image
                    src={bookData.image}
                    width={"200"}
                    height={"200"}
                    alt="Book Cover"
                    className="h-[420px] w-full rounded-xl object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <div className="mb-4 text-7xl">📚</div>
                    <h4 className="font-semibold text-white">
                      No Cover Selected
                    </h4>
                    <p className="mt-2 text-sm text-white/40">
                      Paste an image URL to preview
                    </p>
                  </div>
                )}

                <div className="mt-6 rounded-xl bg-[#201b15] p-4">
                  <h4 className="mb-3 font-semibold text-[#d9a441]">Tips</h4>

                  <ul className="space-y-2 text-sm text-white/50">
                    <li>✔ JPG, PNG and WEBP supported</li>
                    <li>✔ Recommended cover ratio 2:3</li>
                    <li>✔ Use a high quality image</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddBooks;
