const express = require("express");
const router = express.Router();
const { getAllPizzas, addPizza } = require("../controllers/pizzaController");

router.get("/getAllPizzas", getAllPizzas);
router.post("/addpizza", addPizza);
module.exports = router;
