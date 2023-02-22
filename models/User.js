import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: { String, required: [true, "Please provide a name"], trim: true },
  email: {
    String,
    required: [true, "Please provide an email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
    unique: true,
  },
  password: {
    String,
    required: [true, "Please provide a password"],
    minlength: 6,
  },
  lastName: { String, trim: true, default: "lastName" },
  location: { String, trim: true, default: "my location" },
});

const User = mongoose.model("User", UserSchema);

export default User;
