const router = require("express").Router();
const jamsController = require("../../controllers/jamsController");

// Matches with "/api/jams"
router.route("/")
  .get(jamsController.findAll)
  .post(jamsController.create);

module.exports = router;