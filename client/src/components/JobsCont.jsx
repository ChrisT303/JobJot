import React, { useEffect } from "react";
import { useGlobalContext } from "../context/context";
import LoadingSpinner from "./LoadingSpinner";
import SingleJob from "./SingleJob";
import BtnContPg from "./BtnContPg";

const JobsCont = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    allJobs,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages,
  } = useGlobalContext();

  useEffect(() => {
    getJobs();
  }, [page, search, searchStatus, searchType, sort]);

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
    <div className="job-wrapper">
      {/* {showAlert && <Alert />} */}
      <h5>
        {allJobs} Job{jobs.length > 1 && "s"} Found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <SingleJob key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <BtnContPg />}
    </div>
  );
};

export default JobsCont;
