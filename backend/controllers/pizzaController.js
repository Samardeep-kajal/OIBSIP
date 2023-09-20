const Pizza = require("../models/pizzaModel");

//to get all pizzas
const getAllPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.find({});
    res.send(pizzas);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = { getAllPizzas };
