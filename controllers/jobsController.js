import Job from "../models/Jobs.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  unAuthenticatedError,
  NotFoundError,
} from "../errors/index.js";
import permissions from "../utils/permissions.js";

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
  const jobs = await Job.find({ createdBy: req.user.user_id });
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
const showStats = async (req, res) => {
  res.send("Show Stats");
};

export { createJob, getAllJobs, editJob, deleteJob, showStats };
