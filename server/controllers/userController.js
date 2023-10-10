const User = require("../models/userModel");
const mongoose = require("mongoose");

// get all users
const getUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });

  res.status(200).json(users);
};

// get one user

// create new user

// delete a user

// update a user
