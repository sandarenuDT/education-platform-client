import { PageStub } from "@/components/ui/PageStub";

export default function PaymentHistoryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Payment History"
        route="/dashboard/purchases"
        description="List of the student's past orders and their status."
        bullets={["Order ID / item / date / amount / status table","Receipt download","Support contact link"]}
      />
    </div>
  );
}
