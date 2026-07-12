import Link from "next/link";
import { Mail, Phone, MapPin, BookOpen } from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Books", href: "/books" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const categories = ["Fiction", "Science", "Programming", "History", "Biography"];

export default function Footer() {
  return (
    <footer className="bg-[#14110d] text-white/60 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 text-3xl font-bold text-white">
              <BookOpen className="text-[#d9a441]" size={30} />
              BookNest
            </Link>

            <p className="mt-5 leading-7 text-white/40">
              BookNest is your trusted online bookstore where readers can discover, explore, and purchase their favorite books anytime.
            </p>

            <div className="mt-6 flex gap-4">
              <a href="#" className="rounded-full bg-white/5 border border-white/10 p-3 text-white/70 transition hover:bg-[#d9a441] hover:text-black hover:border-[#d9a441]">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="rounded-full bg-white/5 border border-white/10 p-3 text-white/70 transition hover:bg-[#d9a441] hover:text-black hover:border-[#d9a441]">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="rounded-full bg-white/5 border border-white/10 p-3 text-white/70 transition hover:bg-[#d9a441] hover:text-black hover:border-[#d9a441]">
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="transition hover:pl-2 hover:text-[#d9a441]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">Categories</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category} className="transition hover:pl-2 hover:text-[#d9a441] cursor-pointer">
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">Contact Us</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-[#d9a441]" size={18} />
                <p>Rangpur, Bangladesh</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#d9a441]" size={18} />
                <p>+880 1700-000000</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#d9a441]" size={18} />
                <p>support@booknest.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10 border-t border-white/10"></div>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} BookNest. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="hover:text-[#d9a441]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#d9a441]">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}