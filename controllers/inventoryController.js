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

async function addItem(req, res) {
  const userId = req.user.id;
  const { itemName, category, quantity, price, status } = req.body;

  if (!userId) {
    return res.status(400).json({
      success: false,
      message: "Invalid User ID",
    });
  }

  if (
    !itemName ||
    !category ||
    quantity === undefined ||
    price === undefined ||
    !status
  ) {
    return res.status(400).json({
      success: false,
      message: "Invalid Input on Add item",
    });
  }
  try {
    const results = await inventoryModel.addItem(
      userId,
      itemName,
      category,
      quantity,
      price,
      status,
    );

    return res.status(201).json({
      success: true,
      message: "Item successfully added",
      data: results,
    });
  } catch (err) {
    console.error("Error in addItem controller:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server error while adding item in inventory",
    });
  }
}

async function updateItem(req, res) {
  const { id } = req.params;
  const userId = req.user.id;
  const { itemName, category, quantity, price, status } = req.body;

  if (!id || isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "Valid item ID is required",
    });
  }

  if (!userId) {
    return res.status(400).json({
      success: false,
      message: "Invalid User ID",
    });

    if (
      !itemName ||
      !category ||
      quantity === undefined ||
      price === undefined ||
      !status
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid Input on Update item",
      });
    }
  }
  try {
    const results = await inventoryModel.updateItem(
      itemName,
      category,
      quantity,
      price,
      status,
      id,
      userId,
    );

    if (results.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Item not found ",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Item successfully Updated",
    });
  } catch (err) {
    console.error("Error in updateItem controller:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server error while updating item in inventory",
    });
  }
}
module.exports = {
  getInventory,
  addItem,
  updateItem,
};
