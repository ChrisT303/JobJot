import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const AreaChartComp = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartNode = chartRef.current;
    const chart = new Chart(chartNode, {
      type: "line",
      data: {
        labels: data.map((d) => d.date),
        datasets: [
          {
            label: "Applications",
            data: data.map((d) => d.count),
            fill: true,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
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
    <div className="chart-container">
      <canvas ref={chartRef} />
    </div>
  );
  
};

export default AreaChartComp;
