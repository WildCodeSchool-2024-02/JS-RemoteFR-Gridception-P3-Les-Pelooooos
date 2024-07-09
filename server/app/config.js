const express = require("express");
const cors = require("cors");
const cookiesParser = require("cookie-parser");
const apiRouter = require("./routers/api/router");
const authRouter = require("./routers/api/auth/router");
const usersRouter = require("./routers/api/users/router");

const app = express();

app.use(
  cors({
    origin: [process.env.CLIENT_URL],
  })
);

app.use(express.json());
app.use(cookiesParser());
app.use("./users", usersRouter);
app.use("./auth", authRouter);
app.use("/api", apiRouter);

module.exports = app;
