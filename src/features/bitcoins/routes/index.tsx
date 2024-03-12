import { Chart } from "./Chart";
import { Route, Routes } from "react-router-dom";

export const CreateChartRoute = () => {
  return (
    <Routes>
      <Route path="" element={<Chart />} />
    </Routes>
  );
};
