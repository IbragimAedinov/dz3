const { sendAllGames, sendUpdatedGames } = require("../controllers/game");
const {
  getAllGames,
  checkisTitleInAray,
  updateGamesArray,
  updateGamesFile,
  findGamesById,
  deleteGame,
} = require("../middlewares/games");

const gamesRouter = require("express").Router();

gamesRouter.get("/games", getAllGames, sendAllGames);
gamesRouter.delete(
  "/games/ :id ",
  getAllGames,
  updateGamesFile,
  sendUpdatedGames,
  findGamesById,
  deleteGame
);
gamesRouter.post(
  "/games",
  getAllGames,
  checkisTitleInAray,
  updateGamesArray,
  updateGamesFile,
  sendUpdatedGames
);
module.exports = gamesRouter;
