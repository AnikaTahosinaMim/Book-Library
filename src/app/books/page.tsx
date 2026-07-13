import { Book } from "@/types/book";
import { Home, Layers, List, Heart, Search, Settings } from "lucide-react";
import BookContainer from "./BookContainer";

const AllBooksPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/books`, {
    cache: "no-store",
  });

  const data = await res.json();
  const books: Book[] = Array.isArray(data) ? data : (data.books ?? []);

  return (
    <section
      className="relative min-h-screen py-10 px-4"
      style={{
        background:
          "radial-gradient(120% 120% at 20% 0%, #3a2f22 0%, #201b15 55%, #14110d 100%)",
      }}
    >
      {/* ambient wood-tone glow, echoes the reference room photo */}
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_80%_10%,#d9a44133,transparent_60%)]" />
      <BookContainer books={books}></BookContainer>
    </section>
  );
};

export default AllBooksPage;
