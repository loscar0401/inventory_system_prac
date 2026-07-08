const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middlewares/authMiddleware");
const inventoryController = require("../controllers/inventoryController");

router.get("/", authenticateToken, inventoryController.getInventory);
router.post("/", authenticateToken, inventoryController.addItem);
router.put("/:id", authenticateToken, inventoryController.updateItem);
// router.delete("/:id", authenticateToken, inventoryController.deleteItem);

module.exports = router;
