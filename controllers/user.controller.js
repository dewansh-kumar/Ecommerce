import { User } from "../models/user.model.js";
import { comparePassword, hashPassword } from "../helper/authHelper.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { generateAccessAndWebToken } from "../helper/tokenGeneratorHelper.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, first_name, last_name, password, telephone } = req.body;
  console.log(username);

  if (!username) {
    res.status(400).send({
      message: "Username is required",
    });
  }
  if (!first_name) {
    res.status(400).send({
      message: "First Name is required",
    });
  }

  if (!last_name) {
    res.status(400).send({
      message: "Last Name is required",
    });
  }

  if (!password) {
    res.status(400).send({
      message: "Password is required",
    });
  }

  if (!telephone) {
    res.status(400).send({
      message: "Telephone number is required",
    });
  }

  const existedUser = await User.findOne({ username: username });
  if (existedUser) {
    return res.status(409).send({
      message: "User already exist",
    });
  }

  const hashedPassword = await hashPassword(password);

  const newUser = await User.create({
    username,
    first_name,
    last_name,
    password: hashedPassword,
    telephone,
  });

  const createdUser = await User.findById(newUser._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    return res.status(500).send({
      message: "Something went wrong while registering the user",
    });
  }

  return res.status(200).send({
    success: true,
    data: createdUser,
    message: "User register successfully",
  });
});

const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username) {
    return req.status(400).send({
      message: "username is required",
    });
  }

  if (!password) {
    return req.status(400).send({
      message: "password is required",
    });
  }

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(404).send({
      success: false,
      message: "User does not exist",
    });
  }

  const isPasswordCorrect = await comparePassword(user.password, password);
  if (!isPasswordCorrect) {
    return res.stats(401).send({
      success: false,
      message: "Password is incorrect",
    });
  }

  const { accessToken, refreshToken } = await generateAccessAndWebToken(
    user._id
  );

  const loggedInUser = await User.findByIdAndUpdate(
      user._id,
      { refreshToken },
      { new: true }
    ).select("-password -refreshToken");


  // make suer that no one change the cookies from frontend
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("refreshToken", refreshToken, options)
    .cookie("accessToken", accessToken, options)
    .send({
      success: true,
      data: loggedInUser,
      message: "User login successfully",
    });
});

export { registerUser, loginUser };
