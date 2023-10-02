// import data from .env file
require("dotenv").config();

const express = require("express");

//express app
const app = express();

// create middleware
app.use((req, res, next) => {
  console.log(req.path, req.method); // logs out the request path and method
  next();
});

// create default path and response
app.get("/", (req, res) => {
  res.json({ message: "Welcome to BarCart" });
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("server listening on port 4000");
});

process.env;
