require("dotenv").config();
const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/inventory", inventoryRoutes);

app.listen(3000, () => {
  console.log("Server is Up!");
});
