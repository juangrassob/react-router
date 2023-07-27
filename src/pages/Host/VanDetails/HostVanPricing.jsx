import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { van } = useOutletContext();

  return (
    <div className="mt-10">
      <p className="font-mono text-xl font-bold">
        ${van.price}
        <span className="text-sm font-light italic">/day</span>
      </p>
    </div>
  );
}
