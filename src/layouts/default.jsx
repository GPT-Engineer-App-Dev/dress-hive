import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/ui/sidebar";
import { navItems } from "@/App";

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar items={navItems} />
      <main className="flex-grow p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;