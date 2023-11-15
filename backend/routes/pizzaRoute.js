const express = require("express");
const router = express.Router();
const {
  getAllPizzas,
  addPizzas,
  getPizzaById,
  updatePizza,
  deletePizza,
} = require("../controllers/pizzaController");

router.get("/getAllPizzas", getAllPizzas);
router.post("/addpizza", addPizzas);
router.post("/getpizzabyid", getPizzaById);
router.post("/updatepizza", updatePizza);
router.post("/deletepizza", deletePizza);
module.exports = router;
