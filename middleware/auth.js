import jwt from "jsonwebtoken";
import { unAuthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new unAuthenticatedError("Not authorized, no token");
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { user_id: payload.user_id };
    next();
  } catch (error) {
    throw new unAuthenticatedError("Not authorized, token failed");
  }
};

export default auth;
