import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
  return (
    <div className="bg-[#FFF7ED]">
      <nav className="flex gap-2">
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            isActive ? "px-2 font-mono underline" : "px-2 font-mono"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="income"
          className={({ isActive }) =>
            isActive ? "px-2 font-mono underline" : "px-2 font-mono"
          }
        >
          Income
        </NavLink>

        <NavLink
          to="vans"
          className={({ isActive }) =>
            isActive ? "px-2 font-mono underline" : "px-2 font-mono"
          }
        >
          Vans
        </NavLink>

        <NavLink
          to="reviews"
          className={({ isActive }) =>
            isActive ? "px-2 font-mono underline" : "px-2 font-mono"
          }
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
