const CarsRepository = require("./models/CarsRepository");
const UsersRepository = require("./models/UsersRepository");
const ReservationsRepository = require("./models/ReservationsRepository");
const PlugsRepository = require("./models/PlugsRepository");
const TerminalsRepository = require("./models/TerminalsRepository");
const PlugsTypesRepository = require("./models/PlugsTypesRepository");
const BrandsRepository = require("./models/BrandsRepository");
const AuthRepository = require("./models/AuthRepository");

const tables = {};

tables.users = new UsersRepository();
tables.reservations = new ReservationsRepository();
tables.terminals = new TerminalsRepository();
tables.plugs_types = new PlugsTypesRepository();
tables.brands = new BrandsRepository();
tables.plugs = new PlugsRepository();
tables.cars = new CarsRepository();
tables.auth = new AuthRepository();

module.exports = new Proxy(tables, {
  get(obj, prop) {
    if (prop in obj) return obj[prop];

    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
