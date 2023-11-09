import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AvailableFood from "../components/AllFood/AvailableFood";
import ManageMyFood from "../components/MyFoodAdded/ManageMyFood";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddFood from "../components/AddFood/AddFood";
import SingleFood from "../components/singleFood/SingleFood";
import PrivateRoute from "../private/PrivateRoute";
import ManageSingleFood from "../components/ManageSingleFood/ManageSingleFood";
import Update from "../components/update/Update";
import MyFoodRequest from "../components/myFoodRequest/MyFoodRequest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://micro-server-side.vercel.app/allFood/limited"),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://micro-server-side.vercel.app/updates/${params.id}`),
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
        element: (
          <PrivateRoute>
            <SingleFood />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://micro-server-side.vercel.app/singleFood/${params.id}`),
      },
      {
        path: "manageSingleFood/:id",
        element: (
          <PrivateRoute>
            <ManageSingleFood />
          </PrivateRoute>
        ),
      },

      {
        path: "myFoodRequest",
        element: (
          <PrivateRoute>
            <MyFoodRequest />
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
