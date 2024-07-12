const AbstractRepository = require("./AbstractRepository");

class PlugsRepository extends AbstractRepository {
  constructor() {
    super({ table: "plugs" });
  }

  async create(plugs) {
    const [result] = await this.database.query(
      `insert into ${this.table} (volt_power, plug_type_id) values (?, ?)`,
      [plugs.volt_power, plugs.plugs_types_id]
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
    const [result] = await this.database.query(
      `update ${this.table} set volt_power = ?, plug_type = ? where id = ?`,
      [plugs.volt_power, plugs.plug_type_id, plugs.id]
    );

    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result.affectedRows;
  }
}

module.exports = PlugsRepository;
