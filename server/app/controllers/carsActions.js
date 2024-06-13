// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const cars = await tables.cars.readAll();

    res.json(cars);
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const cars = await tables.cars.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (cars == null) {
      res.sendStatus(404);
    } else {
      res.json(cars);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

const edit = async (req, res, next) => {
  // Extract the category data from the request body and params
  const cars = { ...req.body, id: req.params.id };

  try {
    // Update the category in the database
    await tables.cars.update(cars);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const cars = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.cars.create(cars);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  try {
    // Delete the category from the database
    await tables.cars.delete(req.params.id);

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
