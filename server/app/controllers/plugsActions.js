const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const plugs = await tables.plugs.readAll();

    res.json(plugs);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const plugs = await tables.plugs.read(req.params.id);

    if (plugs == null) {
      res.sendStatus(404);
    } else {
      res.json(plugs);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const plugs = { ...req.body, id: req.params.id };

  try {
    await tables.plugs.update(plugs);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const plugs = req.body;

  try {
    const insertId = await tables.plugs.create(plugs);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.plugs.delete(req.params.id);

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
