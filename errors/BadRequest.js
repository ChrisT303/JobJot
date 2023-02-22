import { StatusCodes } from "http-status-codes";
import ApiError from "./ApiError.js";

class BadRequestError extends ApiError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequestError;
