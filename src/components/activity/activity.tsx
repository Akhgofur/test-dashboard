import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box } from "@mui/material";
import { StyledHeading } from "../dashboard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const data = {
  labels,
  datasets: [
    {
      label: "Activity",
      data: labels.map(() => Math.floor(Math.random() * 100)),
      borderColor: "#2563EB",
      backgroundColor: "#2563EB",
    },
  ],
};

export const Activity = () => {
  return (
    <Box
      sx={{
        p: 3,
        bgcolor: "#fff",
        borderRadius: "12px",
        width: "fit-content",
        flexGrow: "1",
      }}
    >
      <StyledHeading mb={2}>Activity</StyledHeading>
      <Line options={options} data={data} />
    </Box>
  );
};
