import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Main from "../layout/Main/Main";
import BLog from "../pages/Blog/BLog";
import Categories from "../pages/Categories/Categories";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddProduct from "../pages/Dashboard/pages/AddProduct/AddProduct";
import AllBuyers from "../pages/Dashboard/pages/AllBuyers/AllBuyers";
import AllSellers from "../pages/Dashboard/pages/AllSellers/AllSellers";
import MyOrder from "../pages/Dashboard/pages/MyOrder/MyOrder";
import MyProducts from "../pages/Dashboard/pages/MyProducts/MyProducts";
import ReportedProducts from "../pages/Dashboard/pages/ReportedProducts/ReportedProducts";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <BLog />,
      },
      {
        path: "/categories/:id",
        element: (
          <PrivateRoute>
            <Categories />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/allbuyers",
        element: <AllBuyers />,
      },
      {
        path: "/dashboard/allsellers",
        element: <AllSellers />,
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts />,
      },
      {
        path: "/dashboard/myorders",
        element: <MyOrder />,
      },
      {
        path: "/dashboard/reportedproducts",
        element: <ReportedProducts />,
      },
    ],
  },
]);
