const express = require("express");
const {
  createInventoryController,
  getInventoryControoler,
} = require("../controllers/inventoryController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();
router.post("/create-inventory", authMiddleware, createInventoryController);
router.get("/get-inventory", authMiddleware, getInventoryControoler);

module.exports = router;
