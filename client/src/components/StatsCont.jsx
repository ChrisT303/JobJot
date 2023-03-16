import React from "react";
import { useGlobalContext } from "../context/context";
import StatItem from "./StatItem";
import { MdPendingActions } from "react-icons/md";
import { FaPeopleArrows, FaRegHandshake } from "react-icons/fa";
import { BiNoEntry } from "react-icons/bi";

const StatsCont = () => {
  const { stats } = useGlobalContext();
  const defaultStats = [
    {
      title: "Applied",
      count: stats.Applied || 0,
      icon: <MdPendingActions className="yellow" />,
      color: "yellow",
      bcg: "#fcefc7"
    },
    {
      title: "Interview",
      count: stats.Interview || 0,
      icon: <FaPeopleArrows className="blue" />,
      color: "blue",
      bcg: "#e0e8f9"
    },
    {
      title: "Offer",
      count: stats.Offer || 0,
      icon: <FaRegHandshake className="green" />,
      color: "green",
      bcg: "#d6f4e6"
    },
    {
      title: "Declined",
      count: stats.Declined || 0,
      icon: <BiNoEntry className="red" />,
      color: "red",
      bcg: "#ffeeee"
    },
  ];
  
  

  return (
    <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-4">
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </div>
  );
};

export default StatsCont;



