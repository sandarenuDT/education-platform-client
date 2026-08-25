import { PageStub } from "@/components/ui/PageStub";

export default function MyStudentsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="My Students"
        route="/teacher/students"
        description="Students who purchased this teacher's content."
        bullets={["Table: student, item purchased, date","Search by student name","Link to student detail"]}
      />
    </div>
  );
}
