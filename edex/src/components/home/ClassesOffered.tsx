import { BookOpenCheck, FlaskConical, MessagesSquare, User, Users2 } from "lucide-react";

const classes = [
  {
    icon: FlaskConical,
    title: "A/L Science Stream",
    description: "Complete theory, past paper discussions and exam strategies.",
    tone: "bg-brand-100 text-brand-600",
  },
  {
    icon: BookOpenCheck,
    title: "O/L Foundation (Grades 8–10)",
    description: "Build a strong foundation with concept-based learning.",
    tone: "bg-accent-teal/10 text-accent-teal",
  },
  {
    icon: Users2,
    title: "Practical Classes",
    description: "Hands-on lab sessions for better understanding.",
    tone: "bg-accent-orange/10 text-accent-orange",
  },
  {
    icon: User,
    title: "Individual Tuition",
    description: "Personalised attention to improve weak areas.",
    tone: "bg-accent-pink/10 text-accent-pink",
  },
  {
    icon: MessagesSquare,
    title: "Paper Discussions & Model Exams",
    description: "Regular discussions and model exams for exam readiness.",
    tone: "bg-accent-green/10 text-accent-green",
  },
];

export function ClassesOffered() {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {classes.map(({ icon: Icon, title, description, tone }) => (
        <div
          key={title}
          className="rounded-2xl border border-surface-200 bg-surface-50 p-6 transition-shadow hover:shadow-md"
        >
          <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${tone}`}>
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="mt-4 font-semibold text-ink-900">{title}</h3>
          <p className="mt-1.5 text-sm text-surface-muted">{description}</p>
        </div>
      ))}
    </div>
  );
}
