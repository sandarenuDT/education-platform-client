import { PageStub } from "@/components/ui/PageStub";

export default function ManageMyRecordingsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Manage My Recordings"
        route="/teacher/recordings"
        description="List of recordings uploaded by this teacher, with edit/delete actions."
        bullets={["Table: title, subject, price, status","\"Add new recording\" button","Edit / delete row actions"]}
      />
    </div>
  );
}
