"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X, BookOpen, Search,  } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Books", href: "/books" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathaName = usePathname();

  // Demo Auth State
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  // Avatar Dropdown
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#14110d]/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-[#d9a441]"
        >
          <BookOpen size={30} />
          <span>BookNest</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => {
            const isActive = pathaName === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-medium transition duration-300 ${
                  isActive
                    ? "text-[#d9a441]"
                    : "text-white/60 hover:text-[#d9a441]"
                }`}
              >
                {item.name}

                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-[#d9a441]"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* Search */}

          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
            />

            <input
              type="text"
              placeholder="Search books..."
              className="rounded-full border border-white/10 bg-white/5 py-2 pl-10 pr-4 text-white placeholder:text-white/30 outline-none focus:border-[#d9a441]/50"
            />
          </div>

          {/* Auth */}

          {!isLoggedIn ? (
            <div className="flex gap-3">
              <Link
                href="/login"
                className="rounded-lg border border-[#d9a441]/40 px-4 py-2 font-medium text-[#d9a441] transition hover:bg-[#d9a441] hover:text-black"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-lg bg-[#d9a441] px-4 py-2 font-medium text-black transition hover:bg-[#c8943a]"
              >
                Register
              </Link>
            </div>
          ) : (
            <>
             

              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d9a441] text-black font-semibold transition hover:scale-105"
                >
                  A
                </button>

                {showDropdown && (
                  <div className="absolute right-0 mt-3 w-56 rounded-xl border border-white/10 bg-[#201b15] shadow-2xl">
                    <div className="border-b border-white/10 p-4">
                      <h3 className="font-semibold text-white">Anika Mim</h3>
                      <p className="text-sm text-white/40">anika@gmail.com</p>
                    </div>

                    <Link
                      href="/profile"
                      className="block px-4 py-3 text-white/70 hover:bg-white/5 hover:text-[#d9a441]"
                    >
                      My Profile
                    </Link>

                    <Link
                      href="/books/add"
                      className="block px-4 py-3 text-white/70 hover:bg-white/5 hover:text-[#d9a441]"
                    >
                      Add Book
                    </Link>

                    <Link
                      href="/books/manage"
                      className="block px-4 py-3 text-white/70 hover:bg-white/5 hover:text-[#d9a441]"
                    >
                      Manage Books
                    </Link>

                    <button
                      onClick={() => setIsLoggedIn(false)}
                      className="w-full rounded-b-xl px-4 py-3 text-left text-red-400 hover:bg-red-500/10"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white lg:hidden"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#14110d] lg:hidden">
          <div className="space-y-4 p-5">
            {navLinks.map((item) => {
              const isActive = pathaName === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-lg font-medium transition ${
                    isActive
                      ? "bg-[#d9a441]/15 text-[#d9a441]"
                      : "text-white/70 hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="relative pt-3">
              <Search
                size={18}
                className="absolute left-3 top-1/2 text-white/40"
              />

              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-lg border border-white/10 bg-white/5 py-2 pl-10 pr-4 text-white placeholder:text-white/30 outline-none"
              />
            </div>

            {!isLoggedIn ? (
              <div className="space-y-3">
                <Link
                  href="/login"
                  className="block rounded-lg border border-[#d9a441]/40 py-2 text-center text-[#d9a441]"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="block rounded-lg bg-[#d9a441] py-2 text-center text-black"
                >
                  Register
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                <Link
                  href="/books/add"
                  className="block rounded-lg bg-[#d9a441] py-2 text-center text-black"
                >
                  Add Book
                </Link>
                <Link
                  href="/books/manage"
                  className="block rounded-lg bg-white/5 py-2 text-center text-white/70"
                >
                  Manage Books
                </Link>

                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full rounded-lg bg-red-500/80 py-2 text-white"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}