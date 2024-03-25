import "../sass/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import SideNavbar from "./_components/SideNavbar";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <SideNavbar />
      </div>

      {children}
    </div>
  );
}
