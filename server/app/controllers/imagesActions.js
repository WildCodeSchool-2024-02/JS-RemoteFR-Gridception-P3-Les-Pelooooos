const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const images = await tables.images.readAll();

    res.json(images);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const images = await tables.images.read(req.params.id);

    if (images == null) {
      res.sendStatus(404);
    } else {
      res.json(images);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const images = { ...req.body, id: req.params.id };

  try {
    await tables.images.update(images);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const images = req.body;

  try {
    const insertId = await tables.images.create(images);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.images.delete(req.params.id);

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
