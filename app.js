require("dotenv").config();
const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");

app.use(express.json());
app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server is Up!");
});
