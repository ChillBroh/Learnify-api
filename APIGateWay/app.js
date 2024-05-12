const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
const { applyRateLimiter } = require("./utilis/rateLimiter");
const { authenticateRequest } = require("./utilis/requestAuthenticator");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", applyRateLimiter, proxy("http://localhost:8001"));
app.use(
  "/api/course",
  applyRateLimiter,
  authenticateRequest,
  proxy("http://localhost:8002")
);
app.use("/api/guest/course", applyRateLimiter, proxy("http://localhost:8002"));
app.use(
  "/api/learner",
  applyRateLimiter,
  authenticateRequest,
  proxy("http://localhost:8003")
);
app.use(
  "/api/notification",
  applyRateLimiter,
  authenticateRequest,
  proxy("http://localhost:8004")
);
app.use(
  "/api/payment",
  applyRateLimiter,
  authenticateRequest,
  proxy("http://localhost:8005")
);
app.use(
  "/api/user",
  applyRateLimiter,
  authenticateRequest,
  proxy("http://localhost:8006")
);

//Exporting app to be used by the server.js
module.exports = app;
