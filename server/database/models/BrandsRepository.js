const AbstractRepository = require("./AbstractRepository");

class BrandsRepository extends AbstractRepository {
  constructor() {
    super({ table: "brands" });
  }

  async create(brands) {
    const [result] = await this.database.query(
      `insert into ${this.table} (brand_name) values (?)`,
      [brands.brand_name]
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

  async update(brands) {
    const [result] = await this.database.query(
      `update ${this.table} set brand_name = ? where id = ?`,
      [brands.brand_name, brands.id]
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

module.exports = BrandsRepository;
