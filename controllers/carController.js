const Car = require("../models/carModel");

const getCars = async (req, res) => {
  try {
    const cars = await Car.find();

    if (!cars.length > 0) {
      res.status(200).json({
        status: "Success",
        message: "Data tidak ada.. Silahkan isi data terlebih dahulu..",
      });
    } else {
      res.status(200).json({
        status: "Success",
        cars: {
          cars,
        },
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

const getCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);

    res.status(200).json({
      status: "Success",
      car: {
        car,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "Success",
      message: "Data berhasil di update",
      data: {
        car,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

const createCar = async (req, res) => {
  try {
    console.log(req.body);
    const newCar = await Car.create(req.body);
    res.status(201).json({
      status: "Success",
      data: {
        car: newCar,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

const deleteCar = async (req, res) => {
  try {
    const deletedCar = await Car.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "Success",
      message: "Data deleted successfully",
      data: {
        deletedCar,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = {
  getCars,
  updateCar,
  getCar,
  createCar,
  deleteCar,
};
