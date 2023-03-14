import React, { useState } from "react";
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import { useGlobalContext } from "../context/context";

function ChartCont() {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplied: data } = useGlobalContext();
  return (
    <div className="mt-16 text-center">
      <h4 className="text-center mb-3">Applications Per Month</h4>
      <button
        className="bg-transparent border-transparent capitalize text-teal-500 text-lg cursor-pointer"
        type="button"
        onClick={() => setBarChart(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
        </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </div>
  );
}

export default ChartCont;
