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
import { CryptIcon, CurrencyCode, Typography } from "@/components/Elements";
import { Chip, Divider, Grid } from "@mui/material";
import { ArrowDropUp, CurrencyRupee } from "@mui/icons-material";

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
    width: "40rem",
    height: "40rem",
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <Typography component="h1" variant="h4">
            <CryptIcon currencyCode={CurrencyCode.BTC} />
            Bitcoin
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography
            component="h1"
            variant="h4"
            sx={{ color: "rgba(93,102,123,255)" }}
            fontWeight={550}
          >
            BTC
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Chip
            label="#Rank 1"
            sx={{
              height: "2rem",
            }}
          />
        </Grid>
      </Grid>

      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={3}>
          <Typography component="h1" variant="h3">
            $46,953.04
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography
            component="h1"
            variant="h6"
            sx={{ color: "green", backgroundColor: "rgb(98, 247, 84, 0.16)" }}
          >
            <ArrowDropUp sx={{ verticalAlign: "middle" }} />
            2.51%
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography
            component="h1"
            variant="h6"
            sx={{ color: "rgba(93,102,123,255)" }}
          >
            (24H)
          </Typography>
        </Grid>
      </Grid>
      <Typography sx={{ mb: 1 }}>
        <CurrencyRupee sx={{ verticalAlign: "middle" }} />
        39,42,343
      </Typography>
      <Divider />

      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={6}>
          <Typography component="h1" variant="h5">
            Bitcoin Price Chart (USD)
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Chip
            label="1H"
            sx={{
              height: "24H",
            }}
          />
          <Chip
            label="7D"
            sx={{
              height: "2rem",
              ml: 1,
            }}
          />
          <Chip
            label="1M"
            sx={{
              height: "2rem",
              ml: 1,
            }}
          />
          <Chip
            label="3M"
            sx={{
              height: "2rem",
              ml: 1,
            }}
          />
          <Chip
            label="6M"
            sx={{
              height: "2rem",
              ml: 1,
            }}
          />
          <Chip
            label="1Y"
            sx={{
              height: "2rem",
              ml: 1,
            }}
          />
          <Chip
            label="ALL"
            sx={{
              height: "2rem",
              ml: 1,
              mr: 1,
            }}
          />
        </Grid>
      </Grid>
      <Line options={options} data={data} style={chartStyle} />
    </div>
  );
};
