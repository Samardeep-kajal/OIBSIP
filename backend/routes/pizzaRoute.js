const express = require("express");
const router = express.Router();
const {
  getAllPizzas,
  addPizzas,
  getPizzaById,
} = require("../controllers/pizzaController");

router.get("/getAllPizzas", getAllPizzas);
router.post("/addpizza", addPizzas);
router.post("/getpizzabyid", getPizzaById);
module.exports = router;
