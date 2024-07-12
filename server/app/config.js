const express = require("express");
const cors = require("cors");
const cookiesParser = require("cookie-parser");
const apiRouter = require("./routers/api/router");

const app = express();

app.use(
  cors({
    origin: [process.env.CLIENT_URL],
  })
);

app.use(express.json());
app.use(cookiesParser());

app.use("/api", apiRouter);

module.exports = app;
