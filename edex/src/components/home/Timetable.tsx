"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const schedule: Record<string, { time: string; subject: string; tone: string }[]> = {
  Mon: [
    { time: "8:00 – 10:00 AM", subject: "A/L Chemistry — Theory", tone: "bg-brand-50 text-brand-700" },
    { time: "10:30 AM – 12:30 PM", subject: "O/L Science (Grade 9)", tone: "bg-accent-teal/10 text-accent-teal" },
    { time: "4:30 – 6:30 PM", subject: "A/L Physics — Paper Discussion", tone: "bg-accent-orange/10 text-accent-orange" },
  ],
  Tue: [
    { time: "8:00 – 10:00 AM", subject: "A/L Chemistry — Theory", tone: "bg-brand-50 text-brand-700" },
    { time: "2:00 – 4:00 PM", subject: "Individual Tuition", tone: "bg-surface-100 text-surface-muted" },
  ],
  Wed: [
    { time: "8:00 – 10:00 AM", subject: "O/L Science (Grade 10)", tone: "bg-accent-teal/10 text-accent-teal" },
    { time: "10:30 AM – 12:30 PM", subject: "A/L Chemistry — Problem Class", tone: "bg-accent-orange/10 text-accent-orange" },
  ],
  Thu: [
    { time: "8:00 – 10:00 AM", subject: "A/L Chemistry — Theory", tone: "bg-brand-50 text-brand-700" },
    { time: "4:30 – 6:30 PM", subject: "A/L Physics — Paper Discussion", tone: "bg-accent-orange/10 text-accent-orange" },
  ],
  Fri: [
    { time: "8:00 – 10:00 AM", subject: "O/L Science (Grade 10)", tone: "bg-accent-teal/10 text-accent-teal" },
    { time: "10:30 AM – 12:30 PM", subject: "Practical Class (Advanced)", tone: "bg-accent-pink/10 text-accent-pink" },
  ],
  Sat: [
    { time: "8:00 – 10:00 AM", subject: "Revision Class — A/L", tone: "bg-accent-orange/10 text-accent-orange" },
  ],
  Sun: [],
};

export function Timetable() {
  const [active, setActive] = useState("Mon");
  const items = schedule[active];

  return (
    <div className="mx-auto mt-8 max-w-3xl">
      <div className="flex justify-center gap-1.5 overflow-x-auto rounded-2xl bg-surface-100 p-1.5">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActive(day)}
            className={cn(
              "flex-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors",
              active === day
                ? "bg-brand-500 text-white shadow-sm"
                : "text-surface-muted hover:text-ink-900"
            )}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-3">
        {items.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-surface-200 bg-surface-0 py-8 text-center text-sm text-surface-muted">
            No classes scheduled for {active}.
          </p>
        ) : (
          items.map((item) => (
            <div
              key={item.time + item.subject}
              className="flex items-center justify-between rounded-2xl border border-surface-200 bg-surface-0 px-5 py-4"
            >
              <span className="text-sm font-medium text-ink-900">
                {item.subject}
              </span>
              <span
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-medium",
                  item.tone
                )}
              >
                {item.time}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
