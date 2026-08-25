import { PageStub } from "@/components/ui/PageStub";

export default function PaymentsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Payments"
        route="/admin/payments"
        description="All transactions across the platform, with refund handling."
        bullets={["Transactions table","Filter by status/date","Refund action"]}
      />
    </div>
  );
}
