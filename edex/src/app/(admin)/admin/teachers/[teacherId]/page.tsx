import { PageStub } from "@/components/ui/PageStub";

export default function TeacherDetailPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Teacher Detail"
        route="/admin/teachers/[teacherId]"
        description="View a single teacher's profile, content and performance."
        bullets={["Profile summary","Their books & recordings","Deactivate / reset password"]}
      />
    </div>
  );
}
