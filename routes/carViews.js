const router = require('express').Router();

const carPageController = require('../controllers/carPageController');

router.route('/').get(carPageController.carPage);
router.route('/add_cars').get(carPageController.createCarsPage);
router.route('/update').get(carPageController.updateCarsPage);
router.route('/admin/create_car').post(carPageController.createCars);

module.exports = router;