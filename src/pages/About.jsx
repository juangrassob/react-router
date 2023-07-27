import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-[#FFF7ED] bg-cover pb-10">
      <img
        className="w-full"
        src="/about-image.svg"
        alt="Man on top of as van looking at the sky"
      />
      <div>
        <h1 className="px-5 pt-10 text-2xl font-bold">
          Don't squeeze in a sedan when you could relax ina van.
        </h1>
        <p className="p-5 text-sm">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="p-5 text-sm">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="mx-5 mt-10 rounded-md bg-[#FFCC8D] p-10">
          <h2 className="mb-5 font-mono text-xl font-bold">
            Your destination is waiting. <br /> Your van is ready.
          </h2>
          <Link
            to="/vans"
            className=" rounded-lg bg-black px-6 py-3 text-sm font-bold text-white"
          >
            Explore our vans
          </Link>
        </div>
      </div>
    </div>
  );
}
