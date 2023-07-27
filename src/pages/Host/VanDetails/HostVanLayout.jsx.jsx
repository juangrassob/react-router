import { useEffect, useState } from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";
import { Badge } from "../../Vans/Vans";

export default function HostVanLayout() {
  const { id } = useParams();

  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, []);

  if (!van) return <span>Loading...</span>;

  return (
    <div className="min-h-screen bg-[#FFF7ED] p-5">
      <div className="p-5">
        <Link to=".." relative="path">
          <span className="">← Back to all vans</span>
        </Link>
      </div>
      <div className="bg-white p-5">
        <div className="flex items-center gap-5">
          <div className="aspect-square w-1/3 overflow-hidden">
            <img className="mb-10 rounded-sm" src={van.imageUrl} />
          </div>
          <div>
            <Badge type={van.type} />
            <h3 className="mb-0  mt-3 font-mono text-xl font-bold">
              {van.name}
            </h3>
            <p className="font-mono text-xl font-bold">
              ${van.price}
              <span className="text-sm font-light italic">/day</span>
            </p>
          </div>
        </div>
        <nav className="mt-5 flex gap-2 text-sm">
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              isActive ? "px-2 font-mono underline" : "px-2 font-mono"
            }
          >
            Detials
          </NavLink>

          <NavLink
            to="pricing"
            className={({ isActive }) =>
              isActive ? "px-2 font-mono underline" : "px-2 font-mono"
            }
          >
            Pricing
          </NavLink>

          <NavLink
            to="photos"
            className={({ isActive }) =>
              isActive ? "px-2 font-mono underline" : "px-2 font-mono"
            }
          >
            Photos
          </NavLink>
        </nav>

        <Outlet context={{ van }} />
      </div>
    </div>
  );
}
