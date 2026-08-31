import Link from "next/link";
import { FlaskConical } from "lucide-react";
import Image from "next/image";


export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface-50 px-4 py-10">
      <Link href="/" className="mb-8 flex items-center gap-2">
     <div className="relative flex h-14 w-24 items-center justify-center overflow-hidden rounded-xl bg-black shadow-sm border border-surface-200">
           <Image
             src="/images/logo.jpeg"
             alt="EDEX Logo"
             fill
             priority
             className="object-contain p-1 transition-transform duration-300 hover:scale-105" // Keeps the full logo visible inside the box safely
           />
         </div>

        {/* <span className="text-lg font-bold text-ink-900">EDEX</span> */}
      </Link>
      {children}
    </div>
  );
}
