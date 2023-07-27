import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Badge({ className, type }) {
  const firstLetter = type.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = type.slice(1);
  const capitalizedType = firstLetterCap + remainingLetters;

  let backGround = "bg-[#E17654]";

  switch (type) {
    case "simple":
      backGround = "bg-[#E17654]";

      break;

    case "rugged":
      backGround = "bg-[#115E59]";
      break;

    case "luxury":
      backGround = "bg-[#161616]";
      break;
  }

  return (
    <i className={`rounded-md px-3 py-1 text-white ${className} ${backGround}`}>
      {capitalizedType}
    </i>
  );
}

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => (
    <Link key={van.id} to={`/vans/${van.id}`}>
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
      <div className="grid grid-cols-2 gap-5 p-5">{vanElements}</div>
    </div>
  );
}
