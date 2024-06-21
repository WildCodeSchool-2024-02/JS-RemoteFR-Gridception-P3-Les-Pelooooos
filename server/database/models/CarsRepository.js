const AbstractRepository = require("./AbstractRepository");

class CarsRepository extends AbstractRepository {
  constructor() {
    super({ table: "cars" });
  }

  async create(cars) {
    const [result] = await this.database.query(
      `insert into ${this.table} (model, brands_id, users_id, plugs_id) values (?, ?, ?, ?)`,
      [cars.model, cars.brands_id, cars.user_id, cars.plugs_id]
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

  async update(cars) {
    const [result] = await this.database.query(
      `update ${this.table} set model = ?, brands_id = ?, users_id = ?, plugs_id = ? where id = ?`,
      [cars.model, cars.brands_id, cars.users_id, cars.plugs_id, cars.id]
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

module.exports = CarsRepository;
