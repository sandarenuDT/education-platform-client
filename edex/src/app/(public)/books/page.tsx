import { PageStub } from "@/components/ui/PageStub";

export default function BooksCatalogPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Books Catalog"
        route="/books"
        description="Public list of books with search and filters by subject / grade."
        bullets={["Search bar + subject/grade filters","Book cards (cover, title, price)","Grid + pagination"]}
      />
    </div>
  );
}
