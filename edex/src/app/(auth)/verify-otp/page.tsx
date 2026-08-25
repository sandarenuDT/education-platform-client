import { PageStub } from "@/components/ui/PageStub";

export default function VerifyOTPPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Verify OTP"
        route="/verify-otp"
        description="One-time code verification step after registration."
        bullets={["6-digit code input","Resend code timer","Continue → dashboard"]}
      />
    </div>
  );
}
