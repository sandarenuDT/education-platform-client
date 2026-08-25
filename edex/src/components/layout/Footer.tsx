import Link from "next/link";
import { FlaskConical } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-surface-200 bg-ink-900 text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-white">
              <FlaskConical className="h-4 w-4" />
            </span>
            <span className="text-base font-bold text-white">EDEX</span>
          </Link>
          <p className="mt-3 text-sm">
            Join live online classes, and get access to recorded lessons and
            books from expert teachers.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Explore</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/recordings" className="hover:text-white">Classes</Link></li>
            <li><Link href="/books" className="hover:text-white">Books</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Account</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/login" className="hover:text-white">Login</Link></li>
            <li><Link href="/register" className="hover:text-white">Register</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>+94 77 123 4567</li>
            <li>info@edex.lk</li>
            <li>Colombo, Sri Lanka</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-center text-xs">
        © {new Date().getFullYear()} EDEX Higher Education Institute. All rights reserved.
      </div>
    </footer>
  );
}
