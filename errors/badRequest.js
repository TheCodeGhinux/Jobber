import CustomApiError from "./customApi.js";
import { StatusCodes } from "http-status-codes";


class BadRequestError extends CustomApiError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequestError;