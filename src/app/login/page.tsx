"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, BookOpen } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { redirect, useRouter } from "next/navigation";

const SignInPages = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: connect to your auth endpoint
    setTimeout(() => setLoading(false), 800);
    const { data, error } = await authClient.signIn.email({
      //   name: form.name,
      email: form.email,
      password: form.password,
    });
    if (error) {
      console.log(error);
    } else {
      alert("signin succesfully");
      router.push("/")
    }
  };

  const handleGoogleLogin = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
    });

    if (error) {
      console.log(error);
    }
    else{
        alert("login with google")
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#1d1b18] px-4 py-10">
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#d9a441]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#d9a441]/10 blur-[120px]" />

      <div className="relative w-full max-w-md rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] md:p-10">
        <div className="mb-8 flex items-center justify-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9a441]/15">
            <BookOpen size={18} className="text-[#d9a441]" />
          </div>
          <span className="text-lg font-semibold tracking-wide text-white">
            Booknest
          </span>
        </div>

        <h1 className="text-center text-2xl font-bold text-white">
          Welcome Back
        </h1>
        <p className="mt-2 text-center text-sm text-white/40">
          Sign in to continue browsing your catalog.
        </p>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="mt-7 flex w-full items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 py-3 text-sm font-medium text-white transition hover:border-[#d9a441]/40 hover:bg-white/10"
        >
          <GoogleIcon />
          Continue with Google
        </button>

        <div className="my-6 flex items-center gap-3">
          <span className="h-px flex-1 bg-white/10" />
          <span className="text-xs text-white/30">or sign in with email</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-xs text-white/40 transition hover:text-[#d9a441]"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded-full bg-[#d9a441] py-3 text-sm font-semibold text-black shadow-[0_0_20px_#d9a44166] transition hover:brightness-105 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white/40">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-[#d9a441] hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 48 48">
    <path
      fill="#FFC107"
      d="M43.6 20.5H42V20H24v8h11.3C33.7 32.6 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l6-6C34.5 5.1 29.5 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.4-.1-2.7-.4-3.5z"
    />
    <path
      fill="#FF3D00"
      d="M6.3 14.7l6.6 4.8C14.6 15.6 19 12 24 12c3.1 0 5.8 1.1 8 3l6-6C34.5 5.1 29.5 3 24 3 16 3 9.1 7.6 6.3 14.7z"
    />
    <path
      fill="#4CAF50"
      d="M24 45c5.3 0 10.2-2 13.9-5.4l-6.4-5.4C29.4 35.9 26.8 36.8 24 36.8c-5.3 0-9.7-3.4-11.3-8.1l-6.5 5C9.1 40.4 16 45 24 45z"
    />
    <path
      fill="#1976D2"
      d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.3 5.6l6.4 5.4C39.9 37.1 43 31.1 43 24c0-1.4-.1-2.7-.4-3.5z"
    />
  </svg>
);

export default SignInPages;
