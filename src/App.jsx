import "./App.css";
import RootsLayout from "./layout/RootLayouts";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// pages
import Home from "./pages/Home";
import IdentifyOrigin from "./pages/IdentifyOrigin";
import NotFound from "./pages/NotFound";
import PrintData from "./pages/PrintData";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootsLayout />}>
        <Route index element={<Home />} />
        <Route path="identify-origin/hotel" element={<IdentifyOrigin />} />
        <Route path="print-data" element={<PrintData />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
