import { PageStub } from "@/components/ui/PageStub";

export default function EditBookPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Edit Book"
        route="/teacher/books/[bookId]/edit"
        description="Edit an existing book's details."
        bullets={["Pre-filled book form","Replace cover/file","Save / delete"]}
      />
    </div>
  );
}
