const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const cars = await tables.cars.readAll();

    res.json(cars);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const cars = await tables.cars.read(req.params.id);

    if (cars == null) {
      res.sendStatus(404);
    } else {
      res.json(cars);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const cars = { ...req.body, id: req.params.id };

  try {
    await tables.cars.update(cars);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const cars = req.body;

  try {
    const insertId = await tables.cars.create(cars);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.cars.delete(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
