import { PageStub } from "@/components/ui/PageStub";

export default function StudentAccessPurchasesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Student Access / Purchases"
        route="/admin/students/[studentId]"
        description="View and manually grant or revoke a student's course/recording access."
        bullets={["Student profile summary","Purchases table with access toggle","Manual grant-access action"]}
      />
    </div>
  );
}
