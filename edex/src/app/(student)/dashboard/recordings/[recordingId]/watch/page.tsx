import { PageStub } from "@/components/ui/PageStub";

export default function ProtectedVideoPlayerPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Protected Video Player"
        route="/dashboard/recordings/[recordingId]/watch"
        description="Streams the recording via a short-lived signed URL — no download, no permanent link."
        bullets={["Video player (signed stream URL)","Lesson list sidebar","Progress tracking + \"mark as complete\""]}
      />
    </div>
  );
}
