"use client";
import { useState } from "react";
import Link from "next/link";
import { User, Mail, Lock, Eye, EyeOff, BookOpen, Image } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const SignUpPages = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", image: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: connect to your auth endpoint
    const { data, error } = await authClient.signUp.email({
      name: form.name,
      email: form.email,
      password: form.password,
      image: form.image,
    });
    if (error) {
      console.log(error);
    } else {
      toast("signUp succesfully");
      router.push("/");
    }

    setLoading(false);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1d1b18] px-4 py-10">
      {/* ambient glow background, matches the dark glass aesthetic */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#d9a441]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#d9a441]/10 blur-[120px]" />

      <div className="relative w-full max-w-md rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] md:p-10">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9a441]/15">
            <BookOpen size={18} className="text-[#d9a441]" />
          </div>
          <span className="text-lg font-semibold tracking-wide text-white">
            Booknest
          </span>
        </div>

        <h1 className="text-center text-2xl font-bold text-white">
          Create Account
        </h1>
        <p className="mt-2 text-center text-sm text-white/40">
          Join to explore, save and order from the full catalog.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          {/* Name */}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 transition hover:border-[#d9a441]/40">
            <User size={16} className="text-white/40" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full name"
              required
              className="w-full bg-transparent text-sm text-white placeholder:text-white/30 outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 transition hover:border-[#d9a441]/40">
            <Mail size={16} className="text-white/40" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email address"
              required
              className="w-full bg-transparent text-sm text-white placeholder:text-white/30 outline-none"
            />
          </div>

          {/* Image URL */}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 transition hover:border-[#d9a441]/40">
            <Image size={16} className="text-white/40" />
            <input
              type="url"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="Profile image URL (optional)"
              className="w-full bg-transparent text-sm text-white placeholder:text-white/30 outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 transition hover:border-[#d9a441]/40">
            <Lock size={16} className="text-white/40" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full bg-transparent text-sm text-white placeholder:text-white/30 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="text-white/40 transition hover:text-[#d9a441]"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded-full bg-[#d9a441] py-3 text-sm font-semibold text-black shadow-[0_0_20px_#d9a44166] transition hover:brightness-105 disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white/40">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="font-medium text-[#d9a441] hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPages;