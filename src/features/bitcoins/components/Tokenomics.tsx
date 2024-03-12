import { Typography } from "@/components/Elements";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Tokenomics = () => {
  const data = {
    labels: ["Crowdsale investors: 80%", "Foundation: 20%"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["blue", "orange"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Typography component="h1" variant="h5">
        Tokenomics
      </Typography>
      <Typography component="h2" variant="h6" sx={{ mt: 1 }}>
        Initial Distribution
      </Typography>
      <div style={{ width: "30%" }}>
        <Doughnut data={data} />
      </div>
      <Typography component="p" sx={{ mb: 1 }} align="justify">
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
        pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
        morbi sodales odio sed rhoncus.
      </Typography>
    </div>
  );
};
