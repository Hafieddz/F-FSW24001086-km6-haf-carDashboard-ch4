const Car = require("../models/carModel");
const formatPrice = require("../utils/formatPrice");
const formatDate = require("../utils/formatDate");
const flashCode = require("../middleware/flash");
const fs = require("fs");

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
    req.flash(req, "message", error.message);
    res.redirect("/404");
  }
};

const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const getCar = await Car.findById(id);
    let currentPhoto = getCar.photo;

    if (req.file) {
      currentPhoto = req.file.filename;
      fs.unlink(`${__dirname}/../assets/images/${getCar.photo}`, (err) => {});
    }
    const newData = {
      ...req.body,
      photo: currentPhoto,
      updatedAt: Date.now(),
    };
    await Car.findByIdAndUpdate(id, newData, {
      new: true,
      runValidators: true,
    });
    flashCode(req, "success", "Diedit");
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
    let photoFilename = "car-default.png";
    if (req.file) {
      photoFilename = req.file.filename;
    }

    const newCar = {
      nama: req.body.nama,
      price: req.body.price,
      capacity: req.body.capacity,
      photo: photoFilename,
    };
    await Car.create(newCar);
    flashCode(req, "success", "Ditambah");
    res.redirect("/cars");
  } catch (error) {
    console.log(error.message);
    req.flash("message", error.message);
    res.redirect("/404");
  }
};

const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCar = await Car.findByIdAndDelete(id);
    if (deletedCar.photo !== "car-default.png") {
      console.log("delete the image now!");
      fs.unlink(
        `${__dirname}/../assets/images/${deletedCar.photo}`,
        (err) => {}
      );
    }
    flashCode(req, "deleted", "Dihapus");
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
  createCar,
  updateCar,
  deleteCar,
};
