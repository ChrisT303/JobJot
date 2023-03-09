import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import JobInfo from "./JobInfo";
import { MdLocationCity } from "react-icons/md";
import { GoBriefcase, GoCalendar } from "react-icons/go";

const SingleJob = ({
  _id,
  position,
  jobLocation,
  jobType,
  company,
  createdAt,
  status,
}) => {
  const { setJobEdit, deleteJob } = useGlobalContext();
  const date = moment(createdAt).format("MMM Do YYYY hh:mm A");
  return (
<div className="grid gap-4  md:grid-cols-1 lg:grid-cols-2 bg-yellow-200 rounded-md shadow-md w-2/3 mx-auto mb-4">
  <header className="p-4  border-gray-500 flex items-center">
    <div className="w-24 h-24 grid place-items-center bg-blue-500 rounded-md text-xl font-bold uppercase text-white mr-8">{company.charAt(0)}</div>
    <div>
      <h5 className="mb-1 capitalize">{position}</h5>
      <p className="m-0 capitalize text-teal-400">{company}</p>
    </div>
  </header>
</div>

  );
};

export default SingleJob;
