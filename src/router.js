import React from "react";
import { useRoutes } from "react-router";
import Auth from "./layouts/Auth/authLayout";
import DashboardLayout from "./layouts/dashboardLayount/dashboardLayout";
import Challenge from "./pages/challenge/challenge";
import Login from "./pages/login/login";
import Scoreboard from "./pages/scoreboard/scoreboard";
<<<<<<< HEAD
import Scoreboard2 from "./pages/scoreboard2/scoreboard2";
=======
import { ProtectedRoutes } from "./services/protectedRoute";
>>>>>>> 397af5cdf0705850b64208a63993146d02109b83

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
    {
      path: "/dashboard/scoreboard2",
      element: <Scoreboard2 />
    },
  ]);
};

export default Routes;
