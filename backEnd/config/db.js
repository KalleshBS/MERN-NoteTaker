const mysql = require("mysql2");

const conn = mysql.createConnection({
  user: "root",
  password: "root",
  host: "localhost",
  database: "nt_db",
});

conn.connect((e) => {
  if (e) throw e;
  console.log("DB Connected");
});

module.exports = conn;
