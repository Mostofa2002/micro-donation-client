import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AvailableFood from "../pages/AvailableFood";
import ManageMyFood from "../pages/ManageMyFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/allFood"),
      },
      {
        path: "availableFood",
        element: <AvailableFood />,
      },
      {
        path: "manageMyFood",
        element: <ManageMyFood />,
      },
    ],
  },
]);

export default router;
