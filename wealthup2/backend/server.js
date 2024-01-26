
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const codeRoutes = require("./routes/codeRoute");
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/codes", codeRoutes);
app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(PORT, async () => {
  try {
    await dbConnection();
  } catch (error) {
    console.log(error);
  }
  console.log(`Server is running at ${process.env.PORT}`);
});
