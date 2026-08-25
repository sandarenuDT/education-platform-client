import { PageStub } from "@/components/ui/PageStub";

export default function AddBookPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Add Book"
        route="/teacher/books/new"
        description="Form to upload a new book (cover, file, price)."
        bullets={["Title / description fields","Cover + file upload","Price or mark as free"]}
      />
    </div>
  );
}
