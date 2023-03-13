import express from 'express';
const router = express.Router();

import {
  createJob,
  getAllJobs,
  editJob,
  deleteJob,
  getStats,
} from "../controllers/jobsController.js";



router.route("/").post(createJob).get(getAllJobs);
router.route("/stats").get(getStats);
router.route("/:id").delete(deleteJob).patch( editJob);

export default router;