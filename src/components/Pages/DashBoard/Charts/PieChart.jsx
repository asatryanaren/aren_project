import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectChartBarState } from "../../../../features/dashboardSlice";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = () => {
  const dataBar = useSelector(selectChartBarState);
  const data = {
    labels: [],
    datasets: [
      {
        data: [50, 100, 150, 200, 300],
        borderColor: "blue",
        borderWidth: 1,
        pointBorderColor: "transparent",
        tension: 0.4,
        backgroundColor: [
          "#F1423D",
          "#DDB53D",
          "#FFFF00",
          "#1890FF",
          "#03C838",
        ],
      },
    ],
  };
  const options = {
    plugins: { legend: { display: false } },
    scales: {
      x: { display: false, grid: { display: false }, max: 5 },
      y: { display: false, grid: { display: false }, max: 5 },
    },
  };
  return <Pie data={data} options={options} />;
};
export default PieChart;
