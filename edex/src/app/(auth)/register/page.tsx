"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { api, ApiError } from "@/lib/api";
import { AUTH_REGISTER } from "@/lib/apiPaths";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }
    if (!agreed) {
      setError("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }

    setLoading(true);
    try {
      await api.post(AUTH_REGISTER, { name, email, password });
      // If your backend requires OTP verification before login, redirect there instead:
      // router.push("/verify-otp");
      router.push("/login");
    } catch (err) {
      if (err instanceof ApiError) {
        setError(
          err.status === 409
            ? "An account with this email already exists."
            : `Registration failed (${err.status}). Please try again.`
        );
      } else {
        setError(
          "Couldn't reach the server. Is the backend running and NEXT_PUBLIC_API_BASE_URL set correctly?"
        );
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid w-full max-w-4xl overflow-hidden rounded-3xl border border-surface-200 bg-surface-0 shadow-sm md:grid-cols-2">
      {/* Side panel */}
      <div className="hidden flex-col justify-between bg-gradient-to-br from-brand-500 to-brand-800 p-10 text-white md:flex">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
          <UserPlus className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-2xl font-bold leading-snug">
            Start your journey
            <br />
            with EDEX today.
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Create a free account to unlock recorded lessons, books, and
            track your progress.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="p-8 sm:p-10">
        <h1 className="text-2xl font-bold text-ink-900">Create account</h1>
        <p className="mt-1 text-sm text-surface-muted">
          Join us today and start learning
        </p>

        {error && (
          <div className="mt-6 rounded-xl border border-accent-red/20 bg-accent-red/10 px-4 py-3 text-sm text-accent-red">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink-900">
              Full name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-surface-200 px-4 py-2.5 text-sm outline-none placeholder:text-surface-muted focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink-900">
              Email address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-surface-200 px-4 py-2.5 text-sm outline-none placeholder:text-surface-muted focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink-900">
              Password
            </label>
            <input
              type="password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full rounded-xl border border-surface-200 px-4 py-2.5 text-sm outline-none placeholder:text-surface-muted focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink-900">
              Confirm password
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="w-full rounded-xl border border-surface-200 px-4 py-2.5 text-sm outline-none placeholder:text-surface-muted focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            />
          </div>

          <label className="flex items-start gap-2 text-sm text-surface-muted">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5"
            />
            I agree to the{" "}
            <Link href="#" className="text-brand-600 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-brand-600 hover:underline">
              Privacy Policy
            </Link>
          </label>

          <Button type="submit" className="w-full" size="lg" disabled={loading}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Sign Up"}
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-surface-muted">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-brand-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}