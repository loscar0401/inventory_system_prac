require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const authRoutes = require("./routes/authRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
const pageRoutes = require("./routes/pageRoutes");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", pageRoutes);
app.use("/auth", authRoutes);
app.use("/inventory", inventoryRoutes);

app.listen(3000, () => {
  console.log("Server is Up!");
});
