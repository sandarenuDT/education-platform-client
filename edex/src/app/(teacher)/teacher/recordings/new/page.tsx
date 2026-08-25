import { PageStub } from "@/components/ui/PageStub";

export default function AddRecordingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Add Recording"
        route="/teacher/recordings/new"
        description="Form to add a new recording (thumbnail, video link, price, subject)."
        bullets={["Title / description fields","Thumbnail upload + video source","Subject/grade + price"]}
      />
    </div>
  );
}
