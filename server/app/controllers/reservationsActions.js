const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const reservations = await tables.reservations.readAll();

    res.json(reservations);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const reservations = await tables.reservations.read(req.params.id);

    if (reservations == null) {
      res.sendStatus(404);
    } else {
      res.json(reservations);
    }
  } catch (err) {
    next(err);
  }
};

const browseFromCar = async (req, res, next) => {
  try {
    const reservations = await tables.reservations.readAllFromCar(
      req.params.carId
    );

    res.json(reservations);
  } catch (err) {
    next(err);
  }
};


const edit = async (req, res, next) => {
  const reservations = { ...req.body, id: req.params.id };

  try {
    await tables.reservations.update(reservations);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const reservations = req.body;

  try {
    const insertId = await tables.reservations.create(reservations);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.reservations.delete(req.params.id);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  browseFromCar,
  read,
  edit,
  add,
  destroy,
};
