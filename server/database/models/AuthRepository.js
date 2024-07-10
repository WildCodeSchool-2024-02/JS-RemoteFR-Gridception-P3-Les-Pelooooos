const AbstractRepository = require("./AbstractRepository");
const client = require("../client");

class AuthRepository extends AbstractRepository {
  constructor() {
    super({ table: "users" });
  }

  async readOneByEmail(email) {
    const [rows] = await client.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );
    return rows[0];
  }
}

module.exports = AuthRepository;
