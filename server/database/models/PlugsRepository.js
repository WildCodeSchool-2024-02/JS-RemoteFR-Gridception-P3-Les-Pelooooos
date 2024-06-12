const AbstractRepository = require("./AbstractRepository");

class PlugsRepository extends AbstractRepository {
  constructor() {
    super({ table: "plugs" });
  }

  async create(plugs) {
    const [result] = await this.database.query(
      `insert into ${this.table} (power, terminals_id, plugs_types_id) values (?, ?, ?)`,
      [plugs.power, plugs.terminals_id, plugs.plugs_types_id]
    );

    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }
}

module.exports = PlugsRepository;
