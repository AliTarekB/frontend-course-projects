import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
 } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Mainlayout from "./layout/mainlayout";

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Mainlayout />}>
    <Route index element={<Home />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/product/:id" element={<ProductDetails />} />
    </Route>
   )
  );


  return <RouterProvider router={routes} />;
}

export default App
