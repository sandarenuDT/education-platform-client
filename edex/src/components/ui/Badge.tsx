import { cn } from "@/lib/utils";

type Tone = "brand" | "teal" | "orange" | "pink" | "green" | "red" | "neutral";

const tones: Record<Tone, string> = {
  brand: "bg-brand-100 text-brand-700",
  teal: "bg-accent-teal/10 text-accent-teal",
  orange: "bg-accent-orange/10 text-accent-orange",
  pink: "bg-accent-pink/10 text-accent-pink",
  green: "bg-accent-green/10 text-accent-green",
  red: "bg-accent-red/10 text-accent-red",
  neutral: "bg-surface-100 text-surface-muted",
};

export function Badge({
  tone = "neutral",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
