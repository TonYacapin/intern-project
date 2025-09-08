const db = require("../config/db");

exports.createUser = (email, hashedPassword, callback) => {
  const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
  db.query(sql, [email, hashedPassword], callback);
};

exports.findUserByEmail = (email, callback) => {
  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], callback);
};
