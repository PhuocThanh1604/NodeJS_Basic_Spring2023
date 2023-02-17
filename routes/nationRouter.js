const express = require("express");
const bodyParser = require("body-parser");
const nationController = require("../Controllers/nationController");
const nationRouter = express.Router();
nationRouter.use(bodyParser.json());
nationRouter
  .route("/")
  .get(nationController.index)
  .post(nationController.create);

nationRouter
  .route("/editNation/:nationId")
  .get(nationController.formEdit)
  .post(nationController.edit);

nationRouter.route("/deleteNation/:nationId").get(nationController.delete);

module.exports = nationRouter;
