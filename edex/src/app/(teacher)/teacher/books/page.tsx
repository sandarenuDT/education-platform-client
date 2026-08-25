import { PageStub } from "@/components/ui/PageStub";

export default function ManageMyBooksPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Manage My Books"
        route="/teacher/books"
        description="List of books uploaded by this teacher, with edit/delete actions."
        bullets={["Table: title, price, status","\"Add new book\" button","Edit / delete row actions"]}
      />
    </div>
  );
}
