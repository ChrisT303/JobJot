import React from "react";

const StatItem = ({ title, count, icon, color, bcg }) => {
  return (
<div className={`border rounded-md p-4 flex flex-col items-center justify-between ${color}`} style={{backgroundColor: bcg}}>
  <header className="flex items-center">
    <span className="text-3xl font-bold mr-8">{count}</span>
    <div className="text-3xl">{icon}</div>
  </header>
  <h5 className="mt-4 text-lg font-bold">{title}</h5>
</div>


  );
};

export default StatItem;



  





