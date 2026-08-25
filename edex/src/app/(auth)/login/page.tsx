import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
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

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink-900">
              Email address
            </label>
            <input
              type="email"
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
              placeholder="Enter your password"
              className="w-full rounded-xl border border-surface-200 px-4 py-2.5 text-sm outline-none placeholder:text-surface-muted focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            Login
          </Button>
        </form>

        <div className="my-6 flex items-center gap-3 text-xs text-surface-muted">
          <span className="h-px flex-1 bg-surface-200" />
          or continue with
          <span className="h-px flex-1 bg-surface-200" />
        </div>

        <div className="grid grid-cols-3 gap-3">
          {["Google", "Facebook", "Apple"].map((provider) => (
            <button
              key={provider}
              className="rounded-xl border border-surface-200 py-2.5 text-xs font-medium text-surface-muted hover:bg-surface-100"
            >
              {provider}
            </button>
          ))}
        </div>

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
