const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const models = await tables.models.readAll();

    res.json(models);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const models = await tables.models.read(req.params.id);

    if (models == null) {
      res.sendStatus(404);
    } else {
      res.json(models);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const models = { ...req.body, id: req.params.id };

  try {
    await tables.models.update(models);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const models = req.body;

  try {
    const insertId = await tables.models.create(models);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.models.delete(req.params.id);

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
