import { Suspense } from "react";
import PageLoader from "./PageLoader";

function RouteSuspense({ children }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}

export default RouteSuspense;
