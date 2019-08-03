const router = require("express").Router();
const profileController = require("../../controllers/profileController");

// Matches with "/api/profiles"
router.route("/")
  .get(profileController.findAll);

  module.exports = router;
