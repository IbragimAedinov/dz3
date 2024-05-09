const { deleteGame, getAllGames, addGame } = require("../controllers/game");

const gamesRouter = require("express").Router();

gamesRouter.get("/games", getAllGames);
gamesRouter.delete("/games/ :id ", deleteGame);
gamesRouter.post("/games", addGame);
module.exports = gamesRouter;
