const AbstractRepository = require("./AbstractRepository");

class CarsRepository extends AbstractRepository {
  constructor() {
    super({ table: "cars" });
  }

  async create(cars) {
    const [result] = await this.database.query(
      `insert into ${this.table} (brand_id, model_id, user_id) values (?, ?, ?)`,
      [cars.brand_id, cars.model_id, cars.user_id]
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
    const [rows] = await this.database.query(`SELECT cars.id, brands.brand_name, models.name, users.lastname
    FROM cars
    JOIN brands ON cars.brand_id = brands.id
    JOIN models ON cars.model_id = models.id
    JOIN users ON cars.user_id = users.id;`);

    return rows;
  }

  async update(cars) {
    const [result] = await this.database.query(
      `update ${this.table} set brand_id = ?, model_id = ?, user_id = ?  where id = ?`,
      [cars.brand_id, cars.model_id, cars.uses_id, cars.id]
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
