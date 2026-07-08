const { status } = require("init");
const db = require("../config/db");

async function getInventory(userId) {
  const [results] = await db.query(
    "SELECT * FROM inventory WHERE user_id = ?",
    [userId],
  );
  return results;
}

async function addItem(userId, itemName, category, quantity, price, status) {
  const [results] = await db.query(
    "INSERT INTO inventory (user_id, item_name, category, quantity, price, status) VALUES (?, ?, ?, ?, ? , ? )",
    [userId, itemName, category, quantity, price, status],
  );

  return results;
}

async function updateItem(
  itemName,
  category,
  quantity,
  price,
  status,
  id,
  userId,
) {
  const [results] = await db.query(
    "UPDATE inventory SET item_name=? , category=?, quantity=?, price=?, status=? WHERE id=? and user_id=?",
    [itemName, category, quantity, price, status, id, userId],
  );

  return results;
}

module.exports = {
  getInventory,
  addItem,
  updateItem,
};
