"use client";

import { BarChart, Compass, Layout, List } from "lucide-react";

// import SidebarItem from "./SidebarItem";
import { usePathname } from "next/navigation";

const guestRoutes = [
  {
    icon: Layout,
    label: "Home",
    href: "/",
  },
  {
    icon: Compass,
    label: "About",
    href: "/about",
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/academy/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/academy/teacher/analytics",
  },
];
export default function SideNavbarRoutes() {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/academy/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {/* {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))} */}
    </div>
  );
}
