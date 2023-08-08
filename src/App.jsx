import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  Route,
} from "react-router-dom";
import "../server";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetails, { loader as vanDetailsLoader } from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVanLayout from "./pages/Host/VanDetails/HostVanLayout.jsx";
import HostVans from "./pages/Host/HostVans.jsx";
import HostVanDetails from "./pages/Host/VanDetails/HostVanDetails";
import HostVanPricing from "./pages/Host/VanDetails/HostVanPricing";
import HostVanPhotos from "./pages/Host/VanDetails/HostVanPhotos";
import NotFound from "./pages/Vans/NotFound";
import Error from "./components/Error";
import Login from "./pages/Authentication/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route
        path="/vans/:id"
        element={<VanDetails />}
        loader={vanDetailsLoader}
      />

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="vans/:id" element={<HostVanLayout />}>
          <Route index element={<HostVanDetails />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
