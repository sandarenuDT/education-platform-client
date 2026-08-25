"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FlaskConical, Mail, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";


const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/recordings", label: "Classes" },
  { href: "/books", label: "Books" },
  { href: "/contact", label: "Contact Us" },
];

export function PublicNavbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="hidden items-center justify-between bg-ink-900 px-6 py-2 text-xs text-white/80 sm:flex">
        <span>Excellence in higher education, since day one.</span>
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" /> +94 77 123 4567
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5" /> info@edex.lk
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-surface-200 bg-surface-0/90 px-6 py-3 backdrop-blur">
        <Link href="/" className="flex items-center gap-4 transition-opacity hover:opacity-90">
    {/* Box changed from square to a wider rectangle (w-24 h-14) */}
    <div className="relative flex h-14 w-24 items-center justify-center overflow-hidden rounded-xl bg-black shadow-sm border border-surface-200">
      <Image
        src="/images/logo.jpeg"
        alt="EDEX Logo"
        fill
        priority
        className="object-contain p-1 transition-transform duration-300 hover:scale-105" // Keeps the full logo visible inside the box safely
      />
    </div>
    <span>
      <span className="block text-xl font-extrabold tracking-tight leading-none text-ink-900">
        EDEX
      </span>
      <span className="block text-xs font-medium tracking-wide text-surface-muted mt-1 uppercase text-brand-600">
        Higher Education Institute
      </span>
    </span>
  </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium text-surface-muted transition-colors hover:text-brand-600",
                pathname === link.href && "text-brand-600"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button href="/login" variant="outline" size="sm">
          <User className="h-4 w-4" />
          Login / Register
        </Button>
      </div>
    </header>
  );
}
