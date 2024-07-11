const AbstractRepository = require("./AbstractRepository");
const client = require("../client");

class UsersRepository extends AbstractRepository {
  constructor() {
    super({ table: "users" });
  }

  async create(users) {
    const [result] = await this.database.query(
      `insert into ${this.table} (email, password, gender, firstname, lastname, birthdate, city, postal_code, cars_owned, image, role) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        users.email,
        users.password,
        users.gender,
        users.firstname,
        users.lastname,
        users.birthdate,
        users.city,
        users.postal_code,
        users.cars_owned,
        users.image,
        users.role,
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

  async readOneByEmail(email) {
    const [rows] = await client.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );
    return rows;
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async update(users) {
    const [result] = await this.database.query(
      `update ${this.table} set email = ?, password = ?, gender = ?, firstname = ?, lastname = ?, birthdate = ?, city = ?, postal_code = ?, cars_owned = ?, image = ?, role = ? where id = ?`,
      [
        users.email,
        users.gender,
        users.firstname,
        users.lastname,
        users.birthdate,
        users.city,
        users.postal_code,
        users.password,
        users.cars_owned,
        users.role,
        users.image,
        users.id
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

module.exports = UsersRepository;
