import { PageStub } from "@/components/ui/PageStub";

export default function AllRecordingsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="All Recordings"
        route="/admin/recordings"
        description="Admin oversight of every recording across all teachers."
        bullets={["Table: title, teacher, price, status","Filter by teacher/subject","Remove/unpublish action"]}
      />
    </div>
  );
}
