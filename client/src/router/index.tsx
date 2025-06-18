import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "../components/pages/Home";
import About from "../components/pages/About";
import NotFound from "../components/pages/NotFound";
import Layout from "../components/layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
