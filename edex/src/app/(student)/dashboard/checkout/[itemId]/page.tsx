import { PageStub } from "@/components/ui/PageStub";

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Checkout"
        route="/dashboard/checkout/[itemId]"
        description="Review price and pay for a selected recording, book or bundle."
        bullets={["Order summary card","Payment details form","\"Pay now\" → payment/success"]}
      />
    </div>
  );
}
