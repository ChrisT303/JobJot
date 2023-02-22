import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";


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
    },
    lastName: { type: String, trim: true, default: "lastName" },
    location: { type: String, trim: true, default: "my location" },
  });

  UserSchema.pre("save", async function (){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  })
  
  
  const User = mongoose.model("User", UserSchema);
  
  export default User;
  
