import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[url(/home-background.svg)] bg-cover">
      <div className="flex flex-col justify-center p-6 pt-16 ">
        <h1 className="pb-4 font-mono text-3xl font-bold text-white">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="text-m font-mono text-white">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link
          to="/vans"
          className="my-12 w-full max-w-md self-center rounded-md bg-orange-400 p-2 text-center font-mono text-white"
        >
          Find your van
        </Link>
      </div>
    </div>
  );
}
