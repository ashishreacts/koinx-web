import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import revenueData from "../data/revenueData.json";
import { CryptIcon, CurrencyCode } from "@/components/Elements";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const data = {
  labels: revenueData.map((data) => data.label),
  datasets: [
    {
      label: "Revenue",
      data: revenueData.map((data) => data.revenue),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Cost",
      data: revenueData.map((data) => data.cost),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
export const CreateChart = () => {
  const chartStyle = {
    width: "50rem",
    height: "65rem",
  };
  return (
    <div>
      <CryptIcon currencyCode={CurrencyCode.BTC} />
      <Line options={options} data={data} style={chartStyle} />
    </div>
  );
};
