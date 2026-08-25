import { PageStub } from "@/components/ui/PageStub";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Settings"
        route="/admin/settings"
        description="Site-wide configuration for the institute."
        bullets={["Site name / description","Payment gateway keys","Email + notification settings"]}
      />
    </div>
  );
}
