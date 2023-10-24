const express = require("express");
const router = express.Router();
const { placeOrder, getUserOrder } = require("../controllers/orderController");

router.post("/placeorder", placeOrder);
router.post("/userorders", getUserOrder);
module.exports = router;
