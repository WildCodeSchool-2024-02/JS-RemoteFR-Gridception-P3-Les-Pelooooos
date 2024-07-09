const fs = require("fs");
const path = require("path");
const client = require("./client");

const initializeDatabase = async () => {
    try {
        const sqlPath = path.join (__dirname, "schema.sql");
        const sql = fs.readFileSync(sqlPath, "utf-8");

        const queries = () => sql
        .split(";")
        .map((query) => query.trim() )
        .filter((query) => query.length).forEach((query) => client.query(query));
        queries()
        console.info("database initialized successfully.");
    } catch (error) {
        console.error("error initializing database :", error);
    }
    };

module.exports = { initializeDatabase };
