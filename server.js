const path = require("path");
const express = require("express");
const colors = require("colors");
const connectDB = require("./backend/config/db");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./backend/middleware/errorMiddleware");
const cors = require("cors");
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/user", require("./backend/routes/userRoutes"));
app.use("/api/admin", require("./backend/routes/adminRoutes"));
app.use("/api/pizza", require("./backend/routes/pizzaRoute"));
app.use("/api/order", require("./backend/routes/orderRoute"));

//Serving frontend/client
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "./", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

app.use(errorHandler);

const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`Server started on port ${port}`));
