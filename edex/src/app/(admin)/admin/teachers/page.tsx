import { PageStub } from "@/components/ui/PageStub";

export default function ManageTeachersPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Manage Teachers"
        route="/admin/teachers"
        description="All teacher accounts on the platform."
        bullets={["Table: teacher, subject, students, status","\"Add teacher\" button","Edit / deactivate actions"]}
      />
    </div>
  );
}
