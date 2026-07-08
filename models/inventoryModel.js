const db = require("../config/db");

async function getInventory(userId) {
  const [results] = await db.query(
    "SELECT * FROM inventory WHERE user_id = ?",
    [userId],
  );

  return results;
}

module.exports = {
  getInventory,
};
