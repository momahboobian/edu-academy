import Logo from "../../../components/Logo";

export default function SideNavbar() {
  return (
    <div className="h-full border-r flex flex-col overflow-auto bg-white shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <h1>This is Side Navbar</h1>
      </div>
    </div>
  );
}
