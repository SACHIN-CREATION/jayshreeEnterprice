const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/test", (req, res) => {
  res.json({ ok: true });
});

app.use("/api/items", require("./routes/itemRoutes"));

// const PORT = 5050;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});