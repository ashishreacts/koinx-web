import { PlanRoute } from "@/features/plans";
import { Navigate, RouteObject } from "react-router-dom";
import { MainLayoutWrapper } from "./MainLayoutWrapper";
import { CreateChartRoute } from "@/features/bitcoins";

export const ProtectedRoutes: RouteObject[] = [
  {
    path: "/app",
    element: <MainLayoutWrapper />,
    children: [
      { path: "", element: <Navigate to="/app/plans" /> }, // Redirect /app to /app/plans
      { path: "/app/plans/*", element: <PlanRoute /> },
      { path: "", element: <Navigate to="/app/chart" /> }, // Redirect /app to /app/plans
      { path: "/app/chart/*", element: <CreateChartRoute /> },
    ],
  },
];
