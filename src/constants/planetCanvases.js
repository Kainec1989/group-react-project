import { lazy } from "react";

export const planetCanvases = {
  mercury: lazy(() => import("../components/Mercury")),
  venus: lazy(() => import("../components/Venus")),
  earth: lazy(() => import("../components/Earth")),
  mars: lazy(() => import("../components/Mars")),
  jupiter: lazy(() => import("../components/Jupiter")),
  saturn: lazy(() => import("../components/Saturn")),
  uranus: lazy(() => import("../components/Uranus")),
  neptune: lazy(() => import("../components/Neptune")),
};
