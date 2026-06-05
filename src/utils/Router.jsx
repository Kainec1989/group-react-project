import { createBrowserRouter } from "react-router-dom";
import RouteSuspense from "../components/RouteSuspense";
import {
  GalaxyPage,
  PlanetPage,
  Apod,
  PageNotFound,
} from "./lazyPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RouteSuspense>
        <GalaxyPage />
      </RouteSuspense>
    ),
  },
  {
    path: "/apod",
    element: (
      <RouteSuspense>
        <Apod />
      </RouteSuspense>
    ),
  },
  {
    path: "/:planetSlug",
    element: (
      <RouteSuspense>
        <PlanetPage />
      </RouteSuspense>
    ),
  },
  {
    path: "*",
    element: (
      <RouteSuspense>
        <PageNotFound />
      </RouteSuspense>
    ),
  },
]);

export default router;
