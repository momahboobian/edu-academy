import Logo from "../../../components/Logo";
import SidebarRoutes from "./SidebarRoutes";

export default function Sidebar() {
  return (
    <div className="h-full border-r flex flex-col overflow-auto bg-white shadow-sm">
      <div className="p-6">
        <Logo size={130} color="#0369a1" invert="1" />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
}
