const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const users = await tables.users.readAll();

    res.json(users);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const users = await tables.users.read(req.params.id);

    if (users == null) {
      res.sendStatus(404);
    } else {
      res.json(users);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const users = { ...req.body, id: req.params.id };

  try {
    await tables.users.update(users);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const users = req.body;

  try {
    const insertId = await tables.users.create(users);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.users.delete(req.params.id);

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
