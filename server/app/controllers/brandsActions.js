const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const brands = await tables.brands.readAll();

    res.json(brands);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const brands = await tables.brands.read(req.params.id);

    if (brands == null) {
      res.sendStatus(404);
    } else {
      res.json(brands);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const brands = { ...req.body, id: req.params.id };

  try {
    await tables.brands.update(brands);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const brands = req.body;

  try {
    const insertId = await tables.brands.create(brands);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.brands.delete(req.params.id);

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
