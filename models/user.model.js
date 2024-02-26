import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      lowercase: true,
      unique: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      trim: true,
      require: true
    },
    password: {
      type: String,
      require: [true, "password is require"],
    },
    first_name: {
      type: String,
      require: true,
      index: true,
    },
    last_name: {
      type: String,
      require: true,
      index: true,
    },
    telephone: {
      type: String,
      require: true,
    },
    isAdmin:{
      type: Boolean,
      default: false
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
