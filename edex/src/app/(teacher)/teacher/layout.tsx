import { BookOpen, LayoutDashboard, Users, Video } from "lucide-react";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { DashboardTopbar } from "@/components/layout/DashboardTopbar";

const iconClass = "h-4.5 w-4.5";
const items = [
  { href: "/teacher", label: "Dashboard", icon: <LayoutDashboard className={iconClass} /> },
  { href: "/teacher/books", label: "Manage Books", icon: <BookOpen className={iconClass} /> },
  { href: "/teacher/recordings", label: "Manage Recordings", icon: <Video className={iconClass} /> },
  { href: "/teacher/students", label: "My Students", icon: <Users className={iconClass} /> },
];

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-surface-50">
      <DashboardSidebar roleLabel="Teacher" items={items} />
      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardTopbar title="Teacher Dashboard" userName="Ms. Perera" />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
