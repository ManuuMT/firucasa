import { createBrowserRouter } from "react-router-dom";
import { About, Adoptions, DogInfo, Home, NotFound } from "../pages";
import { PublicLayout } from "../layout";
import { LoaderDogInfo } from "../pages/DogInfo/DogInfo";

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
      {
        element: <Adoptions />,
        path: "/adoptions",
      },
      {
        element: <DogInfo />,
        path: "/adoptions/:id",
        loader: LoaderDogInfo,
      },
    ],
  },
]);
