const Car = require("../models/carModel");
const formatPrice = require("../utils/formatPrice");
const formatDate = require("../utils/formatDate");

const carPage = async (req, res) => {
  try {
    const cars = !req.query.capacity
      ? await Car.find()
      : await Car.find({ capacity: req.query.capacity });
    res.render("cars/index.ejs", {
      cars,
      formatPrice,
      formatDate,
      message: req.flash("message", ""),
      status: req.flash("status", ""),
    });
  } catch (error) {
    console.log(error.message);
  }
};

const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    console.log(req.body);
    await Car.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    req.flash("status", "success");
    req.flash("message", "diedit");
    res.redirect("/cars");
  } catch (error) {
    console.log(error.message);
  }
};

const updateCarPage = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findById(id);
    res.render("cars/edit_cars.ejs", {
      car,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const createCarsPage = async (req, res) => {
  res.render("cars/add_cars.ejs");
};

const createCars = async (req, res) => {
  try {
    await Car.create(req.body);
    req.flash("status", "success");
    req.flash("message", "disimpan");
    res.redirect("/cars");
  } catch (error) {
    req.flash("message", error.message);
    req.flash("status", "error");
    res.redirect("/cars");
  }
};

const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    await Car.findByIdAndDelete(id);
    req.flash("status", "deleted");
    req.flash("message", "Dihapus");
    res.redirect("/cars");
  } catch (error) {
    req.flash("message", error.message);
    req.flash("status", "error");
    res.redirect("/cars");
  }
};

module.exports = {
  carPage,
  createCarsPage,
  updateCarPage,
  createCars,
  updateCar,
  deleteCar
};
