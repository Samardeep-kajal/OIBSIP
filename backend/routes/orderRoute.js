const express = require("express");
const router = express.Router();
const {
  placeOrder,
  getUserOrder,
  allUserOrder,
} = require("../controllers/orderController");

router.post("/placeorder", placeOrder);
router.post("/userorders", getUserOrder);
router.get("/alluserorder", allUserOrder);
module.exports = router;
