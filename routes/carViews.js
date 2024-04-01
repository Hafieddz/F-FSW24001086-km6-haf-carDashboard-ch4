const router = require("express").Router();
const upload = require("../middleware/upload");

const carPageController = require("../controllers/carPageController");

router.route("/").get(carPageController.carPage);
router.route("/add_cars").get(carPageController.createCarsPage);
router.route("/update/:id").get(carPageController.updateCarPage);

router
  .route("/admin/create_car")
  .post(upload.single("carPhoto"), carPageController.createCar);
router.route("/admin/update_car/:id").post(carPageController.updateCar);
router.route("/admin/delete_car/:id").post(carPageController.deleteCar);

module.exports = router;
  