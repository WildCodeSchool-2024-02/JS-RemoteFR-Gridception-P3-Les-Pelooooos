const AbstractRepository = require("./AbstractRepository");

class TerminalPlugsRepository extends AbstractRepository {
  constructor() {
    super({ table: "terminal_plugs" });
  }

  async create(terminalPlugs) {
    const [result] = await this.database.query(
      `insert into ${this.table} (terminal_id, plug_id ) values (?, ?)`,
      [
        terminalPlugs.terminal_id,
        terminalPlugs.plug_id
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

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  async update(terminalPlugs) {
    const [result] = await this.database.query(
      `update ${this.table} set terminal_id = ?, plug_id = ? where id = ?`,
      [
        terminalPlugs.terminal_id,
        terminalPlugs.plug_id,
        terminalPlugs.id
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

module.exports = TerminalPlugsRepository;
