import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
  console.error(err);
  const defaultError = {
    StatusCode: err.StatusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Something went wrong",
  };
  if (err.name === "ValidationError") {
    defaultError.StatusCode = StatusCodes.BAD_REQUEST;
    defaultError.message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
  }
  if (err.code === 11000) {
    defaultError.StatusCode = StatusCodes.BAD_REQUEST;
    defaultError.message = `${Object.keys(
      err.keyValue
    )} entry has to be unique`;
  }
  res.status(defaultError.StatusCode).json({ message: defaultError.message });
};

export default errorHandlerMiddleware;
