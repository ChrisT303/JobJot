import React from "react";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const BarChartComp = ({data}) => {
  return (

    <div>
      <h2>BarChart</h2>
    </div>
    // <ResponsiveContainer width="100%" height={300}>
    //     <BarChart data={data} margin={{top:50}}/>
    //     <CartesianGrid strokeDasharray='3 3'/>
    //     <XAxis dataKey='date'/>
    //     <YAxis allowDecimals={false}/>
    //     <Tooltip/>
    //     <Bar dataKey='count' fill='#8884d8' barSize={75}/>
    // </ResponsiveContainer>
  );
};

export default BarChartComp;