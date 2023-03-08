import React, { useEffect } from "react";
import { useGlobalContext } from "../context/context";
import LoadingSpinner from "./LoadingSpinner";
import SingleJob from "./SingleJob";

const JobsCont = () => {
  const { getJobs, jobs, isLoading, page, allJobs } = useGlobalContext();

  useEffect(() => {
    getJobs();
  }, []);

  if (isLoading) {
    return (
      <div>
        <LoadingSpinner center />
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="mt-16">
        <h2>No Jobs Added Yet!</h2>
      </div>
    );
  }

  return (
    <div className="mt-16">
      <h5>{allJobs} Job{jobs.length > 1 &&'s'} Found</h5>
      <div className="grid grid-cols-2 gap-y-8">
         {jobs.map((job) =>{
            return <SingleJob key={job._id}{...job} />
         })}
      </div>
    </div>
  );
};

export default JobsCont;
