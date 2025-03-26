import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const App = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    axios.get("http://localhost:8083/api/charts").then((response) => {
      const labels = response.data.map((item) => item.label);
      const values = response.data.map((item) => item.value);

      setChartData({
        labels,
        datasets: [
          {
            label: "Data Values",
            data: values,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
        ],
      });
    });
  }, []);

  return (
    <div style={{ width: "50%", margin: "50px auto" }}>
      <h2>Dashboard Chart</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default App;
