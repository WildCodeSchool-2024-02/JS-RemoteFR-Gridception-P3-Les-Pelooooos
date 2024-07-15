const express = require("express");

const cors = require("cors");

const path = require("path");

const app = express();

app.use(cors());

app.use(
  cors({
    origin: [
      process.env.CLIENT_URL,
      "http://mysite.com",
      "http://another-domain.com",
    ],
  })
);

app.use(express.json());

const apiRouter = require("./routers/api/router");

app.use("/api", apiRouter);

const reactBuildPath = path.join(__dirname, "/../../client/dist");
const publicFolderPath = path.join(__dirname, "/../public");

app.use(express.static(reactBuildPath));

app.get("*.*", express.static(publicFolderPath, { maxAge: "1y" }));

app.get("*", (_, res) => {
  res.sendFile(path.join(reactBuildPath, "/index.html"));
});

module.exports = app;
