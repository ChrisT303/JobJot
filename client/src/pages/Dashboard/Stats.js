import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/context";
import { StatsCont, LoadingSpinner, ChartCont } from "../../components";

const Stats = () => {
  const { getStats, isLoading, monthlyApplied } = useGlobalContext();

  useEffect(() => {
    getStats();
  }, []);

  if (isLoading) {
    return <LoadingSpinner center />;
  }
  return <>
    <StatsCont />
    {monthlyApplied.length > 0 && <ChartCont />}
   
  </>;
};

export default Stats;
