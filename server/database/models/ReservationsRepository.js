const AbstractRepository = require("./AbstractRepository");

class ReservationsRepository extends AbstractRepository {
  constructor() {
    super({ table: "reservations" });
  }

  async create(reservations) {
    const [result] = await this.database.query(
      `insert into ${this.table} (terminal_id, car_id, date, hour) values (?, ?, ?, ?)`,
      [
        reservations.terminal_id,
        reservations.car_id,
        reservations.date,
        reservations.hour,
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

  async readAllFromCar(id) {
    const [rows] = await this.database.query(
      `
      SELECT *
      FROM ${this.table} reservations
      JOIN terminals ON reservations.terminal_id = terminals.id 
      JOIN terminal_plugs ON terminal_plugs.terminal_id = terminals.id 
      JOIN plugs ON terminal_plugs.plug_id = plugs.id
      WHERE car_id = ?`,
      [id]
    );

    return rows[0];
  }

  async update(reservations) {
    const [result] = await this.database.query(
      `update ${this.table} set terminal_id = ?, car_id = ?, date = ?, hour = ? where id = ?`,
      [
        reservations.terminal_id,
        reservations.car_id,
        reservations.date,
        reservations.hour,
        reservations.id,
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

module.exports = ReservationsRepository;
