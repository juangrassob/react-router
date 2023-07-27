import { useOutletContext } from "react-router-dom";

export default function HostVanDetails() {
  const [van, setVan] = useOutletContext();

  return (
    <div className="mt-10">
      {" "}
      <p className="mt-2 text-xs">
        <span className="font-bold">Name</span>: {van.name}
      </p>
      <p className="mt-2 text-xs">
        <span className="font-bold">Category</span>: {van.type}
      </p>
      <p className="mt-2 text-xs">
        <span className="font-bold">Description</span>: {van.description}
      </p>
    </div>
  );
}
