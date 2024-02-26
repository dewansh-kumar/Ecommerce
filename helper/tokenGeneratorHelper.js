import jwt from "jsonwebtoken";

export const generateAccessAndRefreshToken = async (userId) => {
  try {
    const accessToken = await jwt.sign(
      {
        userId,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME,
      }
    );

    const refreshToken = await jwt.sign(
      {
        userId,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRE_TIME,
      }
    );

    return { accessToken, refreshToken };
  } catch (error) {
    console.log("Getting error during generating token " + error);
  }
};
