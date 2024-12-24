import { createBrowserRouter } from "react-router-dom";
import DashboardHome from "../components/dashboardPComponent/DashboardHome";
import UserLeaderboard from "../components/dashboardPComponent/UserLeaderboard";
import DashboardLayout from "../components/layouts/DashboardLayout";
import MainLayout from "../components/layouts/MainLayout";
import FaqPart from "../pages/Home/FaqPart";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "courses",
        element: <FaqPart></FaqPart>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "leaderboard",
        element: <UserLeaderboard></UserLeaderboard>,
      },
      {
        path: "",
        // element: <FaqPart></FaqPart>,
      },
    ],
  },
]);
export default router;
