const router = require('express').Router();

const carPageController = require('../controllers/carPageController');

router.route('/').get(carPageController.carPage);
router.route('/add').get(carPageController.createPage);
router.route('/update').get(carPageController.updatePage);

module.exports = router;