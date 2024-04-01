const Car = require("../models/carModel");
const formatPrice = require("../utils/formatPrice");
const formatDate = require("../utils/formatDate");
const fs = require('fs')

const carPage = async (req, res) => {
  try {
    const query = {};

    if (req.query) {
      for (const key in req.query) {
        if (req.query[key]) {
          query[key] = { $regex: req.query[key], $options: "i" };
        }
      }
    }
    const cars = await Car.find(query);

    res.render("cars/index.ejs", {
      cars,
      formatPrice,
      formatDate,
      message: req.flash("message", ""),
      status: req.flash("status", ""),
    });
  } catch (error) {
    req.flash("message", error.message);
    res.redirect("/404");
  }
};

const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const newData = {...req.body, updatedAt : Date.now()}
    await Car.findByIdAndUpdate(id, newData, {
      new: true,
      runValidators: true,
    });
    req.flash("status", "success");
    req.flash("message", "diedit");
    res.redirect("/cars");
  } catch (error) {
    req.flash("message", error.message);
    res.redirect("/404");
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
    req.flash("message", error.message);
    res.redirect("/404");
  }
};

const createCarsPage = async (req, res) => {
  res.render("cars/add_cars.ejs");
};

const createCar = async (req, res) => {
  try {
    const newCar = {
      nama: req.body.nama,
      price: req.body.price,
      capacity: req.body.capacity,
      photo: req.file.filename,
    };
    await Car.create(newCar);

    req.flash("status", "success");
    req.flash("message", "disimpan");
    res.redirect("/cars");
  } catch (error) {
    req.flash("message", error.message);
    res.redirect("/404");
  }
};

const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCar = await Car.findByIdAndDelete(id);
    fs.unlink(`${__dirname}/../assets/images/${deletedCar.photo}`, (err) => {
      req.flash("status", "deleted");
      req.flash("message", "Dihapus");
      res.redirect("/cars");
    });
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
  createCar,
  updateCar,
  deleteCar,
};
