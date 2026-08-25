import { Home, LayoutGrid, Settings, Wallet } from "lucide-react";
import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { DashboardTopbar } from "@/components/layout/DashboardTopbar";

const iconClass = "h-4.5 w-4.5";
const items = [
  { href: "/dashboard", label: "My Courses", icon: <Home className={iconClass} /> },
  { href: "/dashboard/library", label: "My Library", icon: <LayoutGrid className={iconClass} /> },
  { href: "/dashboard/purchases", label: "Payment History", icon: <Wallet className={iconClass} /> },
  { href: "/dashboard/settings", label: "Profile Settings", icon: <Settings className={iconClass} /> },
];

export default function StudentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-surface-50">
      <DashboardSidebar roleLabel="Student" items={items} />
      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardTopbar title="Student Dashboard" />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
