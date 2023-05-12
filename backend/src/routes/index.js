const Router = require("express").Router;
const router = Router();
const userController = require("./users/user.controller");
const saleController = require("./sales/sale.controller");
const markerController = require("./markers/marker.controller");

router.use('/user', userController);
router.use('/sale', saleController);
router.use('/marker', markerController);

module.exports = router;