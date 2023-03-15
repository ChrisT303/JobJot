import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company name"],
    },
    position: {
      type: String,
      required: [true, "Please provide company name"],
    },
    status: {
      type: String,
      enum: ["Applied", "Interview", "Offer", "Declined"],
      default: "Applied",
    },
    jobType: {
      type: String,
      enum: ["Full Time", "Part Time", "Contract", "Internship", "Remote"],
      default: "Full Time",
    },
    jobLocation: {
      type: String,
      default: "My Location",
      required: true,
    },

    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user id"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
