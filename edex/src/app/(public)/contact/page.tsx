import { PageStub } from "@/components/ui/PageStub";

export default function ContactUsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Contact Us"
        route="/contact"
        description="Contact form plus phone, email and social links."
        bullets={["Name / email / message form","Institute phone, email, address","Social links"]}
      />
    </div>
  );
}
