// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const users = await tables.users.readAll();

    // Respond with the items in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const users = await tables.users.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (users == null) {
      res.sendStatus(404);
    } else {
      res.json(users);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req,res,next) => {

    const users = {...req.body, id: req.params.id};

    try {

        await tables.users.update(users);

        res.sendStatus(204);
    } catch (err) {
      // Pass any errors to the error-handling middleware
      next(err);
    }
    };



// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const users = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.users.create(users);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const destroy = async (req, res, next) => {
    try {
      // Delete the category from the database
      await tables.users.delete(req.params.id);
  
      // Respond with HTTP 204 (No Content)
      res.sendStatus(204);
    } catch (err) {
      // Pass any errors to the error-handling middleware
      next(err);
    }
  };
  
  // Ready to export the controller functions
  module.exports = {
    browse,
    read,
    edit,
    add,
    destroy,
  };