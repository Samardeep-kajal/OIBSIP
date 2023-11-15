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

const updatePizza = async (req, res) => {
  const updatedPizza = req.body.updatedPizza;
  try {
    const pizza = await Pizza.findOne({ _id: updatedPizza._id });
    pizza.name = updatedPizza.name;
    pizza.image = updatedPizza.image;
    pizza.category = updatedPizza.category;
    pizza.prices = updatedPizza.prices;
    pizza.description = updatedPizza.description;
    await pizza.save();
    res.status(201).send("Pizza Updated");
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const deletePizza = async (req, res) => {
  const pizzaId = req.body.pizzaId;
  try {
    await Pizza.findOneAndDelete({ _id: pizzaId });
    res.status(200).send("Pizza Deleted");
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

module.exports = {
  getAllPizzas,
  addPizzas,
  getPizzaById,
  updatePizza,
  deletePizza,
};
