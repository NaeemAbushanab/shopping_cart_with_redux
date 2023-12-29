import { createBrowserRouter } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import HomeLayout from "./HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
export { router };
