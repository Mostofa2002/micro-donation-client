import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AvailableFood from "../pages/AvailableFood";
import ManageMyFood from "../pages/ManageMyFood";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddFood from "../components/AddFood/AddFood";
import SingleFood from "../components/singlFood/SingleFood";
import PrivateRoute from "../private/PrivateRoute";
import ManageSingleFood from "../components/ManageSingleFood/ManageSingleFood";
import Update from "../components/update/Update";

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

        element: (
          <PrivateRoute>
            <ManageMyFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/foodAdd",

        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/singleFood/:id",
        element: <SingleFood />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singleFood/${params.id}`),
      },
      {
        path: "/manageSingleFood/:id",
        element: (
          <PrivateRoute>
            <ManageSingleFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
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
