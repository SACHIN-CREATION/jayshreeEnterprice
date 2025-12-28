const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    model: String,
    quantity: Number,
    price: Number,
    date: String,
    total: Number,
    billnmber: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
