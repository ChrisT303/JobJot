import { StatusCodes } from "http-status-codes";
import ApiError from "./ApiError.js";

class unAuthenticatedError extends ApiError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default unAuthenticatedError;