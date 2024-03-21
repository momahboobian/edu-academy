import "../sass/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";

import SideNavbar from "./_components/SideNavbar";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        {/* <SideNavbar /> */}
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        {/* <SideNavbar /> */}
      </div>
      <main className="h-full">{children}</main>
    </div>
  );
}
