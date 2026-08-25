import { Bell, Search } from "lucide-react";

export function DashboardTopbar({
  title,
  userName = "John Doe",
}: {
  title: string;
  userName?: string;
}) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-surface-200 bg-surface-0 px-6">
      <h1 className="text-lg font-semibold text-ink-900">{title}</h1>

      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-2 rounded-xl bg-surface-100 px-3 py-2 text-sm text-surface-muted sm:flex">
          <Search className="h-4 w-4" />
          <span>Search...</span>
        </div>
        <button className="relative flex h-9 w-9 items-center justify-center rounded-full bg-surface-100 text-surface-muted">
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent-orange" />
        </button>
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
            {userName
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
          <span className="hidden text-sm font-medium text-ink-900 sm:block">
            {userName}
          </span>
        </div>
      </div>
    </header>
  );
}
