const express = require("express");
const app = express();

// middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // allows us to parse data from the body of an html document, such as form data
app.use(express.json()); // allows us to parse json data

app.set("view engine", "ejs");

const userRouter = require("./routes/users");

app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);
