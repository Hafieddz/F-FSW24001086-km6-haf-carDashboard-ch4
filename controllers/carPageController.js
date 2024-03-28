const path = require('path')

const carPage = async (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
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
