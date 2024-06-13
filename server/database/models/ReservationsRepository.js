const AbstractRepository = require("./AbstractRepository");

class ReservationsRepository extends AbstractRepository {
  constructor() {
    super({ table: "reservations" });
  }

  async create(reservations) {
    const [result] = await this.database.query(
      `insert into ${this.table} (date, hour, terminals_id, plugs_id) values (?, ?, ?, ?)`,
      [
        reservations.date,
        reservations.hour,
        reservations.terminals_id,
        reservations.plugs_id,
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

  async update(reservations) {
    const [result] = await this.database.query(
      `update ${this.table} set date = ?, hour = ? where id = ?`,
      [reservations.date, reservations.hour, reservations.id]
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

module.exports = ReservationsRepository;
