const express = require("express");
const router = express.Router();
const {
  getAllPizzas,
  addPizzas,
  getPizzaById,
  updatePizza,
} = require("../controllers/pizzaController");

router.get("/getAllPizzas", getAllPizzas);
router.post("/addpizza", addPizzas);
router.post("/getpizzabyid", getPizzaById);
router.post("/updatepizza", updatePizza);
module.exports = router;
