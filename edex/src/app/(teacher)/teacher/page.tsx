import { PageStub } from "@/components/ui/PageStub";

export default function TeacherDashboardPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Teacher Dashboard"
        route="/teacher"
        description="Overview of the teacher's own content and students."
        bullets={["Stats: students, courses, revenue","Top-performing content","Quick links to manage content"]}
      />
    </div>
  );
}
