const express = require("express");
const router = express.Router();
const { getAllPizzas, addPizzas } = require("../controllers/pizzaController");

router.get("/getAllPizzas", getAllPizzas);
router.post("/addpizza", addPizzas);
module.exports = router;
