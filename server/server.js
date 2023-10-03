// import data from .env file
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cocktailRoutes = require("./routes/Cocktail"); // import /cocktails from routes folder

//express app
const app = express();

// middleware
app.use(express.json()); // allows us to access req.body

app.use((req, res, next) => {
  console.log(req.path, req.method); // logs out the request path and method
  next();
});

// routes
app.use("/api/cocktails", cocktailRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to database: listening on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

process.env;
