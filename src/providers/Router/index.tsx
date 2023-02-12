import { createHashRouter, RouterProvider } from "react-router-dom";
import Other from "../../pages/Other";
import Layout from "../../components/organisms/Layout";
import Conversion from "../../pages/Conversion";
import { ROUTES } from "./routes";

const router = createHashRouter([
  {
    path: ROUTES.ROOT,
    element: <Layout />,
    errorElement: <h1>Something went wrong</h1>,
    children: [
      {
        index: true,
        element: <Conversion />,
        errorElement: <h1>Something went wrong</h1>,
      },
      {
        path: ROUTES.OTHER,
        element: <Other />,
        errorElement: <h1>Something went wrong</h1>,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
