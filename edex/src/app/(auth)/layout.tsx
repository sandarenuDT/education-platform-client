import Link from "next/link";
import { FlaskConical } from "lucide-react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface-50 px-4 py-10">
      <Link href="/" className="mb-8 flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-white">
          <FlaskConical className="h-4.5 w-4.5" />
        </span>
        <span className="text-lg font-bold text-ink-900">EDEX</span>
      </Link>
      {children}
    </div>
  );
}
