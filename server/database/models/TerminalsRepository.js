const AbstractRepository = require("./AbstractRepository");

class TerminalsRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "terminals" });
  }

  // The C of CRUD - Create operation
  async create(terminals) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (longitude,latitude, name_station, adress_station, number_plugs, opening_hours, pmr_acessibility) values (?, ?, ?, ?, ?, ?,?)`,
      [
        terminals.longitude,
        terminals.latitude,
        terminals.name_station,
        terminals.adress_station,
        terminals.number_plugs,
        terminals.opening_hours,
        terminals.pmr_acessibility
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

  async update(terminals) {
    // Execute the SQL UPDATE query to update a specific category
    const [result] = await this.database.query(
      `update ${this.table} set date = ?, hour = ? where id = ?`,
      [terminals.longitude,
        terminals.latitude,
        terminals.name_station,
        terminals.adress_station,
        terminals.number_plugs,
        terminals.opening_hours,
        terminals.pmr_acessibility]
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