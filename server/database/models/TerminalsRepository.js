const AbstractRepository = require("./AbstractRepository");

class TerminalsRepository extends AbstractRepository {
  constructor() {
    super({ table: "terminals" });
  }

  async create(terminals) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name_station, longitude, latitude, adress_station, number_plugs, free) values (?, ?, ?, ?, ?, ?)`,
      [
        terminals.name_station,
        terminals.longitude,
        terminals.latitude,
        terminals.adress_station,
        terminals.number_plugs,
        terminals.free,
      ]
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

  async update(terminals) {
    const [result] = await this.database.query(
      `update ${this.table} set date = ?, hour = ? where id = ?`,
      [
        terminals.longitude,
        terminals.latitude,
        terminals.name_station,
        terminals.adress_station,
        terminals.number_plugs,
        terminals.free,
        terminals.id
      ]
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

module.exports = TerminalsRepository;
