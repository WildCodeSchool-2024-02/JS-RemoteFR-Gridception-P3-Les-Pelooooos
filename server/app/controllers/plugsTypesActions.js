const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const plugsTypes = await tables.plugsTypes.readAll();

    res.json(plugsTypes);
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    const plugsTypes = await tables.plugsTypes.read(req.params.id);

    if (plugsTypes == null) {
      res.sendStatus(404);
    } else {
      res.json(plugsTypes);
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation

const edit = async (req, res, next) => {
  const plugsTypes = { ...req.body, id: req.params.id };

  try {
    await tables.brands.update(plugsTypes);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  const plugsTypes = req.body;

  try {
    const insertId = await tables.brands.create(plugsTypes);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation

const destroy = async (req, res, next) => {
  try {
    await tables.plugsTypes.delete(req.params.id);

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