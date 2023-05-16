import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectChartBarState } from "../../../../features/dashboardSlice";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = () => {
  const dataBar = useSelector(selectChartBarState);
  const data = {
    labels: dataBar.map((data) => data.date),
    datasets: [
      {
        data: dataBar.map((data) => data.price),
        borderColor: "blue",
        borderWidth: 2,
        pointBorderColor: "blue",
        pointRadius: 3,
        tension: 0.4,
        backgroundColor: "#1890FF",
        fill: true,
      },
    ],
  };
  const options = {
    plugins: { legend: { display: false } },
    scales: {
      x: {
        display: false,
        grid: { display: false },
        max: 5,
      },
    },
  };
  return <Line data={data} options={options} />;
};
export default LineChart;
