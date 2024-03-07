import { Route, Routes } from "react-router-dom";
import Plans from "./Plans";
import { Chart } from "@/features/bitcoins";

export const PlanRoute = () => {
  return (
    <Routes>
      <Route path="" element={<Plans />} />
      <Route path="/chart" element={<Chart />} />
      {/* Example: You can add more routes related to plan feature here */}
      {/* <Route path="/create" element={<CreatePlan />} /> */}
    </Routes>
  );
};
