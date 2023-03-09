// SingleJob.js
import React from "react";
import moment from "moment";
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
      <div className="grid gap-4 gap-x-2 md:grid-cols-1 lg:grid-cols-2 bg-yellow-200 rounded-md shadow-md w-2/3 mx-auto mb-4 h-24">
        <header className="p-4 border-gray-500 flex items-center">
          <div className="relative h-12 w-12 flex items-center justify-center bg-blue-500 rounded-full text-xl font-bold uppercase text-white mr-4 char-act">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {company.charAt(0)}
            </div>
          </div>
          <div className="flex-1">
            <h5 className="mb-1 capitalize">{position}</h5>
            <p className="m-0 capitalize text-teal-400">{company}</p>
          </div>
        </header>
      </div>
    );
  };
  
  export default SingleJob;
  
  
  
  


