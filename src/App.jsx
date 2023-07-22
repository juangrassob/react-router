import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../server";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";

export default function App() {
  return (
    <BrowserRouter>
      <header className="flex justify-between bg-[#FFF7ED] p-4 py-8 font-mono">
        <Link to="/" className="text-2xl font-bold">
          #VANLIFE
        </Link>
        <nav>
          <Link to="/about" className="font-mono">
            About
          </Link>
          <Link to="/vans" className="pl-5 font-mono">
            Vans
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <footer className="bg-[#252525] p-6 text-center">
        <span className="text-center font-mono text-[#AAAAAA] ">
          Ⓒ 2022 #VANLIFE
        </span>
      </footer>
    </BrowserRouter>
  );
}
