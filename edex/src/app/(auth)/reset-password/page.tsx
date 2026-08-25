import { PageStub } from "@/components/ui/PageStub";

export default function ResetPasswordPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Reset Password"
        route="/reset-password"
        description="Set a new password after clicking the reset link from email."
        bullets={["New password + confirm fields","Password strength hint","Submit → login"]}
      />
    </div>
  );
}
