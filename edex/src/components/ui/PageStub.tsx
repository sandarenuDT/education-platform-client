import { Construction } from "lucide-react";
import { Badge } from "./Badge";

export function PageStub({
  title,
  route,
  description,
  bullets,
}: {
  title: string;
  route: string;
  description: string;
  bullets?: string[];
}) {
  return (
    <div className="animate-fade-in mx-auto w-full max-w-3xl py-10">
      <Badge tone="brand" className="mb-4">
        <Construction className="mr-1.5 h-3.5 w-3.5" />
        Scaffolded page
      </Badge>
      <h1 className="text-3xl font-semibold tracking-tight text-ink-900">
        {title}
      </h1>
      <p className="mt-1 font-mono text-xs text-surface-muted">{route}</p>
      <p className="mt-4 max-w-xl text-surface-muted">{description}</p>

      {bullets && bullets.length > 0 && (
        <div className="mt-8 rounded-2xl border border-dashed border-surface-200 bg-surface-0 p-6">
          <p className="mb-3 text-sm font-medium text-ink-900">
            This page will include:
          </p>
          <ul className="space-y-2">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2 text-sm text-surface-muted"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
