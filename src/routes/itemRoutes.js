const express = require("express");
const {
  getItems,
  addItem,
    deleteAllItems,
    updateItem,
    deleteItem,
} = require("../controllers/itemController");

const router = express.Router();

router.get("/", getItems);
router.post("/", addItem);
router.delete("/", deleteAllItems);
router.put("/:id", updateItem);   // ✅ NOW DEFINED
router.delete("/:id", deleteItem);

module.exports = router;
