import { PageStub } from "@/components/ui/PageStub";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="About Us"
        route="/about"
        description="Introduces the institute and its teachers: photos, bios, qualifications, subjects taught, and achievements."
        bullets={[
          "Institute story and mission",
          "Teacher profile cards (photo, subject, qualifications)",
          "Achievements / results timeline",
        ]}
      />
    </div>
  );
}
