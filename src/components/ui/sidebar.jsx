import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Sidebar = ({ items }) => (
  <div className="w-64 bg-gray-800 text-white flex flex-col">
    <div className="p-4 text-2xl font-bold">Dress Shop</div>
    <nav className="flex-1 p-4 space-y-2">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            cn(
              "block p-2 rounded hover:bg-gray-700",
              isActive ? "bg-gray-700" : "bg-gray-800"
            )
          }
        >
          {item.icon}
          <span className="ml-2">{item.title}</span>
        </NavLink>
      ))}
    </nav>
  </div>
);