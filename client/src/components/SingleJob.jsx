import React from "react";
import moment from "moment";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";
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
  const date = moment(createdAt).format("MMM D YYYY");

  let shape;
  switch (status) {
    case "Applied":
      shape = "diamond";
      break;
    case "Interview":
      shape = "star";
      break;
    case "Offer":
      shape = "circle";
      break;
    case "Declined":
      shape = "square";
      break;
    default:
      shape = "diamond";
  }

  const firstLetter = company.charAt(0);

  return (
    <div className="job-card">
      <header className="card-header">
        <div className={`main-icon ${shape}`}>{firstLetter}</div>
        <div className="info">
          <h5 className="capitalize">{position}</h5>
          <p className="capitalize">{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="info-wrapper">
          <div className="left-info">
            <JobInfo icon={<MdLocationCity />} text={jobLocation} />
            <JobInfo icon={<GoBriefcase />} text={jobType} />
          </div>
          <div className="right-info">
            <JobInfo icon={<GoCalendar />} text={date} />
            <div
              className={`status ${
                status === "Applied" ? "applied" : status.toLowerCase()
              }`}
            >
              {status}
            </div>
          </div>
        </div>
        <footer>
          <div className="flex flex-col gap-2">
            <Link
              to="/add-job"
              className="btn edit-btn hover:scale-110"
              onClick={() => setJobEdit(_id)}
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn hover:scale-110"
              onClick={() => deleteJob(_id)}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SingleJob;


