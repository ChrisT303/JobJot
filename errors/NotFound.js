import { StatusCodes } from "http-status-codes";
import ApiError from "./ApiError.js";

class NotFoundError extends ApiError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.NOT_FOUND;
  }
}

export default NotFoundError;
