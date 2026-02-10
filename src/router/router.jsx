import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Coverage from "../pages/Coverage/Coverage";
import AboutUs from "../pages/AboutUs/AboutUs";
import SendParcel from "../pages/SendParcel/SendParcel";
import PrivateRoute from "../routes/PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import MyParcel from "../pages/Dashboard/MyParcel/MyParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/coverage',
        Component: Coverage,
        loader: () => fetch('/serviceData.json')
      },
      {
        path: '/about',
        Component: AboutUs
      },
      {
        path: '/sendParcel',
        element : <PrivateRoute><SendParcel/></PrivateRoute>,
        loader: () => fetch('/serviceData.json')
      },
    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      { path: 'login', Component: Login },
      { path: 'register', Component: Register }
    ]
  },

  {
path : '/dashboard',
element : <DashboardLayout/>,
children : [
  {
    path : 'myParcel',
    Component : MyParcel
  }
]
  }
]);