const express = require("express");

const router = express.Router();

// GET all recipes
router.get("/", (req, res) => {
  res.json({ message: "GET all recipes" });
});

// GET a single recipe
router.get("/:id", (req, res) => {
  res.json({ messgae: "GET a single recipe" });
});

// POST a new recipe
router.post("/", (req, res) => {
  res.json({ message: "POST a new recipe" });
});

// DELETE a recipe
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a new recipe" });
});

// UPDATE a recipe
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a new recipe" });
});

module.exports = router;
