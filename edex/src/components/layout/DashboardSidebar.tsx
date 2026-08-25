"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FlaskConical } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface SidebarNavItem {
  href: string;
  label: string;
  icon: ReactNode;
}

export function DashboardSidebar({
  roleLabel,
  items,
}: {
  roleLabel: string;
  items: SidebarNavItem[];
}) {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col bg-ink-900 text-white/80">
      <Link
        href="/"
        className="flex items-center gap-3 border-b border-white/10 px-5 py-5"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-white">
          <FlaskConical className="h-4.5 w-4.5" />
        </span>
        <span>
          <span className="block text-sm font-bold leading-none text-white">
            EDEX
          </span>
          <span className="block text-[11px] text-white/50">{roleLabel}</span>
        </span>
      </Link>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {items.map((item) => {
          const active =
            pathname === item.href || pathname?.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-brand-500 text-white"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 px-5 py-4 text-xs text-white/40">
        EDEX Higher Education Institute
      </div>
    </aside>
  );
}
