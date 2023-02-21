import { createBrowserRouter } from "react-router-dom";
import { About, Home, NotFound } from "../pages";
import { PublicLayout } from "../layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <NotFound />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <About />,
        path: "/about",
      },
    ],
  },
]);
