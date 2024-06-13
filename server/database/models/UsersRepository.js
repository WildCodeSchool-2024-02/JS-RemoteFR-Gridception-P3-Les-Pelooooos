const AbstractRepository = require("./AbstractRepository");

class TerminalsRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "users" });
  }

  // The C of CRUD - Create operation
  async create(users) {
    // Execute the SQL INSERT query to add a new item to the "item" table
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
        users.reservations_id
      ]
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

  async update(users) {
    // Execute the SQL UPDATE query to update a specific category
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
        users.reservations_id
      ]
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
};

module.exports = TerminalsRepository;