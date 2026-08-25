import { PageStub } from "@/components/ui/PageStub";

export default function EditRecordingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Edit Recording"
        route="/teacher/recordings/[recordingId]/edit"
        description="Edit an existing recording's details."
        bullets={["Pre-filled recording form","Replace thumbnail/video","Save / delete"]}
      />
    </div>
  );
}
