const AbstractRepository = require("./AbstractRepository");

class CarsRepository extends AbstractRepository {
  constructor() {
    super({ table: "cars" });
  }

  // The C of CRUD - Create operation

  async create(cars) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (model, brands_id, users_id, plugs_id) values (?, ?, ?, ?)`,
      [cars.model, cars.brands_id, cars.user_id, cars.plugs_id]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  async update(cars) {
    // Execute the SQL UPDATE query to update a specific category
    const [result] = await this.database.query(
      `update ${this.table} set model = ?, brands_id = ?, users_id = ?, plugs_id = ? where id = ?`,
      [cars.model, cars.brands_id, cars.users_id, cars.plugs_id, cars.id]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }

  async delete(id) {
    // Execute the SQL DELETE query to delete a specific category
    const [result] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

module.exports = CarsRepository;
