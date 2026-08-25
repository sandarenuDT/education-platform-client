import { PageStub } from "@/components/ui/PageStub";

export default function PaymentConfirmationPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Payment Confirmation"
        route="/dashboard/payment/success"
        description="On-screen success message shown right after a completed payment (confirmation email also sent)."
        bullets={["Success icon + order reference","\"Go to my library\" CTA"]}
      />
    </div>
  );
}
