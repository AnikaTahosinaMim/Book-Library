import { Book } from "@/types/book";
import UpdateBookForm from "./UpdateBookForm ";
// import UpdateBookForm from "./UpdateBookForm";

const UpdateBookPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/books/${id}`, {
    cache: "no-store",
  });

  const book: Book = await res.json();

  return (
    <section className="min-h-screen bg-[#14110d] px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-4xl rounded-2xl sm:rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 sm:p-8">
        <h1 className="mb-6 text-2xl font-bold text-white sm:mb-8 sm:text-3xl">
          Update Book
        </h1>
        <UpdateBookForm book={book} />
      </div>
    </section>
  );
};

export default UpdateBookPage;