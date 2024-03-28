const Car = require('../models/carModel');
const path = require('path');
const formatPrice = require('../utils/formatPrice');
const formatDate = require('../utils/formatDate');

const carPage = async (req, res) => {
  const cars = await Car.find();
  res.render('cars/index.ejs', {
    cars,
    formatPrice,
    formatDate
  });
};
const updatePage = async (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "update_cars.html"));
};
const createPage = async (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "add_cars.html"));
};

module.exports = {
  carPage,
  updatePage,
  createPage,
};
