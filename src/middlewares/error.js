import ErrorHandler from "../utils/errorHandler.js";

export default (error, req, res, next) => {
  console.log(error);
  error.statusCode = error.statusCode || 500;
  error.message = error.message || "Internal Server Error";

  //wrong mongodb id error -> for cast error
  if (error.name === "CastError") {
    const message = `Resource not found. Invalid: ${error.path}`;
    error = new ErrorHandler(message, 400);
  }

  res.status(error.statusCode).json({
    success: false,
    // error: error.stack, //stack gives the exact path where the error has occured
    message: error.message,
  });
};
