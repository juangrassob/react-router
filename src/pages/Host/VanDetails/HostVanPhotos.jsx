import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { van } = useOutletContext();

  return (
    <div className="mt-10">
      <div className="aspect-square w-1/6 overflow-hidden">
        <img className="mb-10 rounded-sm" src={van.imageUrl} />
      </div>
    </div>
  );
}
