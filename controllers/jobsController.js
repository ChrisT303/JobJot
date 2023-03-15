import Job from "../models/Jobs.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  unAuthenticatedError,
  NotFoundError,
} from "../errors/index.js";
import permissions from "../utils/permissions.js";
import mongoose from "mongoose";
import moment from "moment";

const createJob = async (req, res) => {
  const { position, company } = req.body;

  if (!position || !company) {
    throw new BadRequestError("Please provide all fields");
  }
  req.body.createdBy = req.user.user_id;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const getAllJobs = async (req, res) => {
  const { status, jobType, sort, search } = req.query;

  const queryObj = {
    createdBy: req.user.user_id,
  };

  if (status && status !== "All Jobs") {
    queryObj.status = status;
  }

  if (jobType && jobType !== "All Jobs") {
    queryObj.jobType = jobType;
  }

  if (search) {
    queryObj.position = { $regex: search, $options: "i" };
  }

  let result = Job.find(queryObj);

  if (sort === "Most Recent") {
    result = result.sort("-createdAt");
  }
  if (sort === "Oldest") {
    result = result.sort("createdAt");
  }
  if (sort === "A-Z") {
    result = result.sort("position");
  }
  if (sort === "Z-A") {
    result = result.sort("-position");
  }

  const jobs = await result;

  res
    .status(StatusCodes.OK)
    .json({ jobs, allJobs: jobs.length, numOfPages: 1 });
};

const editJob = async (req, res) => {
  const { id: job_id } = req.params;
  const { company, position } = req.body;

  if (!position || !company) {
    throw new BadRequestError("Please provide all fields");
  }
  const job = await Job.findOne({ _id: job_id });
  if (!job) {
    throw new NotFoundError(`Job with id ${job_id} not found`);
  }

  permissions(
    req.user,
    job.createdBy,
    "You are not authorized to edit this job"
  );

  const editedJob = await Job.findOneAndUpdate({ _id: job_id }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json(editedJob);
};
const deleteJob = async (req, res) => {
  const { id: job_id } = req.params;

  const job = await Job.findOne({ _id: job_id });
  if (!job) {
    throw new NotFoundError(`Job with id ${job_id} not found`);
  }

  permissions(
    req.user,
    job.createdBy,
    "You are not authorized to delete this job"
  );

  await job.remove();
  res.status(StatusCodes.OK).json({ msg: "Job deleted successfully" });
};
const getStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.user_id) } },
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const beginningStats = {
    Declined: stats.Declined || 0,
    Applied: stats.Applied || 0,
    Interview: stats.Interview || 0,
    Offer: stats.Offer || 0,
  };

  let monthlyApplied = await Job.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.user_id) } },
    {
      $group: {
        _id: {
          year: {
            $year: "$createdAt",
          },
          month: {
            $month: "$createdAt",
          },
        },
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
    { $limit: 6 },
  ]);

  monthlyApplied = monthlyApplied
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;
      const date = moment()
        .month(month - 1)
        .year(year)
        .format("MMM Y");
      return { date, count };
    })
    .reverse();

  res.status(StatusCodes.OK).json({ beginningStats, monthlyApplied });
};

export { createJob, getAllJobs, editJob, deleteJob, getStats };
