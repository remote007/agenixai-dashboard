const mongoose = require("mongoose");
const ChartData = require("./models");

mongoose.connect("mongodb://127.0.0.1:27017/dashboardDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const sampleData = [
  { label: "January", value: 50 },
  { label: "February", value: 80 },
  { label: "March", value: 45 },
  { label: "April", value: 60 },
  { label: "May", value: 90 },
  { label: "June", value: 70 }
];

const seedDatabase = async () => {
  await ChartData.deleteMany({});
  await ChartData.insertMany(sampleData);
  console.log("Sample data inserted!");
  mongoose.connection.close();
};

seedDatabase();
