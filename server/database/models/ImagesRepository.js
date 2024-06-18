const AbstractRepository = require("./AbstractRepository");

class ImagesRepository extends AbstractRepository {
  constructor() {
    super({ table: "images" });
  }

  async create(images) {
    const [result] = await this.database.query(
      `insert into ${this.table} (url, user_id, cars_id) values (?, ?, ?)`,
      [images.url, images.user_id, images.cars_id]
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

  async update(images) {
    const [result] = await this.database.query(
      `update ${this.table} set url = ? where id = ?`,
      [images.url, images.id]
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

module.exports = ImagesRepository;
