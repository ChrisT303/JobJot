import { unAuthenticatedError } from "../errors/index.js";

const permissions = (reqUser, resourceUser_Id) => {
  if (reqUser.user_id === resourceUser_Id.toString()) return;

  throw new unAuthenticatedError("You are not authorized to edit this job");
};

export default permissions;
