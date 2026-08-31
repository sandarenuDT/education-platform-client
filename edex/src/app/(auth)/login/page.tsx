"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GraduationCap, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { api, ApiError } from "@/lib/api";
import { AUTH_LOGIN } from "@/lib/apiPaths";
import type { Role } from "@/types";

interface LoginResponse {
  token: string;
  role: Role;
}

const roleHome: Record<Role, string> = {
  STUDENT: "/dashboard",
  TEACHER_ADMIN: "/teacher",
  SUPER_ADMIN: "/admin",
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { token, role } = await api.post<LoginResponse>(AUTH_LOGIN, {
        email,
        password,
      });
      document.cookie = `edex_token=${token}; path=/; max-age=86400`;
      router.push(roleHome[role] ?? "/");
      router.refresh();
    } catch (err) {
      if (err instanceof ApiError) {
        setError(
          err.status === 401 || err.status === 403
            ? "Incorrect email or password."
            : `Login failed (${err.status}). Please try again.`
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
          <GraduationCap className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-2xl font-bold leading-snug">
            Keep learning,
            <br />
            keep growing.
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Join thousands of students learning with EDEX every day.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="p-8 sm:p-10">
        <h1 className="text-2xl font-bold text-ink-900">Welcome back!</h1>
        <p className="mt-1 text-sm text-surface-muted">
          Login to your account
        </p>

        {error && (
          <div className="mt-6 rounded-xl border border-accent-red/20 bg-accent-red/10 px-4 py-3 text-sm text-accent-red">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
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
            <div className="mb-1.5 flex items-center justify-between">
              <label className="text-sm font-medium text-ink-900">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-xs font-medium text-brand-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-xl border border-surface-200 px-4 py-2.5 text-sm outline-none placeholder:text-surface-muted focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            />
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={loading}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Login"}
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-surface-muted">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-medium text-brand-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}