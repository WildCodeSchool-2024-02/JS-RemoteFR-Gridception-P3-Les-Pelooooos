const AbstractRepository = require("./AbstractRepository");

class TerminalsRepository extends AbstractRepository {
  constructor() {
    super({ table: "users" });
  }

  async create(users) {
    const [result] = await this.database.query(
      `insert into ${this.table} (gender, lastname, firstname, date_of_birth, email, city, postal_code, password, confirm_password, cars_owned, is_admin, reservations_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        users.gender,
        users.lastname,
        users.firstname,
        users.date_of_birth,
        users.email,
        users.city,
        users.postal_code,
        users.password,
        users.confirm_password,
        users.cars_owned,
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
      `update ${this.table} set gender = ?, lastname = ?, firstname = ?, date_of_birth = ?,  email = ?, city = ?, postal_code = ?, password = ?, confirm_password = ?, cars_owned ?, is_admin = ?, reservation_id = ?, where id = ?`,
      [
        users.gender,
        users.lastname,
        users.firstname,
        users.date_of_birth,
        users.email,
        users.city,
        users.postal_code,
        users.password,
        users.confirm_password,
        users.cars_owned,
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
