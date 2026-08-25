import { PageStub } from "@/components/ui/PageStub";

export default function RecordingDetailsPreviewPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Recording Details (Preview)"
        route="/recordings/[recordingId]"
        description="Shows a blurred/locked preview of the recording with an Unlock CTA that leads to login/checkout."
        bullets={["Thumbnail + description + syllabus outline","\"Unlock this recording\" CTA","Related recordings"]}
      />
    </div>
  );
}
