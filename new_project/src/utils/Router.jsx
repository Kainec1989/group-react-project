import { createBrowserRouter } from "react-router-dom";
import Home from "../assets/pages/Home.jsx";
import MercuryPage from "../assets/pages/MercuryPage.jsx";
import VenusPage from "../assets/pages/VenusPage.jsx";
import MarsPage from "../assets/pages/MarsPage.jsx";
import JupiterPage from "../assets/pages/JupiterPage.jsx";
import SaturnPage from "../assets/pages/SaturnPage.jsx";
import UranusPage from "../assets/pages/UranusPage.jsx";
import NeptunePage from "../assets/pages/NeptunePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mercury",
    element: <MercuryPage />,
  },
  {
    path: "/venus",
    element: <VenusPage />,
  },
  {
    path: "/mars",
    element: <MarsPage />,
  },
  {
    path: "/jupiter",
    element: <JupiterPage />,
  },
  {
    path: "/saturn",
    element: <SaturnPage />,
  },
  {
    path: "/uranus",
    element: <UranusPage />,
  },
  {
    path: "/neptune",
    element: <NeptunePage />,
  },
]);

export default router;