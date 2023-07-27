import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between bg-[#FFF7ED] p-4 py-8 font-mono">
      <Link to="/" className="text-2xl font-bold">
        #VANLIFE
      </Link>
      <nav>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? "px-2 font-mono underline" : "px-2 font-mono"
          }
        >
          About
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
          to="host"
          className={({ isActive }) =>
            isActive ? "px-2 font-mono underline" : "px-2 font-mono"
          }
        >
          Host
        </NavLink>
      </nav>
    </header>
  );
}
