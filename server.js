import "express-async-errors";
import morgan from "morgan";
import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connection.js";

import authRoutes from "./routes/authRoutes.js";
import jobsRoutes from "./routes/jobsRoutes.js";

import notFoundMiddleware from "./middleware/notFound.js";
import errorHandlerMiddleware from "./middleware/error.js";

if (process.env.NODE_ENV !== "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", jobsRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
