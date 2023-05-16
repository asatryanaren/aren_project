import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectChartBarState } from "../../../../features/dashboardSlice";

const BarChart = () => {
  const dataBar = useSelector(selectChartBarState);
  const data = {
    labels: dataBar.map((data) => data.date),
    datasets: [
      {
        data: dataBar.map((data) => data.price),
        backgroundColor: ["yellow", "#EDC241", "#1890FF"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: { legend: { display: false } },
    scales: {
      x: { display: false, grid: { display: false }, max: 6 },
      y: { max: 100 },
    },
  };

  return <Bar data={data} options={options} />;
};
export default BarChart;
