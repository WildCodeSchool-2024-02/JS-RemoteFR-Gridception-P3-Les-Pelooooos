const AbstractRepository = require("./AbstractRepository");

class TerminalsRepository extends AbstractRepository {
  constructor() {
    super({ table: "users" });
  }

  async create(users) {
    const [result] = await this.database.query(
      `insert into ${this.table} (firstname, lastname, city, cars_owned, password, is_admin, reservations_id) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        users.firstname,
        users.lastname,
        users.email,
        users.city,
        users.cars_owned,
        users.password,
        users.is_admin,
        users.reservations_id,
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

  async update(users) {
    const [result] = await this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, city = ?, cars_owned ?, password = ?, is_admin = ?, reservation_id = ?, where id = ?`,
      [
        users.firstname,
        users.lastname,
        users.email,
        users.city,
        users.cars_owned,
        users.password,
        users.is_admin,
        users.reservations_id,
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
