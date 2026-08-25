import {
  BookOpen,
  CreditCard,
  LayoutDashboard,
  Settings,
  UserCog,
  Users,
  Video,
} from "lucide-react";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { DashboardTopbar } from "@/components/layout/DashboardTopbar";

const iconClass = "h-4.5 w-4.5";
const items = [
  { href: "/admin", label: "Dashboard", icon: <LayoutDashboard className={iconClass} /> },
  { href: "/admin/teachers", label: "Manage Teachers", icon: <UserCog className={iconClass} /> },
  { href: "/admin/students", label: "Manage Students", icon: <Users className={iconClass} /> },
  { href: "/admin/books", label: "All Books", icon: <BookOpen className={iconClass} /> },
  { href: "/admin/recordings", label: "All Recordings", icon: <Video className={iconClass} /> },
  { href: "/admin/payments", label: "Payments", icon: <CreditCard className={iconClass} /> },
  { href: "/admin/settings", label: "Settings", icon: <Settings className={iconClass} /> },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-surface-50">
      <DashboardSidebar roleLabel="Admin" items={items} />
      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardTopbar title="Admin Dashboard" userName="Admin" />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
