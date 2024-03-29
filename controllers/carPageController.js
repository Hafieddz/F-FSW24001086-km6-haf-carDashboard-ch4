const Car = require("../models/carModel");
const path = require("path");
const formatPrice = require("../utils/formatPrice");
const formatDate = require("../utils/formatDate");

const carPage = async (req, res) => {
  const cars = await Car.find();
  res.render("cars/index.ejs", {
    cars,
    formatPrice,
    formatDate,
  });
};

const updateCarsPage = async (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "testing_dashboard.html"));
};

const createCarsPage = async (req, res) => {
  res.render("cars/add_cars.ejs");
};

const createCars = async (req, res) => {
  try {
    await Car.create(req.body);
    
    res.redirect('/cars');
  } catch (error) {
    
    res.redirect('/cars');
  }

};

module.exports = {
  carPage,
  createCarsPage,
  updateCarsPage,
  createCars
};
