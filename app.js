require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const router = require("./routes");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname)));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(router);

module.exports = app;
