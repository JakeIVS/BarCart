const express = require("express");
const {
  getCocktails,
  getCocktail,
  createCocktail,
  deleteCocktail,
  updateCocktail,
} = require("../controllers/cocktailController");

const router = express.Router();

// GET all cocktails
router.get("/", getCocktails);

// GET a single cocktail
router.get("/:id", getCocktail);

// CREATE a new cocktail
router.post("/", createCocktail);

// DELETE a cocktail
router.delete("/:id", deleteCocktail);

// UPDATE a cocktail
router.patch("/:id", updateCocktail);

module.exports = router;
