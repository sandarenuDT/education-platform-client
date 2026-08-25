import { PageStub } from "@/components/ui/PageStub";

export default function MyLibraryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="My Library"
        route="/dashboard/library"
        description="All purchased/unlocked books and recordings in one place."
        bullets={["Tabs: Books / Recordings","Grid of owned items","Empty state when nothing purchased yet"]}
      />
    </div>
  );
}
