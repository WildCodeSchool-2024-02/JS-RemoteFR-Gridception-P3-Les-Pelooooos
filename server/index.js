// Load environment variables from .env file
require("dotenv").config();

// Check database connection
const { initializeDatabase } = require("./database/initializeDatabase");

// Note: This is optional and can be removed if the database connection
// is not required when starting the application
require("./database/client").checkConnection();

// Import the Express application from app/config.js
const app = require("./app/config");

// Get the port from the environment variables
const port = process.env.APP_PORT;

// Start the server and listen on the specified port
app
  .listen(port, async () => {
    console.info(`Server is listening on port ${port}`);
    await initializeDatabase();
  })      
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
