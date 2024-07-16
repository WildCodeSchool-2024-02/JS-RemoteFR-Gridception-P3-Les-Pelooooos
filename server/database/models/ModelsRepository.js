const AbstractRepository = require("./AbstractRepository");

class ModelsRepository extends AbstractRepository {
  constructor() {
    super({ table: "models" });
  }

  async create(models) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, brand_id, plug_type_id ) values (?, ?, ?)`,
      [models.name, models.brand_id, models.plug_type_id]
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

  async readByName(name) {
    const [rows] = await this.database.query(
      `select id from ${this.table} where name = ?`,
      [name]
    );

    return rows[0].id;
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async update(models) {
    const [result] = await this.database.query(
      `update ${this.table} set name = ?, brand_id = ?, plug_type_id = ? where id = ?`,
      [models.name, models.brand_id, models.plug_type_id, models.id]
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

module.exports = ModelsRepository;
