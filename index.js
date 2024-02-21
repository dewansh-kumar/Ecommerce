import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 8080;

connectDB()
  .then(() => {
    app.on("Error", (error) => {
      console.log("Server is not running", error);
    });

    app.listen(port, () => {
      console.log(`Server is running at port ${port}`);
    });
  })
  .catch((error) => {
    console.log("DATABASE CONNECTION FAILED!");
  });
