import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AvailableFood from "../pages/AvailableFood";
import ManageMyFood from "../pages/ManageMyFood";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/allFood/limited"),
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
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
