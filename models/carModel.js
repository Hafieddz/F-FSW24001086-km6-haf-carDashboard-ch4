const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  nama: {
    type: String,
    unique : true,
    required : true
  },
  price: {
    type: Number,
    required: true,
  },
  capacity: {
    type: String,
    default : "Small"
  },
  photo: {
    type: String,
    default: "car-default.png",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
