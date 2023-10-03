// import data from .env file
require("dotenv").config();

const express = require("express");
const recipeRoutes = require("./routes/recipes"); // import /recipes from routes folder

//express app
const app = express();

// middleware
app.use(express.json()); // allows us to access req.body

app.use((req, res, next) => {
  console.log(req.path, req.method); // logs out the request path and method
  next();
});

// routes
app.use("/api/recipes", recipeRoutes);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("server listening on port 4000");
});

process.env;
