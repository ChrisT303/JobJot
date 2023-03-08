import React from "react";
import moment from "moment";

const SingleJob = ({ company, createdAt }) => {
  const date = moment(createdAt).format("MMM Do YYYY hh:mm A");
  return (
    <div>
      <h5>{company}</h5> 
      <h5>{date}</h5> 
    </div>
  );
};

export default SingleJob;



