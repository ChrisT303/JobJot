import Jobs from "../models/Jobs.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, unAuthenticatedError } from "../errors/index.js";


const createJob = async (req, res) => {
const {position, company} = req.body;

if (!position || !company) {
    throw new BadRequestError("Please provide all fields");
}
req.body.createdBy = req.user.user_id;
const job = await Jobs.create(req.body);
res.status(StatusCodes.CREATED).json({ job });
}
const getAllJobs = async (req, res) => {
    res.send("Get All Jobs");
}
const updateJob = async (req, res) => {
    res.send("Update Job");
}
const deleteJob = async (req, res) => {
    res.send("Delete Job");
}
const showStats = async (req, res) => {
    res.send("Show Stats");
}

export {createJob, getAllJobs, updateJob, deleteJob, showStats} 