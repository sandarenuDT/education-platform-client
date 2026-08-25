import { PageStub } from "@/components/ui/PageStub";

export default function ForgotPasswordPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Forgot Password"
        route="/forgot-password"
        description="Collects the student's email to send a password reset link."
        bullets={["Email input","\"Send reset link\" action","Back to login"]}
      />
    </div>
  );
}
