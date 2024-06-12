// Load the express module to create a web application

const express = require("express");

const app = express();

const cors = require("cors");

app.use(
  cors({
    origin: [
      process.env.CLIENT_URL, // keep this one, after checking the value in `server/.env`
    ],
  })
);

app.use(express.json());

// Import the API router
const apiRouter = require("./routers/api/router");

// Mount the API router under the "/api" endpoint
app.use("/api", apiRouter);

/* ************************************************************************* */

// Production-ready setup: What is it for, and when should I enable it?

// The code includes commented sections to set up a production environment where the client and server are executed from the same processus.

// What it's for:
// - Serving client static files from the server, which is useful when building a single-page application with React.
// - Redirecting unhandled requests (e.g., all requests not matching a defined API route) to the client's index.html. This allows the client to handle client-side routing.

// When to enable it:
// It depends on your project and its structure. If you are developing a single-page application, you'll enable these sections when you are ready to deploy your project to production.

// To enable production configuration:
// 1. Uncomment the lines related to serving static files and redirecting unhandled requests.
// 2. Ensure that the `reactBuildPath` points to the correct directory where your client's build artifacts are located.

/*
const path = require("path");

const reactBuildPath = path.join(__dirname, "/../../client/dist");
const publicFolderPath = path.join(__dirname, "/../public");

// Serve react resources

app.use(express.static(reactBuildPath));

// Serve server resources

app.get("*.*", express.static(publicFolderPath, { maxAge: "1y" }));

// Redirect unhandled requests to the react index file

app.get("*", (_, res) => {
  res.sendFile(path.join(reactBuildPath, "/index.html"));
});
*/

/* ************************************************************************* */

// Middleware for Error Logging (Uncomment to enable)
// Important: Error-handling middleware should be defined last, after other app.use() and routes calls.

/*
// Define a middleware function to log errors
const logErrors = (err, req, res, next) => {
  // Log the error to the console for debugging purposes
  console.error(err);
  console.error("on req:", req.method, req.path);

  // Pass the error to the next middleware in the stack
  next(err);
};

// Mount the logErrors middleware globally
app.use(logErrors);
*/

/* ************************************************************************* */

module.exports = app;
