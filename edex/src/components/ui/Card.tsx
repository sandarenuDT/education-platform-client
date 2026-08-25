import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-surface-200 bg-surface-0 p-6 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
