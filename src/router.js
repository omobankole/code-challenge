import React from "react";
import { useRoutes } from "react-router";
import Auth from "./layouts/Auth/authLayout";
import DashboardLayout from "./layouts/dashboardLayount/dashboardLayout";
import Challenge from "./pages/challenge/challenge";
import Login from "./pages/login/login";
import Scoreboard from "./pages/scoreboard/scoreboard";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Auth />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Challenge />,
        },
        {
          path: "/dashboard/scoreboard",
          element: <Scoreboard />,
        },
      ],
    },
  ]);
};

export default Routes;
