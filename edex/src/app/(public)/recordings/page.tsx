import { PageStub } from "@/components/ui/PageStub";

export default function RecordingsCatalogPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Recordings Catalog"
        route="/recordings"
        description="Public list of recorded classes — preview info only, playback requires login + purchase."
        bullets={["Search bar + subject/grade filters","Recording cards (thumbnail, title, lesson count)","Locked badge on cards"]}
      />
    </div>
  );
}
