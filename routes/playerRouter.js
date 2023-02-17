const express = require("express");
const bodyParser = require("body-parser");
const playerController = require("../Controllers/playerController");
const playerRouter = express.Router();
playerRouter.use(bodyParser.json());
playerRouter
  .route("/")
  .get(playerController.index)
  .post(playerController.create);

playerRouter
  .route("/editPlayer/:playerId")
  .get(playerController.formEdit)
  .post(playerController.edit);

playerRouter.route("/deletePlayer/:playerId").get(playerController.delete);

playerRouter.route("/profile/:playerId").get(playerController.getProfile);

module.exports = playerRouter;
