import React, { useState } from "react";
import BarChartComp from "./BarChartComp";
import AreaChartComp from "./AreaChartComp";
import { useGlobalContext } from "../context/context";

function ChartCont() {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplied } = useGlobalContext();

  return (
    <div className="mt-16 text-center">
      <h4 className="text-center mb-3">Applications Per Month</h4>
      <button
        className="bg-transparent border-transparent capitalize text-teal-500 text-lg cursor-pointer"
        type="button"
        onClick={() => setBarChart(!barChart)}
      >
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      <div style={{ width: "100%", height: "300px" }}>
        {barChart ? (
          <BarChartComp data={monthlyApplied} />
        ) : (
          <AreaChartComp data={monthlyApplied} />
        )}
      </div>
    </div>
  );
}

export default ChartCont;




