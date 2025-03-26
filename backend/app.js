const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const chartRoutes = require("./charts");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/dashboardDB");

app.use("/api/charts", chartRoutes);

const PORT = 8083;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
