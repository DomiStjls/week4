const games = require("../models/game");

const findAllGames = async (req, res, next) => {
  // req.gamesArray = await games.find({}).populate("categories").populate("users");
  const result = await games.find({}).populate("categories").populate("users");
  console.log(result);
  next();
};
module.exports = findAllGames;