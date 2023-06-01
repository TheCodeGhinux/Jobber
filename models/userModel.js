import mongoose from "mongoose";
import validator from 'validator';



const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      minLength: 3,
      maxLength: 20,
      trim: true,
    },
    lastname: {
      type: String,
      maxLength: 20,
      trim: true,
      default: 'Lastname',
    },
    email: {
      type: String,
      required: [true, 'Please provide a email'],
      validate: {
        validator: validator.isEmail,
        message: 'Please provide a valid email address'
      },
      unique: true,
    },
    password: {
      type: String,
      requires: [true, "Please provide a password"],
      minLength: 6,
      select: false, 
    },
    location: {
      type: String,
      trim: true,
      maxLength: 20,
      default: 'my city',
    },
    // isAdmin: {
    //   type: String,
    //   requires: true,
    //   unique: true,
    // },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema)