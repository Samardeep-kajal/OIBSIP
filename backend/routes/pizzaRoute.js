const express = require("express");
const router = express.Router();
const { getAllPizzas } = require("../controllers/pizzaController");

router.get("/getAllPizzas", getAllPizzas);
module.exports = router;
