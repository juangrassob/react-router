import { Link, useLoaderData, useLocation } from "react-router-dom";
import Badge from "../../components/Badge";
import { getVanById } from "../../api";

export default function VanDetails() {
  const location = useLocation();
  const van = useLoaderData();

  return (
    <div className="min-h-screen bg-[#FFF7ED] p-5">
      <Link to={`..?${location.state?.search || ""}`} relative="path">
        <span>{`← Back to ${
          location.state?.search.split("=")[1] || "all"
        } vans`}</span>
      </Link>

      <img className="mb-10 rounded-md pt-5" src={van.imageUrl} />
      <Badge className="" type={van.type} />
      <h3 className="mb-0  mt-3 font-mono text-2xl font-bold">{van.name}</h3>
      <p className="font-mono text-xl font-bold">
        ${van.price}
        <span className="text-sm font-light italic">/day</span>
      </p>
      <p className="mt-2 text-xs">{van.description}</p>
      <div className="flex">
        {" "}
        <Link
          to="/vans"
          className="my-5 w-full max-w-md self-center rounded-md bg-orange-400 p-2 text-center font-mono text-white"
        >
          Find your van
        </Link>
      </div>
    </div>
  );
}

export function loader({ params }) {
  return getVanById(params.id);
}
