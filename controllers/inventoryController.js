const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");
const createInventoryController = async (req, res) => {
  try {
    const { email, inventoryType } = req.body;
    //validation
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User Not Found");
    }
    if (inventoryType === "in" && user.role !== "donar") {
      throw new Error("Not a donar account ");
    }
    if (inventoryType === "out" && user.role !== "hospital") {
      throw new Error("Not a hospital ");
    }
    const inventory = new inventoryModel(req.body);
    await inventory.save();
    return res.status(201).send({
      success: true,
      message: "New Blood record added",
    });
  } catch (error) {
    console.log(error); 
    return res.status(500).send({
      success: false,
      message: "Error in Create Inventory API",
      error,
    });
  }
};
const getInventoryControoler = async (req, res) => {
  try {
    const inventory = await inventoryModel.find({
      organisation: req.body.userId,
    });
    return res.status(200).send({
      success: true,
      message: "Get all records successfully",
      inventory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in get all Inventorty",
      error,
    });
  }
};
module.exports = { createInventoryController, getInventoryControoler };
