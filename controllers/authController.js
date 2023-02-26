import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, unAuthenticatedError } from "../errors/index.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new BadRequestError("User already exists");
  }
  const user = await User.create({ name, email, password });
  const token = user.JWTToken();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
    location: user.location,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all fields");
  }
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new unAuthenticatedError("Invalid credentials");
  }

  const doPasswordsMatch = await user.comparePasswords(password);
  if (!doPasswordsMatch) {
    throw new unAuthenticatedError("Invalid credentials");
  }
  res.send("Login");
};

const updateUser = async (req, res) => {
  res.send("Update");
};

export { register, login, updateUser };
