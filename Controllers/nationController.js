const Nations = require("../models/nations");

class nationController {
  index(req, res, next) {
    Nations.find({})
      .then((nations) => {
        res.render("nations", {
          title: "The list of nations",
          nations: nations,
        });
      })
      .catch(next);
  }
  create(req, res, next) {
    const nation = new Nations(req.body);
    nation
      .save()
      .then(() => {
        res.redirect("/nations");
      })
      .catch(next);
  }
  formEdit(req, res, next) {
    const nationId = req.params.nationId;
    Nations.findById(nationId)
      .then((nation) => {
        res.render("editNation", {
          title: "The detail of " + nation.name,
          nation: nation,
        });
      })
      .catch(next);
  }
  edit(req, res, next) {
    Nations.updateOne({ _id: req.params.nationId }, req.body)
      .then(() => {
        res.redirect("/nations");
      })
      .catch(next);
  }
  delete(req, res, next) {
    Nations.deleteOne({ _id: req.params.nationId })
      .then(() => {
        res.redirect("/nations");
      })
      .catch(next);
  }
}
module.exports = new nationController();
