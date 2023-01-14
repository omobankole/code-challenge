import React from "react";
import { useRoutes } from "react-router";
import Auth from "./layouts/Auth/authLayout";
import DashboardLayout from "./layouts/dashboardLayount/dashboardLayout";
import Challenge from "./pages/challenge/challenge";
import Login from "./pages/login/login";
import Scoreboard from "./pages/scoreboard/scoreboard";
import { ProtectedRoutes } from "./services/protectedRoute";

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
      element: ProtectedRoutes(DashboardLayout),
      children: [
        {
          path: "/dashboard/challenge",
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
