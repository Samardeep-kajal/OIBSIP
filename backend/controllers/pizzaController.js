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

const addPizzas = async (req, res) => {
  try {
    const pizza = req.body;
    const newPizza = new Pizza({
      name: pizza.name,
      image: pizza.image,
      sizes: ["Regular", "Medium", "Large"],
      prices: pizza.prices,
      description: pizza.description,
      category: pizza.category,
    });
    await newPizza.save();
    res.status(201).send("New Pizza Added");
    console.log(newPizza);
  } catch (error) {
    res.json({ message: error });
  }
};

const getPizzaById = async (req, res) => {
  const pizzaId = req.body.pizzaId;
  try {
    const pizza = await Pizza.findOne({ _id: pizzaId });
    res.status(201).send(pizza);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = { getAllPizzas, addPizzas, getPizzaById };
