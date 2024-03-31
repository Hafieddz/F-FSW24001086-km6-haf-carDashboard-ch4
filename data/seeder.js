require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const Car = require("../models/carModel");

const DB = process.env.DATABASE_URI;
const car = JSON.parse(fs.readFileSync(`${__dirname}/cars.json`, "utf-8"));

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log(`Database Connected!`);
  });

const importData = async () => {
  try {
    await Car.create(car);
    console.log("Data imported successfully!");
  } catch (error) {
    console.error(error.message);
  }
  process.exit()
};

const clearData = async () => {
  try {
    await Car.deleteMany();
    console.log("Data deleted successfully!");
  } catch (error) {
    console.error(error.message);
  }
  process.exit()
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  clearData();
}