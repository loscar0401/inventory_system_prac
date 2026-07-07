const db = require("../config/db");

async function registerUser(name, email, password, role) {
  const [results] = await db.query(
    "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
    [name, email, password, role],
  );

  return results;
}

async function getUserByEmail(email) {
  const [results] = await db.query("SELECT * FROM users WHERE email=?", [
    email,
  ]);

  return results[0];
}

module.exports = {
  registerUser,
  getUserByEmail,
};
