import { PageStub } from "@/components/ui/PageStub";

export default function ProfileSettingsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Profile Settings"
        route="/dashboard/settings"
        description="Student edits their name, email and password."
        bullets={["Profile info form","Change password","Notification preferences"]}
      />
    </div>
  );
}
