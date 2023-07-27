import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => (
    <Link key={van.id} to={`/host/vans/${van.id}`}>
      <div className="flex gap-5 rounded-sm bg-white p-2">
        <div className="aspect-square w-1/6 overflow-hidden">
          <img className="rounded-md " src={van.imageUrl} />
        </div>
        <div className="text-md mb-0 mt-3  font-mono">
          <h3 className="font-bold">{van.name}</h3>
          <p>
            ${van.price}
            <span className="text-xs font-light italic">/day</span>
          </p>
        </div>
      </div>
    </Link>
  ));

  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      <h1 className="px-5 pt-12 font-mono text-2xl font-bold">
        Your listed vans
      </h1>
      <div className="flex flex-col gap-3 p-5">{vanElements}</div>
    </div>
  );
}
