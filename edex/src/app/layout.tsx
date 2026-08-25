import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EDEX | Higher Education Institute",
  description:
    "EDEX Higher Education Institute — join live online classes, and get access to recorded lessons and books.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-surface-50 text-foreground">
        {children}
      </body>
    </html>
  );
}
