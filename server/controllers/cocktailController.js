const Cocktail = require("../models/cocktailModel");

// get all cocktails
const getCocktails = async (req, res) => {
  const cocktails = await Cocktail.find({}).sort({ createdAt: -1 });

  res.status(200).json(cocktails);
};

// get a single cocktail
const getCocktail = async (req, res) => {
  const { id } = req.params;

  const cocktail = await Cocktail.findById(id);
  if (!cocktail) {
    return res.status(404).json({ error: "ID does not exist" });
  }

  res.status(200).json(cocktail);
};

// create new cocktail
const createCocktail = async (req, res) => {
  const { name, spirit, recipe } = req.body;

  try {
    // add a doc to db
    const cocktail = await Cocktail.create({ name, spirit, recipe });
    res.status(200).json(cocktail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a cocktail

// update a cocktail

module.exports = {
  getCocktails,
  getCocktail,
  createCocktail,
};
