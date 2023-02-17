const Players = require("../models/players");
const clubData = [
  { id: "1", name: "Argentina" },
  { id: "2", name: "Saudi Arabia" },
  { id: "3", name: "Mexico" },
  { id: "4", name: "Poland" },
  { id: "5", name: "Qatar" },
  { id: "6", name: "Ecuador" },
  { id: "7", name: "Senegal" },
  { id: "8", name: "Netherlands" },
  { id: "9", name: "England" },
  { id: "10", name: "Iran" },
  { id: "11", name: "USA" },
  { id: "12", name: "Wales" },
  { id: "13", name: "France" },
  { id: "14", name: "Australia" },
  { id: "15", name: "DenMark" },
  { id: "16", name: "Tunisia" },
  { id: "17", name: "Spain" },
  { id: "18", name: "Costa Rica" },
  { id: "19", name: "Germany" },
  { id: "20", name: "Japan" },
  { id: "21", name: "Belgium" },
  { id: "22", name: "Canada" },
  { id: "23", name: "Morocco" },
  { id: "24", name: "Croatia" },
  { id: "25", name: "Brazil" },
  { id: "26", name: "Serbia" },
  { id: "27", name: "Switzerland" },
  { id: "28", name: "Cameroon" },
  { id: "29", name: "Portugal" },
  { id: "30", name: "Ghana" },
  { id: "31", name: "Uruguay" },
  { id: "32", name: "Korea Republic" },
];
const positions = [
  { id: "1", name: "GK" },
  { id: "2", name: "CB" },
  { id: "3", name: "RB" },
  { id: "4", name: "LB" },
  { id: "5", name: "CM" },
  { id: "6", name: "CDM" },
  { id: "7", name: "CAM" },
  { id: "8", name: "RW" },
  { id: "9", name: "LW" },
  { id: "10", name: "CF" },
  { id: "10", name: "RF" },
  { id: "11", name: "LF" },
  { id: "12", name: "ST" },
];
class playerController {
  index(req, res, next) {
    Players.find({})
      .then((players) => {
        res.render("players", {
          title: "The list of players",
          players: players,
          clubList: clubData,
          positionList: positions,
        });
      })
      .catch(next);
  }
  create(req, res, next) {
    const player = new Players(req.body);
    player
      .save()
      .then(() => {
        res.redirect("/players");
      })
      .catch(next);
  }
  formEdit(req, res, next) {
    const playerId = req.params.playerId;
    Players.findById(playerId)
      .then((player) => {
        res.render("editPlayer", {
          title: "The detail of player",
          player: player,
          clubList: clubData,
          positionList: positions,
        });
      })
      .catch(next);
  }
  edit(req, res, next) {
    Players.updateOne({ _id: req.params.playerId }, req.body)
      .then(() => {
        res.redirect("/players");
      })
      .catch(next);
  }
  delete(req, res, next) {
    Players.deleteOne({ _id: req.params.playerId })
      .then(() => {
        res.redirect("/players");
      })
      .catch(next);
  }
  getProfile(req, res, next) {
    Players.findOne({ _id: req.params.playerId })
      .then((player) => {
        res.render("playerProfile", {
          player: player,
          title: "Profile Of " + player.name,
        });
      })
      .catch(next);
  }
}
module.exports = new playerController();
