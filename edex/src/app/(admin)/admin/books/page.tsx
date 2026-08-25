import { PageStub } from "@/components/ui/PageStub";

export default function AllBooksPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="All Books"
        route="/admin/books"
        description="Admin oversight of every book across all teachers."
        bullets={["Table: title, teacher, price, status","Filter by teacher/subject","Remove/unpublish action"]}
      />
    </div>
  );
}
