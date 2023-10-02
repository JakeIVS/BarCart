// import data from .env file
require("dotenv").config();

const express = require("express");

//express app
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to BarCart" });
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("server listening on port 4000");
});

process.env;
