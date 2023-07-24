const path = require("path");
const express = require("express");
const colors = require("colors");
const connectDB = require("./backend/config/db");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./backend/middleware/errorMiddleware");

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(errorHandler);

const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`Server started on port ${port}`));
