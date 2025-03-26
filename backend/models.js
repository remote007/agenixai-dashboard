const mongoose = require("mongoose");

const ChartDataSchema = new mongoose.Schema({
  label: String,
  value: Number,
});

const ChartData = mongoose.model("ChartData", ChartDataSchema);

module.exports = ChartData;
