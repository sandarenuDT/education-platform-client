import { PageStub } from "@/components/ui/PageStub";

export default function AdminDashboardPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Admin Dashboard"
        route="/admin"
        description="Institute-wide overview: sales, active students, top courses."
        bullets={["Stat cards: students, courses, revenue","Sales overview chart","Top courses table"]}
      />
    </div>
  );
}
