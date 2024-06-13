const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const terminals = await tables.terminals.readAll();

    res.json(terminals);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const terminals = await tables.terminals.read(req.params.id);

    if (terminals == null) {
      res.sendStatus(404);
    } else {
      res.json(terminals);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const terminals = { ...req.body, id: req.params.id };

  try {
    await tables.terminals.update(terminals);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const terminals = req.body;

  try {
    const insertId = await tables.terminals.create(terminals);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.terminals.delete(req.params.id);

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
