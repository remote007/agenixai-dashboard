const express = require("express");
const ChartData = require("./models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await ChartData.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
