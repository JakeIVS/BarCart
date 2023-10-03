const express = require("express");
const {
  getCocktails,
  getCocktail,
  createCocktail,
} = require("../controllers/cocktailController");

const router = express.Router();

// GET all cocktails
router.get("/", getCocktails);

// GET a single cocktail
router.get("/:id", getCocktail);

// CREATE a new cocktail
router.post("/", createCocktail);

// DELETE a cocktail
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a new cocktail" });
});

// UPDATE a cocktail
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a new cocktail" });
});

module.exports = router;
