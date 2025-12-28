const Item = require("../models/Item");


// GET
exports.getItems = async (req, res) => {
  const items = await Item.find().sort({ createdAt: -1 });
  res.json(items);
};

// POST
exports.addItem = async (req, res) => {
  const { model, quantity, billnmber, price, date } = req.body;

  const total = quantity * price;

  const item = await Item.create({
    model,
    quantity,
    price,
    billnmber,
    date,
    total,
  });

  res.status(201).json(item);
};

// DELETE ALL
exports.deleteAllItems = async (req, res) => {
  await Item.deleteMany();
  res.json({ message: "All items deleted" });
};


// UPDATE item
exports.updateItem = async (req, res) => {
  const { id } = req.params;
  const { model, quantity, price, date } = req.body;

  const total = quantity * price;

  const updatedItem = await Item.findByIdAndUpdate(
    id,
    { model, quantity, price, date, total, billnmber },
    { new: true }
  );

  res.json(updatedItem);
};

// DELETE item
exports.deleteItem = async (req, res) => {
  const { id } = req.params;

  await Item.findByIdAndDelete(id);
  res.json({ message: "Item deleted" });
};

exports.updateItem = async (req, res) => {
  const { id } = req.params;
  const { model, quantity, price, date, billnmber } = req.body;

  const total = quantity * price;

  const updatedItem = await Item.findByIdAndUpdate(
    id,
    { model, quantity, price, date, billnmber, total },
    { new: true }
  );

  res.json(updatedItem);
};
