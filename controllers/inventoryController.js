const inventoryModel = require("../models/inventoryModel");

async function getInventory(req, res) {
  const userId = req.user.id;

  if (!userId) {
    return res.status(400).json({
      success: false,
      message: "Invalid User ID",
    });
  }
  try {
    const userInventory = await inventoryModel.getInventory(userId);

    return res.status(200).json({
      success: true,
      message: "Inventory items retrieved successfully",
      data: userInventory,
    });
  } catch (err) {
    console.error("Error in getInventory controller:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server error while fetching inventory",
    });
  }
}
module.exports = {
  getInventory,
};
