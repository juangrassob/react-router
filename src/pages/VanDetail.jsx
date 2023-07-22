import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Badge } from "./Vans";

export default function VanDetails() {
  const { id } = useParams();

  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, []);

  if (!van) return <span>Loading...</span>;

  return (
    <div className="bg-[#FFF7ED] p-5">
      <img className="mb-10 rounded-md" src={van.imageUrl} />
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
