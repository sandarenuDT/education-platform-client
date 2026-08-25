import { PageStub } from "@/components/ui/PageStub";

export default function AddTeacherPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Add Teacher"
        route="/admin/teachers/new"
        description="Create a new teacher account."
        bullets={["Name / email / subject fields","Set initial password / invite email","Assign permissions"]}
      />
    </div>
  );
}
