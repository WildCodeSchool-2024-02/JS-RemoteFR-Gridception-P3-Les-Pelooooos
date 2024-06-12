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

  async update(plugs) {
    // Execute the SQL UPDATE query to update a specific category
    const [result] = await this.database.query(
      `update ${this.table} set power = ?, terminals_id = ?, plugs_types = ? where id = ?`,
      [plugs.power, plugs.id, plugs.terminals_id, plugs.plugs_types_id]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }

  async delete(id) {
    // Execute the SQL DELETE query to delete a specific category
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

module.exports = PlugsRepository;
