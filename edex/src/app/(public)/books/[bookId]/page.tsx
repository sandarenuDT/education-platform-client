import { PageStub } from "@/components/ui/PageStub";

export default function BookDetailsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Book Details"
        route="/books/[bookId]"
        description="Book detail page with cover, description, price and a Buy / Get Free CTA."
        bullets={["Cover image + description","Price / free badge","\"Buy now\" → checkout (requires login)"]}
      />
    </div>
  );
}
