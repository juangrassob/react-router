import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      <h1 className="px-5 pt-12 font-mono text-2xl font-bold">Not Found</h1>
      <nav className="flex gap-3 p-10">
        <Link to="/">
          <span>Return to home page</span>
        </Link>
      </nav>
    </div>
  );
}
