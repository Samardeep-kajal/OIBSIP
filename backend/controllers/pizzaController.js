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

const addPizza = async (req, res) => {
  try {
    const { pizza } = req.body;
    const newPizza = new Pizza({
      name: pizza.name,
      image: image.name,
      sizes: ["Regular", "Medium", "Large"],
      prices: pizza.prices,
      description: pizza.description,
      category: pizza.category,
    });
    await newPizza.save();
    res.status(201).send("New Pizza Added");
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = { getAllPizzas, addPizza };
