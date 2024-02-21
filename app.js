import express, { json } from "express";
import morgan from "morgan";

const app = new express();

// middleware
app.use(express.json());
app.use(morgan("dev")); // manage the information of requests

// router
import userRouter from "./routers/user.routers.js";

app.use("/api/v1/users", userRouter);

export default app;
