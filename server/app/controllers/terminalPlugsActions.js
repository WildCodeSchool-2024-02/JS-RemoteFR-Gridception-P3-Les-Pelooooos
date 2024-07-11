const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const terminalPlugs = await tables.terminal_plugs.readAll();

    res.json(terminalPlugs);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const terminalPlugs = await tables.terminal_plugs.read(req.params.id);

    if (terminalPlugs == null) {
      res.sendStatus(404);
    } else {
      res.json(terminalPlugs);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const terminalPlugs = { ...req.body, id: req.params.id };

  try {
    await tables.terminal_plugs.update(terminalPlugs);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const terminalPlugs = req.body;

  try {
    const insertId = await tables.terminal_plugs.create(terminalPlugs);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    await tables.terminal_plugs.delete(req.params.id);

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
