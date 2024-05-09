const gamesRouter = require("express").Router();

const getAllGames = async (req, res) => {};
const deleteGame = async (req, res) => {};

gamesRouter.get("/games", getAllGames);
gamesRouter.delete("/games/ :id ", deleteGame);
module.exports = gamesRouter;
