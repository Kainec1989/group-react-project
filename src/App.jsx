import { RouterProvider } from "react-router-dom";
import router from "./utils/Router";
import PlanetProvider from "./context/PlanetProvider";

function App() {
  return (
    <PlanetProvider>
      <RouterProvider router={router} />
    </PlanetProvider>
  );
}

export default App;
