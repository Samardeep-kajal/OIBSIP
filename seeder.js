const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("colors");
const connectDB = require("./backend/config/db");
const Pizza = require("./backend/models/pizzaModel");
const pizzas = require("./backend/data/pizzas");

//Connect dot env and mongodb conn file
dotenv.config();
connectDB();

//Import Data
const importData = async () => {
  try {
    await Pizza.deleteMany();
    const sampleData = pizzas.map((pizza) => {
      return { ...pizza };
    });
    await Pizza.insertMany(sampleData);
    console.log("Data Imported!".bgGreen.white);
    process.exit();
  } catch (error) {
    console.log(`${error}`.bgRed.white);
    process.exit(1);
  }
};

const dataDestroy = () => {};

if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
}
