import express from "express";
import cookieParser from "cookie-parser";
// import { errorFunction } from "./middlewares/error.js";
import errorMiddleware from "./middlewares/error.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

//Route imports
import userRouters from "./routes/user.js";
app.use("/api/v1", userRouters);
//middleware for error
app.use(errorMiddleware); //using errorMiddleware

export default app;
