import React from 'react'
import { useGlobalContext } from '../context/context'
import StatItem from './StatItem'
import { MdPendingActions } from "react-icons/md";
import { FaPeopleArrows, FaRegHandshake} from "react-icons/fa";
import { BiNoEntry } from "react-icons/bi";

const StatsCont = () => {
  const {stats} = useGlobalContext()
  const defaultStats = [
    {
      title: "Applied",
      count: stats.Applied || 0,
      icon: <MdPendingActions />,
      color: '#e9b949',
      bcg: '#fcefc7'
    },
    {
      title: "Interview",
      count: stats.Interview || 0,
      icon: <FaPeopleArrows />,
      color: '#647acb',
      bcg: '#e0e8f9'
    },
    {
      title: "Offer",
      count: stats.Offer || 0,
      icon: <FaRegHandshake />,
      color: '#e9b949',
      bcg: '#f9e8d2'
    },
    {
      title: "Declined",
      count: stats.Declined|| 0,
      icon: <BiNoEntry />,
      color: '#e9b949',
      bcg: "#ffeeee"
    }
  ]

  return (
    <div className='grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-4'>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />
      })}
    </div>
  )
}

export default StatsCont