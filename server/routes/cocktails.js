const express = require("express");
const Cocktail = require("../models/cocktailModel");

const router = express.Router();

// GET all cocktails
router.get("/", (req, res) => {
  res.json({ message: "GET all cocktails" });
});

// GET a single cocktail
router.get("/:id", (req, res) => {
  res.json({ messgae: "GET a single cocktail" });
});

// POST a new cocktail
router.post("/", (req, res) => {
  const { name, spirit, description } = req.body;

  res.json({ message: "POST a new cocktail" });
});

// DELETE a cocktail
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a new cocktail" });
});

// UPDATE a cocktail
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a new cocktail" });
});

module.exports = router;
