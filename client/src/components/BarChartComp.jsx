import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChartComp = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartNode = chartRef.current;
    const chart = new Chart(chartNode, {
      type: "bar",
      data: {
        labels: data.map((d) => d.date),
        datasets: [
          {
            label: "Applications",
            data: data.map((d) => d.count),
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default BarChartComp;

