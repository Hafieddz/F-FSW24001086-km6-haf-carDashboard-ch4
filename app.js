require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const router = require("./routes");
const flash = require('connect-flash');
const session = require('express-session');

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(session({
  secret : process.env.SECRET_SESSION,
  saveUninitialized : true,
  resave : true
}))

app.use(flash());

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname)));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get('/', (req,res) => {
  res.redirect('/cars');
})

app.use(router);

module.exports = app;
