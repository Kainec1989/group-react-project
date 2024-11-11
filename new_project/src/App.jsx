import { RouterProvider } from "react-router-dom";
import router from "./utils/Router";
import MyContextProvider from "./assets/components/ContextProvider";

function App() {
  return (
    <MyContextProvider>
      <RouterProvider router={router} />
    </MyContextProvider>
  );
}

export default App;
