import { PageStub } from "@/components/ui/PageStub";

export default function ManageStudentsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Manage Students"
        route="/admin/students"
        description="All registered students on the platform."
        bullets={["Search students","Table: student, email, courses joined, status","Link to student detail"]}
      />
    </div>
  );
}
