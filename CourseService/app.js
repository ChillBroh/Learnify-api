const express = require("express");
const cors = require("cors");
const AppError = require("./src/utils/AppError");
const errorHandler = require("./src/middlewares/errorHandler");
const courseRoutes = require("./src/routes/courseRoutes");

const app = express();

app.use(cors());
app.use(express.json());

//Add routes here
app.use("/", courseRoutes);

app.use(errorHandler);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
//Exporting app to be used by the server.js
module.exports = app;
