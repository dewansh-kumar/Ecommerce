import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`DATABASE connect successfully ${conn.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection failed ", error);
    process.exit(0);
  }
};

export default connectDB;
