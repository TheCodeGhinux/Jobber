import mongoose from "mongoose";
import validator from 'validator';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


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

userSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})



export default mongoose.model('User', userSchema)