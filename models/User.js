import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Please provide a name"], trim: true },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
    select: false,
  },
  lastName: { type: String, trim: true, default: "lastName" },
  location: { type: String, trim: true, default: "my location" },
});

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.JWTToken = function () {
  return jwt.sign({ user_id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

UserSchema.methods.comparePasswords = async function (userPassword) {
  const passwordMatch = await bcrypt.compare(userPassword, this.password);
  return passwordMatch
};

const User = mongoose.model("User", UserSchema);

export default User;
