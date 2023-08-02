import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Badge from "../../components/Badge";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [params, setParams] = useSearchParams();

  console.log(params.toString());

  const currentTypeFilter = params.get("type");

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        if (!currentTypeFilter) {
          setVans(data.vans);
          return;
        }

        const filteredVans = data.vans.filter(
          (van) => van.type === currentTypeFilter
        );

        setVans(filteredVans);
      });
  }, [params]);

  const vanElements = vans.map((van) => (
    <Link key={van.id} state={{ search: params.toString() }} to={`${van.id}`}>
      <div>
        <img className="rounded-md" src={van.imageUrl} />
        <div className="text-md mb-0 mt-3 flex justify-between font-mono font-bold">
          <h3 className="">{van.name}</h3>
          <p className="flex flex-col gap-0">
            ${van.price}
            <span className="text-xs font-light italic">/day</span>
          </p>
        </div>
        <Badge type={van.type} />
      </div>
    </Link>
  ));

  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      <h1 className="px-5 pt-12 font-mono text-2xl font-bold">
        Explore our van options
      </h1>
      <nav className="flex gap-3 p-10">
        <Link to="?type=simple">
          <Badge type="simple" />
        </Link>
        <Link to="?type=rugged">
          <Badge type="rugged" />
        </Link>

        <Link to="?type=luxury">
          <Badge type="luxury" />
        </Link>
        {currentTypeFilter && (
          <Link to=".">
            <span>Clear filters</span>
          </Link>
        )}
      </nav>

      <div className="grid grid-cols-2 gap-5 p-5">{vanElements}</div>
    </div>
  );
}
