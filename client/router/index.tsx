import { createBrowserRouter } from "react-router-dom";
import { Home, NotFound } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
]);
