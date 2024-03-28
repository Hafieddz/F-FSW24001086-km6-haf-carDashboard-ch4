const express = require("express");

const carApi = require('./carRoutes');
const carView = require('./carViews') 

const router = express.Router();

router.use("/api/v1/cars", carApi);
router.use("/", carView);

module.exports = router;
