import { PageStub } from "@/components/ui/PageStub";

export default function StudentDashboardPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Student Dashboard"
        route="/dashboard"
        description="Student's home screen — enrolled classes, progress and continue-watching."
        bullets={["\"My Courses\" list with progress %","Progress summary widget","Continue watching card"]}
      />
    </div>
  );
}
